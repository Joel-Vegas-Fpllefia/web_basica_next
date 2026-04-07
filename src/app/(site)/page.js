import Link from "next/link";

export default function HomePage() {
  return (
    <section className="relative overflow-hidden py-12 lg:py-20">
      {/* Elemento decorativo de fondo (opcional) */}
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-50/50 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-purple-50/50 blur-3xl" />

      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center">
        {/* Columna de Texto */}
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
            ✨ Nou projecte amb Next.js 16
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
            Benvingut/da a la <span className="text-blue-600">nostra App</span>
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-slate-600">
            Aquesta és la pàgina d'inici de la nostra web. Hem creat una base
            sòlida utilitzant{" "}
            <span className="font-semibold text-slate-900">App Router</span>,
            estils amb{" "}
            <span className="font-semibold text-slate-900">Tailwind CSS</span> i
            components de{" "}
            <span className="font-semibold text-slate-900">shadcn/ui</span>.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/blog"
              className="inline-flex h-11 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700"
            >
              Explorar Blog
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex h-11 items-center justify-center rounded-md border border-slate-200 bg-white px-8 text-sm font-medium text-slate-900 shadow-sm transition-colors hover:bg-slate-50 hover:text-blue-600"
            >
              Anar al Tauler
            </Link>
          </div>
        </div>

        {/* Columna de "Feature Card" */}
        <div className="flex-1">
          <div className="rounded-2xl border border-slate-200 bg-white/80 p-8 shadow-xl backdrop-blur-sm">
            <h3 className="text-xl font-bold text-slate-900">
              Projecte de Pràctica
            </h3>
            <p className="mt-2 text-slate-500 text-sm">
              Estem aprenent a gestionar rutes, layouts dinàmics i peticions a
              API en servidor.
            </p>
            <div className="mt-6 space-y-3">
              {[
                { label: "App Router (Grups de rutes)", done: true },
                { label: "Layouts aniuats", done: true },
                { label: "Fetching de dades (Server)", done: true },
                { label: "Estils amb Tailwind + Shadcn", done: true },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <svg
                      className="h-3.5 w-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-slate-700">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
