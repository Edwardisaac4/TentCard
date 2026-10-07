import { redirect } from "next/navigation";

// Sign-in is a local-only placeholder, so production opens straight on Home.
export default function RootPage() {
  redirect(process.env.NODE_ENV === "development" ? "/sign-in" : "/home");
}
