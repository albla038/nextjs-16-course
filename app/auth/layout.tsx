import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-svh flex items-center justify-center">
      <div className="absolute left-5 top-5">
        <Link href="/" className={buttonVariants({ variant: "secondary" })}>
          <ArrowLeft className="size-4" /> Go Back
        </Link>
      </div>
      <div className="max-w-md mx-auto w-full">{children}</div>
    </div>
  );
}
