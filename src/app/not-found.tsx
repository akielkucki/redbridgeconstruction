import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function NotFoundPage() {
  return (
    <main className="shell flex min-h-screen flex-col justify-center py-24">
      <p className="meta text-grey">Error 404</p>
      <h1
        className="display mt-6 text-ink"
        style={{ fontSize: "clamp(3rem, 10vw, 8rem)" }}
      >
        Not on the
        <br />
        drawings.
      </h1>
      <div aria-hidden className="mt-8 h-[2px] w-24 bg-red" />
      <p className="mt-8 max-w-md text-lg leading-relaxed text-grey">
        This page may have been moved, renamed, or never built. Head back home
        and we’ll take it from there.
      </p>
      <div className="mt-10">
        <Link
          href="/"
          className={buttonVariants({ variant: "accent", size: "lg" })}
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
