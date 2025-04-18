"use server";

import { z } from "zod";
import { FormSchema } from "@/lib/types";
import { createClient } from "../utils/supabase/server";

export async function actionLoginUser({
  email,
  password,
}: z.infer<typeof FormSchema>) {
  // Use createServerActionClient for server actions
  const supabase = await createClient();
  const response = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return response;
}

export async function actionSignUpUser({
  email,
  password,
}: z.infer<typeof FormSchema>) {
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
    email,
    password,
  });
  return response;
}
