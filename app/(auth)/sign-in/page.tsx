import type { Metadata } from "next";
import { SignInForm } from "@/components/sign-in-form";

export const metadata: Metadata = { title: "Sign in" };

export default function SignInPage() {
  return (
    <>
      <h1 className="text-center font-serif text-display-md text-ink">Sign in to your cohort</h1>
      <SignInForm />
    </>
  );
}
