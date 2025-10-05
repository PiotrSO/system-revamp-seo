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
import { useToast } from "@/hooks/use-toast";
import { FileText } from "lucide-react";

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
    },
  });

  const onSubmit = (data: FormValues) => {
    // Create mailto link with form data
    const subject = encodeURIComponent("Zapytanie o wycenę");
    const body = encodeURIComponent(
      `Dzień dobry,\n\nProszę o przygotowanie wyceny.\n\nDane kontaktowe:\nImię: ${data.firstName}\nNazwisko: ${data.lastName}\nNazwa firmy: ${data.companyName}\n\nPozdrawiam`
    );
    
    window.location.href = `mailto:biuro@system-serwis.eu?subject=${subject}&body=${body}`;
    
    toast({
      title: "Przekierowanie do aplikacji email",
      description: "Twoja aplikacja email zostanie otwarta z przygotowaną wiadomością.",
    });
    
    setOpen(false);
    form.reset();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full bg-primary hover:bg-primary/90">
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
            <Button type="submit" className="w-full">
              Wyślij zapytanie
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
