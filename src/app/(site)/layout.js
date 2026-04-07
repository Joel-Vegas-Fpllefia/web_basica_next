"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SiteLayout({ children }) {
  const pathname = usePathname();

  // Estilo dinámico con una pequeña barra inferior para el enlace activo
  const linkStyle = (href) =>
    `relative py-1 text-sm font-medium transition-all duration-200 hover:text-blue-600 ${
      pathname === href
        ? "text-blue-600 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-blue-600"
        : "text-slate-500 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full"
    }`;

  return (
    <div className="min-h-screen bg-slate-50/50">
      {/* Header Sticky con efecto Glassmorphism */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          {/* Logo o Nombre del Sitio */}
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-slate-900"
          >
            Next<span className="text-blue-600">App</span>
          </Link>

          {/* Enlaces de navegación */}
          <div className="hidden md:flex items-center gap-8">
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
              API
            </Link>
          </div>

          {/* Botón destacado para el Dashboard */}
          <Link
            href="/dashboard"
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
              pathname.startsWith("/dashboard")
                ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                : "bg-slate-900 text-white hover:bg-slate-800 shadow-md"
            }`}
          >
            Dashboard
          </Link>
        </nav>
      </header>

      {/* Contenido principal con un pequeño fade-in animado */}
      <main className="mx-auto max-w-5xl px-6 py-12 animate-in fade-in duration-700">
        {children}
      </main>

      {/* Footer sencillo para completar el diseño */}
      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto max-w-5xl px-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} NextApp Project. Fet amb Next.js i
          Tailwind CSS.
        </div>
      </footer>
    </div>
  );
}
