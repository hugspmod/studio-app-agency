import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <p className="text-xl text-slate-300 mb-8">
          Oups! La page que vous cherchez n'existe pas.
        </p>
        <Link href="/">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-200">
            Retour à l'accueil
          </button>
        </Link>
      </div>
    </div>
  );
}
