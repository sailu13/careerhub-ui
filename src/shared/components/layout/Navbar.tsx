import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        <Link to="/" className="text-2xl font-bold text-blue-500">
          CareerHub
        </Link>

        <div className="hidden gap-8 md:flex">
          <Link to="/">Home</Link>

          <a href="#features">Features</a>

          <a href="#about">About</a>
        </div>

        <div className="flex gap-3">
          <Link
            to="/login"
            className="rounded-lg border border-slate-700 px-4 py-2 hover:bg-slate-800"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-lg bg-blue-600 px-4 py-2 hover:bg-blue-700"
          >
            Sign Up
          </Link>
        </div>

      </div>
    </nav>
  );
}