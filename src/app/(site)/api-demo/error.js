// app/(site)/api-demo/error.js
"use client";

export default function Error({ error, reset }) {
  return (
    <div className="rounded-lg border border-red-200 bg-red-50 p-6 text-center">
      <h2 className="text-xl font-bold text-red-800">
        Alguna cosa ha anat malament!
      </h2>
      <p className="mt-2 text-red-600">{error.message}</p>
      <button
        onClick={() => reset()} // Intenta volver a renderizar la página
        className="mt-4 rounded-md bg-red-600 px-4 py-2 text-white hover:bg-red-700"
      >
        Reintentar
      </button>
    </div>
  );
}
