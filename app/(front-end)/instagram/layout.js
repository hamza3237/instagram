import MobileNavbar from "@/components/MobileNavbar";
import Navbar from "@/components/Navbar";
import Topbar from "@/components/Topbar";
import React from "react";

export default function Layout({ children }) {
  return (
    <div className="sm:flex sm:flex-row flex-col min-h-screen">
      <header className="sticky top-0 sm:hidden"> <Topbar/></header>
      <nav className="lg:w-[300px] w-[100px] sm:sticky hidden sm:block top-0 self-start">
        <Navbar />
      </nav>
      <main className="w-full flex-1">{children}</main>
      <nav className="sm:hidden sticky bottom-0 w-full">
        <MobileNavbar />
      </nav>
    </div>
  );
}
