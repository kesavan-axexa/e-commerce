"use client";

import Link from "next/link";
import {
  Instagram,
  Twitter,
  Facebook,
  ShoppingBag,
  Info,
  Phone,
  HelpCircle,
} from "lucide-react";
import { sora } from "@/fonts/config";

export default function Footer() {
  return (
    <footer className="border-t border-foreground rounded-t-4xl font-medium bg-foreground text-foreground">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-10">
          <div className="flex items-center gap-3">
            {/* <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              className="text-primary"
            >
              <path
                d="M3 12L12 3L21 12L12 21L3 12Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle cx="12" cy="12" r="3" fill="currentColor" />
            </svg> */}

            <h2
              className={`${sora.className} text-2xl text-white font-semibold tracking-tight`}
            >
              TRENDSWEAR<span className="text-primary">.</span>
            </h2>
          </div>

          {/* Menu */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:text-normal text-sm">
            <Link
              href="/shop"
              className="flex items-center gap-2 text-white hover:text-primary transition-colors"
            >
              <ShoppingBag size={16} />
              Shop
            </Link>
            <Link
              href="/about"
              className="flex items-center gap-2 text-white hover:text-primary transition-colors"
            >
              <Info size={16} />
              About
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 text-white hover:text-primary transition-colors"
            >
              <Phone size={16} />
              Contact
            </Link>
            <Link
              href="/faq"
              className="flex items-center gap-2 text-white hover:text-primary transition-colors"
            >
              <HelpCircle size={16} />
              FAQ
            </Link>
          </div>

          <div className="flex items-center justify-center gap-4 md:text-normal text-sm">
            <Link
              href="#"
              className="text-accent hover:text-primary transition"
            >
              <Instagram size={18} />
            </Link>
            <Link
              href="#"
              className="text-accent hover:text-primary transition"
            >
              <Twitter size={18} />
            </Link>
            <Link
              href="#"
              className="text-accent hover:text-primary transition"
            >
              <Facebook size={18} />
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white  mt-10 pt-6 flex font-normal flex-col md:flex-row justify-between items-center gap-4 md:text-normal text-sm text-white">
          <p>© {new Date().getFullYear()} Trendswear, All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-primary transition">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-primary transition">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
