import "./globals.css";

// la variable metada, nos sirve para el seo, solamente es 1 ya que estamos realizando una SPA
export const metadata = {
  title: "Web amb Next.js", // Lo que saldira al buscar la web
  description: "Exercici App Router + Tailwind",
};

// rootlayout: le permitimos que tenga mas componentes mediante children
// Es la pagina principal
export default function RootLayout({ children }) {
  return (
    <html lang="ca">
      <body className="min-h-screen bg-slate-50 text-slate-800 mt-50">
        {children}
      </body>
    </html>
  );
}
