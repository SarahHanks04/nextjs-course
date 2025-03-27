"use client";
import { SignedOut, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathName = usePathname();
  return (
    <nav className="bg-blue-100 p-4 flex items-center justify-between">
      <Link
        href="/"
        className={pathName === "/" ? "font-bold mr-4" : "text-blue-400 mr-4"}
      >
        Home
      </Link>
      <Link
        href="/about"
        className={
          pathName === "/about" ? "font-bold mr-4" : "text-blue-400 mr-4"
        }
      >
        About
      </Link>
      <Link
        href="/products/1"
        className={
          pathName.startsWith("/products/1")
            ? "font-bold mr-4"
            : "text-blue-400 mr-4"
        }
      >
        Products
      </Link>
      <SignedOut>
        <SignInButton mode="modal" />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </nav>
  );
}
