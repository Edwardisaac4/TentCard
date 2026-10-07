"use server";

/*
 * Placeholder sign-in: checks the default credentials in .env.local (SIGN_IN_EMAIL and
 * SIGN_IN_PASSWORD) and goes to Home. It creates no session and protects no pages.
 */

import { createHash, timingSafeEqual } from "node:crypto";
import { redirect } from "next/navigation";
import { signInSchema } from "@/lib/validation/auth";

export type SignInState = { error?: string; field?: "email" | "password" };

const fieldErrors = {
  email: "Enter a full email address, like name@company.com",
  password: "Enter your password",
};

export async function signIn(_previous: SignInState, formData: FormData): Promise<SignInState> {
  const parsed = signInSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });
  if (!parsed.success) {
    const field = parsed.error.issues[0]?.path[0] === "password" ? "password" : "email";
    return { error: fieldErrors[field], field };
  }

  const expectedEmail = process.env.SIGN_IN_EMAIL?.trim().toLowerCase();
  const expectedPassword = process.env.SIGN_IN_PASSWORD;
  if (!expectedEmail || !expectedPassword) {
    const missing = [!expectedEmail && "SIGN_IN_EMAIL", !expectedPassword && "SIGN_IN_PASSWORD"].filter(Boolean);
    // VERCEL_ENV says which Vercel environment (production, preview) is missing the values.
    console.error(
      `Sign-in isn't configured (${process.env.VERCEL_ENV ?? "local"}): ${missing.join(" and ")} not set. ` +
        "Locally, add them to .env.local; on Vercel, under Settings, Environment Variables, for this environment.",
    );
    return { error: "Sign-in isn't available right now. Try again later." };
  }

  // Compare both, without short-circuiting, so a wrong email and a wrong password take the same time.
  const emailMatches = sameText(parsed.data.email, expectedEmail);
  const passwordMatches = sameText(parsed.data.password, expectedPassword);
  if (!emailMatches || !passwordMatches) {
    return { error: "That email and password don't match. Try again.", field: "password" };
  }

  redirect("/home");
}

/** Constant-time comparison; hashing first gives both sides the same length. */
function sameText(a: string, b: string) {
  const digest = (value: string) => createHash("sha256").update(value).digest();
  return timingSafeEqual(digest(a), digest(b));
}
