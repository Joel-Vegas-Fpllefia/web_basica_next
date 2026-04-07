// Pugem 5 nivells per arribar a 'src' i després entrem a 'components'
import { Badge } from "@/components/ui/badge";
export default function EstadistiquesPage() {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-900">Estadístiques</h1>
        {/* Usamos el Badge de shadcn aquí */}
        <Badge variant="outline" className="border-green-500 text-green-600">
          ● En viu
        </Badge>
      </div>

      <p className="mt-2 text-slate-600">
        Anàlisi de dades i rendiment del lloc en temps real.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-lg bg-blue-50 p-4 border border-blue-100 relative">
          <p className="text-sm text-blue-600 font-medium">Visites</p>
          <p className="text-2xl font-bold">12.405</p>
          <Badge className="absolute top-4 right-4 bg-blue-500">+12%</Badge>
        </div>

        <div className="rounded-lg bg-green-50 p-4 border border-green-100 relative">
          <p className="text-sm text-green-600 font-medium">Conversió</p>
          <p className="text-2xl font-bold">3.2%</p>
          <Badge variant="secondary" className="absolute top-4 right-4">
            Estable
          </Badge>
        </div>

        <div className="rounded-lg bg-purple-50 p-4 border border-purple-100">
          <p className="text-sm text-purple-600 font-medium">Usuaris</p>
          <p className="text-2xl font-bold">1.240</p>
        </div>
      </div>
    </>
  );
}
