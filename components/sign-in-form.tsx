"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { CircleAlert } from "lucide-react";
import { signIn, type SignInState } from "@/app/(auth)/actions";

export function SignInForm() {
  const [state, formAction, pending] = useActionState<SignInState, FormData>(signIn, {});
  // Email is controlled so it survives a failed attempt; the password is left uncontrolled,
  // so React's reset after the action clears it.
  const [email, setEmail] = useState("");
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (state.field === "email") emailRef.current?.focus();
    if (state.field === "password") passwordRef.current?.focus();
  }, [state]);

  return (
    <form action={formAction} noValidate className="mt-8 flex flex-col gap-5">
      <div>
        <label htmlFor="email" className="text-body-md font-medium text-ink">
          Email address
        </label>
        <input
          ref={emailRef}
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          aria-invalid={state.field === "email"}
          aria-describedby={state.field === "email" ? "sign-in-error" : undefined}
          className={`input mt-2 h-12 text-body-lg ${state.field === "email" ? "border-danger" : ""}`}
        />
        {state.field === "email" && <FieldError message={state.error!} />}
      </div>

      <div>
        <label htmlFor="password" className="text-body-md font-medium text-ink">
          Password
        </label>
        <input
          ref={passwordRef}
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          aria-invalid={state.field === "password"}
          aria-describedby={state.field === "password" ? "sign-in-error" : undefined}
          className={`input mt-2 h-12 text-body-lg ${state.field === "password" ? "border-danger" : ""}`}
        />
        {state.field === "password" && <FieldError message={state.error!} />}
      </div>

      {state.error && !state.field && (
        <p role="alert" className="flex items-center gap-1.5 text-body-md text-danger">
          <CircleAlert aria-hidden="true" className="size-4 shrink-0" />
          {state.error}
        </p>
      )}

      <button type="submit" disabled={pending} className="btn btn-primary mt-1 h-12 w-full text-body-lg">
        {pending ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}

function FieldError({ message }: { message: string }) {
  return (
    <p id="sign-in-error" className="mt-2 flex items-center gap-1.5 text-body-md text-danger">
      <CircleAlert aria-hidden="true" className="size-4 shrink-0" />
      {message}
    </p>
  );
}
