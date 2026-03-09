"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "ホーム" },
  { href: "/services/subsidy", label: "補助金支援" },
  { href: "/services/marketing", label: "マーケティング支援" },
  { href: "/about", label: "事務所概要" },
  { href: "/contact", label: "お問い合わせ" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      style={{ backgroundColor: "var(--navy-900)" }}
      className="sticky top-0 z-50 shadow-lg"
    >
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-tight">
            <span className="text-white font-bold text-lg">〇〇経営コンサルティング事務所</span>
            <span className="text-xs" style={{ color: "var(--gold)" }}>
              中小企業診断士
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.slice(1, -1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-200 hover:text-white text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-primary text-sm px-5 py-2"
              style={{
                display: "inline-block",
                background: "var(--gold)",
                color: "#fff",
                fontWeight: 700,
                padding: "0.5rem 1.25rem",
                borderRadius: "4px",
                transition: "background 0.2s",
              }}
            >
              無料相談はこちら
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="メニュー"
          >
            <div className="w-6 h-0.5 bg-white mb-1.5" />
            <div className="w-6 h-0.5 bg-white mb-1.5" />
            <div className="w-6 h-0.5 bg-white" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden pb-4 border-t border-blue-800 mt-2 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-gray-200 hover:text-white py-2 text-sm"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
