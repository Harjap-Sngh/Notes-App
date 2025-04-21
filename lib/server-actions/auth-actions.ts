"use server";

import { z } from "zod";
import { FormSchema } from "@/lib/types";
import { createClient } from "../utils/supabase/server";
import { redirect } from "next/navigation";
// “use server” stays
export async function actionLoginUser({
  email,
  password,
}: z.infer<typeof FormSchema>) {
  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  // don’t redirect; just return the error (or null)
  return { error };
}

export async function actionSignUpUser({
  email,
  password,
}: z.infer<typeof FormSchema>) {
  const supabase = await createClient();
  // optional: check if profile exists…
  const { data } = await supabase
    .from("profiles")
    .select("*")
    .eq("email", email);

  if (data?.length) {
    return { error: { message: "User already exists" } };
  }

  // sign up
  const { error } = await supabase.auth.signUp({ email, password });
  return { error };
}
