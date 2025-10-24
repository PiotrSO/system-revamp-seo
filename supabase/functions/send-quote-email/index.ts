import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface QuoteEmailRequest {
  firstName: string;
  lastName: string;
  companyName: string;
  phone: string;
  email: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Received quote request");
    
    const { firstName, lastName, companyName, phone, email }: QuoteEmailRequest = await req.json();
    
    console.log(`Processing quote for: ${firstName} ${lastName} from ${companyName}`);

    // Send email to company
    const emailResponse = await resend.emails.send({
      from: "System Serwis <kontakt@saturdev.pl>",
      to: ["biuro@system-serwis.eu"],
      subject: `Nowe zapytanie o wycenę od ${companyName}`,
      html: `
        <h2>Nowe zapytanie o wycenę</h2>
        <p><strong>Imię i nazwisko:</strong> ${firstName} ${lastName}</p>
        <p><strong>Firma:</strong> ${companyName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">Wiadomość wysłana automatycznie z formularza kontaktowego na stronie www.system-serwis.eu</p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ 
        success: true,
        message: "Wiadomość została wysłana pomyślnie" 
      }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-quote-email function:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        success: false 
      }), {
      status: 500,
      headers: { 
        "Content-Type": "application/json", 
        ...corsHeaders 
      },
    });
  }
};

serve(handler);
