import Image from "next/image";
import Link from "next/link";
import React from "react";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <Link href="/instagram">Instagram clone</Link>
    </main>
  );
}
