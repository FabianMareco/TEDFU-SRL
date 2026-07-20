"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [enviando, setEnviando] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email.trim() || !password) {
      setError("Completá email y contraseña.");
      return;
    }
    setEnviando(true);
    try {
      const { getFirebaseAuth } = await import("@/lib/firebase/client");
      const { signInWithEmailAndPassword } = await import("firebase/auth");
      await signInWithEmailAndPassword(getFirebaseAuth(), email.trim(), password);
    } catch (err) {
      console.error(err);
      setError("Email o contraseña incorrectos. Probá de nuevo.");
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-sm rounded-lg border border-tedfu-dark/10 bg-tedfu-white p-8 shadow-sm"
      >
        <div className="flex justify-center">
          <Logo variant="dark" />
        </div>
        <h1 className="mt-4 text-center text-lg font-bold text-tedfu-dark">
          Panel de administración
        </h1>

        <label htmlFor="admin-email" className="mt-6 block text-sm font-medium text-tedfu-dark">
          Email
        </label>
        <input
          id="admin-email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1.5 w-full rounded-md border border-tedfu-dark/20 px-4 py-3 text-sm focus:border-tedfu-orange focus:outline-none focus:ring-1 focus:ring-tedfu-orange"
        />

        <label htmlFor="admin-password" className="mt-4 block text-sm font-medium text-tedfu-dark">
          Contraseña
        </label>
        <input
          id="admin-password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1.5 w-full rounded-md border border-tedfu-dark/20 px-4 py-3 text-sm focus:border-tedfu-orange focus:outline-none focus:ring-1 focus:ring-tedfu-orange"
        />

        {error && <p className="mt-3 text-sm text-red-600">{error}</p>}

        <Button type="submit" disabled={enviando} className="mt-6 w-full">
          {enviando ? "Ingresando..." : "Ingresar"}
        </Button>
      </form>
    </div>
  );
}
