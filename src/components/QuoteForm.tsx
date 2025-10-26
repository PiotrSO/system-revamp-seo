import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { FileText } from "lucide-react";
import { Link } from "react-router-dom";

const formSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, { message: "Imię musi mieć minimum 2 znaki" })
    .max(50, { message: "Imię może mieć maksymalnie 50 znaków" }),
  lastName: z
    .string()
    .trim()
    .min(2, { message: "Nazwisko musi mieć minimum 2 znaki" })
    .max(50, { message: "Nazwisko może mieć maksymalnie 50 znaków" }),
  companyName: z
    .string()
    .trim()
    .min(2, { message: "Nazwa firmy musi mieć minimum 2 znaki" })
    .max(100, { message: "Nazwa firmy może mieć maksymalnie 100 znaków" }),
  phone: z
    .string()
    .trim()
    .min(9, { message: "Numer telefonu musi mieć minimum 9 cyfr" })
    .max(15, { message: "Numer telefonu może mieć maksymalnie 15 znaków" }),
  email: z
    .string()
    .trim()
    .email({ message: "Nieprawidłowy adres e-mail" })
    .max(255, { message: "E-mail może mieć maksymalnie 255 znaków" }),
  consent: z
    .boolean()
    .refine((val) => val === true, {
      message: "Musisz wyrazić zgodę na przetwarzanie danych osobowych",
    }),
});

type FormValues = z.infer<typeof formSchema>;

export const QuoteForm = () => {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      companyName: "",
      phone: "",
      email: "",
      consent: false,
    },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      // Use VITE_API_URL when provided (production); otherwise use relative path so /api works when
      // frontend and backend are served from the same origin.
      const apiBase = import.meta.env.VITE_API_URL ?? "";
      const url = apiBase ? `${apiBase.replace(/\/$/, "")}/api/send-email.php` : "/api/send-email.php";

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err?.message || "Błąd wysyłki");
      }

      toast({
        title: "Wiadomość wysłana",
        description: "Wiadomość została wysłana z adresu kontakt@saturdev.pl",
      });

      setOpen(false);
      form.reset();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.error(error);
      toast({
        title: "Błąd",
        description: "Wystąpił problem podczas wysyłania wiadomości. Spróbuj później.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="destructive" className="w-full">
          <FileText className="w-4 h-4 mr-2" />
          Zamów wstępną wycenę
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Formularz wyceny</DialogTitle>
          <DialogDescription>
            Wypełnij poniższy formularz, aby otrzymać wstępną wycenę naszych usług.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Imię</FormLabel>
                  <FormControl>
                    <Input placeholder="Wprowadź imię" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nazwisko</FormLabel>
                  <FormControl>
                    <Input placeholder="Wprowadź nazwisko" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nazwa firmy</FormLabel>
                  <FormControl>
                    <Input placeholder="Wprowadź nazwę firmy" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefon</FormLabel>
                  <FormControl>
                    <Input placeholder="Wprowadź numer telefonu" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Wprowadź adres e-mail" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="consent"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-sm font-normal">
                      Wyrażam zgodę na przetwarzanie danych osobowych zgodnie z{" "}
                      <Link
                        to="/polityka-prywatnosci"
                        className="text-primary underline hover:text-primary/80"
                      >
                        polityką prywatności
                      </Link>
                    </FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Wyślij zapytanie
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
