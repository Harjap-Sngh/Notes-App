"use server";

import { z } from "zod";
import { FormSchema } from "@/lib/types";
import { createClient } from "../utils/supabase/server";
import { redirect } from "next/navigation";

export async function actionLoginUser({
  email,
  password,
}: z.infer<typeof FormSchema>) {
  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) return { error };

  redirect("/dashboard");
}

export async function actionSignUpUser({
  email,
  password,
}: z.infer<typeof FormSchema>) {
  console.log("actionSignUpUser" + email + password);
  // Use createServerActionClient for server actions
  const supabase = await createClient();

  const { data } = await supabase
    .from("profiles")
    .select("*")
    .eq("email", email);

  if (data?.length) {
    return { error: { message: "User already exists", data } };
  }

  const response = await supabase.auth.signUp({
    email: email,
    password: password,
  });
  return response;
}
