"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/cypresslogo.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Loader from "@/components/Loader";

const LoginPage = () => {
  const router = useRouter();
  const [submitError, setSubmitError] = useState("");

  const form = useForm({
    mode: "onChange",
    resolver: zodResolver(
      z.object({
        email: z.string().email("Invalid email address"),
        password: z.string().min(1, "Password must be at least 6 characters"),
      })
    ),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (formData: any) => {};

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen px-4 py-6 space-y-6 bg-background/50 dark:bg-background/80 backdrop-blur-sm">
      <Form {...form}>
        <form
          onChange={() => {
            if (submitError) setSubmitError("");
          }}
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full sm:justify-center sm:w-[400px] space-y-6 flex flex-col"
        >
          <Link
            href="/"
            className="
          w-full
          flex
          justify-left
          items-center"
          >
            <Image src={Logo} alt="cypress Logo" width={50} height={50} />
            <span
              className="font-semibold
          dark:text-white text-4xl first-letter:ml-2"
            >
              cypress.
            </span>
          </Link>
          <FormDescription
            className="
        text-foreground/60"
          >
            An all-In-One Collaboration and Productivity Platform
          </FormDescription>
          <FormField
            disabled={isLoading}
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="email" placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            disabled={isLoading}
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {submitError && <FormMessage>{submitError}</FormMessage>}
          <Button
            type="submit"
            className="w-full p-6"
            size="lg"
            disabled={isLoading}
          >
            {!isLoading ? "Login" : <Loader />}
          </Button>
          <span className="self-container w-[100%] text-center text-foreground/60">
            Dont have an account?{" "}
            <Link
              href="/signup"
              className="text-primary hover:text-primary-purple-600"
            >
              Sign Up
            </Link>
          </span>
        </form>
      </Form>
    </div>
  );
};

export default LoginPage;
