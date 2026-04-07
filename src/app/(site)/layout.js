"use client"; // <--- ¡ESTO ES OBLIGATORIO!

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SiteLayout({ children }) {
  const pathname = usePathname();

  // Función para saber si un enlace está activo y ponerlo azul
  const linkStyle = (href) =>
    `font-medium transition-colors ${
      pathname === href ? "text-blue-600" : "text-slate-600 hover:text-blue-600"
    }`;

  return (
    <>
      <header className="border-b bg-white">
        <nav className="mx-auto flex max-w-5xl flex-wrap gap-6 px-6 py-4">
          <Link className={linkStyle("/")} href="/">
            Inici
          </Link>
          <Link className={linkStyle("/sobre")} href="/sobre">
            Sobre
          </Link>
          <Link className={linkStyle("/serveis")} href="/serveis">
            Serveis
          </Link>
          <Link className={linkStyle("/contacte")} href="/contacte">
            Contacte
          </Link>
          <Link className={linkStyle("/blog")} href="/blog">
            Blog
          </Link>
          <Link className={linkStyle("/api-demo")} href="/api-demo">
            API demo
          </Link>
          <Link className={linkStyle("/dashboard")} href="/dashboard">
            Dashboard
          </Link>
        </nav>
      </header>
      <main className="mx-auto max-w-5xl px-6 py-10">{children}</main>
    </>
  );
}
