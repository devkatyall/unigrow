"use client";

// AnimatedLink.js
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { animatePageOut } from "@/lib/animations";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function AnimatedLink({ href, children, ...props }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleTransition = async (e) => {
    e.preventDefault();

    if (pathname === href) {
      return;
    }

    const body = document.querySelector(".root");
    body?.classList.add("page-transition");

    await sleep(100);

    router.push(href);

    await sleep(100);

    body?.classList.remove("page-transition");
  };

  return (
    <Link href={href} onClick={handleTransition} {...props}>
      {children}
    </Link>
  );
}
