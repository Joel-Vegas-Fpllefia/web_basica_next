export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      {}
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600"></div>
      <p className="mt-4 text-lg font_medium text-slate-600 animate-pulse">
        Carregant contingut...
      </p>
    </div>
  );
}
