import { SchoolLogo } from "@/components/school-logo";

/** Centred column (UI_PROMPTS 2.14); on wider screens the form sits on a white card. */
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="mb-8 flex flex-col items-center gap-3">
          <SchoolLogo className="h-14" />
          <p className="font-serif text-body-lg font-medium text-ink-secondary">Syndicate</p>
        </div>
        <div className="md:rounded-card md:border md:border-line md:bg-white md:p-10">{children}</div>
      </div>
    </main>
  );
}
