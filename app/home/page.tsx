import Link from 'next/link';
import AppShell from '../../components/AppShell';

export default function HomePage() {
  return (
    <AppShell title="Home" description="Acompanhe suas checklists e não conformidades mais recentes.">
      <div className="space-y-6">
        <div className="rounded-[28px] bg-white/95 p-5 shadow-sm">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-slate-500">Olá Matias Santos!</p>
              <h2 className="text-xl font-semibold text-slate-900">Setor Pintura</h2>
            </div>
            <div className="rounded-3xl bg-[#f0f6ff] px-4 py-2 text-sm font-semibold text-[#285ebb]">
              ID 0000123
            </div>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Checklist</p>
              <p className="mt-3 text-2xl font-semibold text-slate-900">3 em aberto</p>
              <p className="mt-1 text-sm text-slate-600">Verifique as inspeções pendentes.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Não conformidades</p>
              <p className="mt-3 text-2xl font-semibold text-slate-900">2 abertas</p>
              <p className="mt-1 text-sm text-slate-600">Confira os registros de controle.</p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Link href="/lista-checklist" className="rounded-[28px] bg-[#285ebb] px-5 py-6 text-white shadow-sm hover:bg-blue-800 transition-colors">
            <p className="text-sm font-semibold">Lista de Checklist</p>
            <p className="mt-3 text-2xl">Ver mais</p>
          </Link>
          <Link href="/lista-nao-conformidade" className="rounded-[28px] bg-[#52ad1c] px-5 py-6 text-white shadow-sm hover:bg-green-600 transition-colors">
            <p className="text-sm font-semibold">Lista de Não Conformidades</p>
            <p className="mt-3 text-2xl">Ver mais</p>
          </Link>
        </div>
      </div>
    </AppShell>
  );
}
