"use server";

import { z } from "zod";

const FormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export async function actionLogInUser({
  email,
  password,
}: z.infer<typeof FormSchema>) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    throw new Error("Login failed");
  }

  return res.json();
}
