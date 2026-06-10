import Link from 'next/link';
import React from 'react';
import TopBar from './TopBar';

interface AppShellProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export default function AppShell({ title, description, children }: AppShellProps) {
  return (
    <div className="flex flex-col min-h-screen bg-[#f0f6ff]">
      <TopBar />

      <main className="flex-1 px-4 py-5 sm:px-6">
        <div className="mx-auto w-full max-w-4xl">
          <div className="mb-5">
            <div className="text-sm text-slate-500 mb-2">QualCheck</div>
            <h1 className="text-2xl font-bold text-slate-900">{title}</h1>
            {description ? (
              <p className="mt-2 text-sm text-slate-600">{description}</p>
            ) : null}
          </div>
          {children}
        </div>
      </main>

      <nav className="bg-white border-t border-slate-200 shadow-inner py-3 px-4">
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-2 text-slate-700">
          <Link href="/home" className="flex flex-col items-center gap-1 text-xs font-medium hover:text-[#285ebb]">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-100 text-[#285ebb]">H</span>
            Home
          </Link>
          <Link href="/lista-checklist" className="flex flex-col items-center gap-1 text-xs font-medium hover:text-[#285ebb]">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-100 text-[#285ebb]">C</span>
            Checklist
          </Link>
          <Link href="/checklist" className="flex flex-col items-center gap-1 text-xs font-medium hover:text-[#285ebb]">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#285ebb] text-white shadow">+</span>
            Novo
          </Link>
          <Link href="/lista-nao-conformidade" className="flex flex-col items-center gap-1 text-xs font-medium hover:text-[#285ebb]">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-100 text-[#285ebb]">N</span>
            Não Conf.
          </Link>
          <Link href="/perfil" className="flex flex-col items-center gap-1 text-xs font-medium hover:text-[#285ebb]">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-100 text-[#285ebb]">P</span>
            Perfil
          </Link>
        </div>
      </nav>
    </div>
  );
}
