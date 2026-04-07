// app/(site)/api-demo/loading.js
export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600"></div>
      <p className="mt-4 text-slate-600 font-medium animate-pulse">
        Carregant dades de l'API...
      </p>
    </div>
  );
}
