"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import PocketBase from "pocketbase";
import defaultsDeep from "lodash/defaultsDeep";
import { MailtrapClient } from "mailtrap";

const pb = new PocketBase("https://direction-trade.pockethost.io");

const TOKEN = process.env.MAILTRAP_TOKEN!;

const client = new MailtrapClient({
  token: TOKEN,
});

const sender = {
  email: "santosh@sted.space",
  name: "Sai Santosh K",
};

const FormSchema = z
  .object({
    name: z.string().min(3, "Name should at least be 3 characters"),
    message: z.string().min(2, "Message should at least be 2 characters"),
    email: z.string().email("Invalid email address").or(z.literal("")),
    phone: z
      .string()
      .min(10, "Phone number should at least be 10 characters")
      .or(z.literal("")),
  })
  .superRefine((data, ctx) => {
    if (!data.email && !data.phone) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "At least one of email or phone must be present",
        path: ["email"], // Mark the email field with the custom error
      });
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "At least one of email or phone must be present",
        path: ["phone"], // Mark the phone field with the custom error
      });
    }
  });

export async function submitContactForm(
  _prevState: Record<string, unknown>,
  formData: FormData
) {
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
    phone: formData.get("phone"),
  };

  const validatedFields = FormSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      data: defaultsDeep(data, {
        email: "",
        phone: "",
        name: "",
        message: "",
      }),
    };
  }

  await pb.collection("contact_me_santosh").create(validatedFields.data);

  await client.send({
    from: sender,
    to: [{ email: validatedFields.data.email }],
    template_uuid: "2ee5c2b9-6279-419a-8b33-ffa6157f8934",
    template_variables: { name: validatedFields.data.name },
  });

  redirect("/contact/thank-you");
}
