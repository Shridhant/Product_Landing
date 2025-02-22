"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 w-[100vw] mx-auto transition-all duration-300",
        isScrolled
          ? "bg-white px-4 md:px-8 py-4 mt-4 shadow-md w-[50vw] transition-all ease-in-out duration-500 rounded-xl dark:bg-gray-900"
          : "bg-transparent px-4 py-6 md:px-8"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-semibold"
        >
          <div className="rounded-lg bg-gradient-to-r from-orange-500 to-orange-400 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 text-white"
            >
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            </svg>
          </div>
          <span className="hidden sm:inline">shape.ai</span>
        </Link>

        <nav
          className={cn(
            "absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 text-sm transition-all duration-300 md:flex",
            isScrolled
              ? "text-gray-600 dark:text-gray-300"
              : "text-gray-700 dark:text-gray-200"
          )}
        >
          <Link
            href="#"
            className="hover:text-orange-500 dark:hover:text-orange-400"
          >
            Home
          </Link>
          <Link
            href="#"
            className="hover:text-orange-500 dark:hover:text-orange-400"
          >
            Product
          </Link>
          <Link
            href="#"
            className="hover:text-orange-500 dark:hover:text-orange-400"
          >
            Pricing
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="#"
            className={cn(
              "hidden rounded-full px-4 py-2 transition-all duration-300 md:inline-flex",
              isScrolled
                ? "bg-orange-500 text-white hover:bg-orange-600"
                : "bg-white/10 backdrop-blur-sm hover:bg-white/20"
            )}
          >
            Get Started
          </Link>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="px-2 md:hidden"
                aria-label="Menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                <Link
                  href="#"
                  className="text-lg font-semibold hover:text-orange-500 dark:hover:text-orange-400"
                >
                  Home
                </Link>
                <Link
                  href="#"
                  className="text-lg font-semibold hover:text-orange-500 dark:hover:text-orange-400"
                >
                  Product
                </Link>
                <Link
                  href="#"
                  className="text-lg font-semibold hover:text-orange-500 dark:hover:text-orange-400"
                >
                  Pricing
                </Link>
                <Link
                  href="#"
                  className="text-lg font-semibold hover:text-orange-500 dark:hover:text-orange-400"
                >
                  Blog
                </Link>
                <Link
                  href="#"
                  className="mt-4 inline-flex rounded-full bg-orange-500 px-4 py-2 text-lg font-semibold text-white hover:bg-orange-600"
                >
                  Get Started
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
