import { Badge } from "@/components/ui/badge";

export default function EstadistiquesPage() {
  return (
    <div className="max-w-5xl space-y-8">
      {/* Header con separador decorativo */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-slate-100 pb-6">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
            Estadístiques
          </h1>
          <p className="text-slate-500 mt-1 text-base">
            Rendiment del lloc i activitat dels usuaris en temps real.
          </p>
        </div>
        <Badge
          variant="outline"
          className="w-fit border-green-200 bg-green-50 text-green-700 px-3 py-1 gap-1.5 shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Sistemes en viu
        </Badge>
      </div>

      {/* Grid de Targetes */}
      <div className="grid gap-6 sm:grid-cols-3">
        {/* Targeta Visites */}
        <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-blue-200">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>
            <Badge className="bg-blue-500 hover:bg-blue-600 transition-colors">
              +12%
            </Badge>
          </div>
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
            Visites Totals
          </p>
          <p className="mt-1 text-3xl font-bold text-slate-900">12.405</p>
          <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-500 transition-all group-hover:w-full"></div>
        </div>

        {/* Targeta Conversió */}
        <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-green-200">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-green-50 rounded-lg text-green-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>
            <Badge variant="secondary" className="bg-slate-100 text-slate-600">
              Estable
            </Badge>
          </div>
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
            Taxa Conversió
          </p>
          <p className="mt-1 text-3xl font-bold text-slate-900">3.2%</p>
          <div className="absolute bottom-0 left-0 h-1 w-0 bg-green-500 transition-all group-hover:w-full"></div>
        </div>

        {/* Targeta Usuaris */}
        <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-purple-200">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-purple-50 rounded-lg text-purple-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <span className="text-xs font-medium text-purple-600">
              Actius ara
            </span>
          </div>
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
            Usuaris Únics
          </p>
          <p className="mt-1 text-3xl font-bold text-slate-900">1.240</p>
          <div className="absolute bottom-0 left-0 h-1 w-0 bg-purple-500 transition-all group-hover:w-full"></div>
        </div>
      </div>
    </div>
  );
}
