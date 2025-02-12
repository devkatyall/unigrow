"use client";

// AnimatedLink.js
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { animatePageOut } from "@/lib/animations";

export default function AnimatedLink({ href, children, ...props }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e) => {
    e.preventDefault();
    if (pathname === href) {
      return;
    }
    animatePageOut(href, router);
  };

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
