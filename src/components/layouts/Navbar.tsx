// components/layout/Navbar.tsx (versión mejorada)
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const menuItems = [
  { name: "Características", href: "/#features" },
  { name: "Cómo funciona", href: "/#how-it-works" },
  { name: "Testimonios", href: "/#testimonials" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
      <nav className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">PM</span>
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Project<span className="text-blue-600">Manager</span>
            </span>
          </Link>

          {/* Menú Desktop */}
          <div className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                scroll={true}
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Botones Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost" size="sm" className="cursor-pointer">Iniciar sesión</Button>
            </Link>
            <Link href="/signup">
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 cursor-pointer">
                Registrarse
              </Button>
            </Link>
          </div>

          {/* Menú móvil */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Menú Mobile desplegable */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-3">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  scroll={true}
                  onClick={handleLinkClick}
                  className="px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg"
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t my-2 pt-3 flex flex-col gap-2">
                <Link href="/login">
                  <Button variant="ghost" className="justify-start cursor-pointer">
                    Iniciar sesión
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button className="bg-blue-600 justify-start cursor-pointer">
                    Registrarse
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}