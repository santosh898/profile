"use client";

import { useActionState } from "react";
import Link from "next/link";
import { ArrowLeft, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { submitContactForm } from "./actions";

const initialState = {
  data: {
    name: "",
    email: "",
    message: "",
    phone: "",
  },
  errors: {
    name: [],
    email: [],
    message: [],
    phone: [],
  },
};

export default function ContactPage() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  );

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-6 py-12">
        <Link href="/" className="inline-block mb-8">
          <Button variant="ghost">
            <ArrowLeft className="h-4 w-4" /> Back to Portfolio
          </Button>
        </Link>

        <h1 className="text-3xl font-bold mb-8">Contact Me</h1>

        <form action={formAction} className="space-y-6 max-w-md">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name *
            </label>
            <Input
              id="name"
              name="name"
              required
              defaultValue={state.data.name}
              className="bg-card"
            />
            {state.errors?.name && (
              <>
                {state.errors.name.map((error, index) => (
                  <p className="mt-1 text-sm text-red-500" key={index}>
                    {error}
                  </p>
                ))}
              </>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Phone
            </label>
            <Input
              id="phone"
              name="phone"
              defaultValue={state.data.phone}
              className="bg-card"
            />
            {state.errors?.phone && (
              <>
                {state.errors.phone.map((error, index) => (
                  <p className="mt-1 text-sm text-red-500" key={index}>
                    {error}
                  </p>
                ))}
              </>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              defaultValue={state.data.email}
              className="bg-card"
            />
            {state.errors?.email && (
              <>
                {state.errors.email.map((error, index) => (
                  <p className="mt-1 text-sm text-red-500" key={index}>
                    {error}
                  </p>
                ))}
              </>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message *
            </label>
            <Textarea
              id="message"
              name="message"
              required
              defaultValue={state.data.message}
              className="bg-card"
              rows={5}
            />
            {state.errors?.message && (
              <>
                {state.errors.message.map((error, index) => (
                  <p className="mt-1 text-sm text-red-500" key={index}>
                    {error}
                  </p>
                ))}
              </>
            )}
          </div>
          <Button type="submit" disabled={isPending} variant="secondary">
            {isPending && <Loader2 className="animate-spin" />}
            {isPending ? "Sending your Message..." : "Send Message"}
          </Button>
        </form>
      </main>
    </div>
  );
}
