import Link from 'next/link';
import AppShell from '../../components/AppShell';

export default function PerfilPage() {
  return (
    <AppShell title="Perfil" description="Veja os dados do seu usuário e atualize quando precisar.">
      <div className="rounded-[30px] bg-white/95 p-5 shadow-sm">
        <div className="space-y-5">
          <div className="rounded-3xl bg-[#f0f6ff] p-5">
            <p className="text-sm text-slate-500">Matias Santos</p>
            <p className="mt-1 text-lg font-semibold text-slate-900">Pintura - 0000123</p>
          </div>

          <div className="space-y-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Usuário</p>
              <p className="mt-2 text-sm font-semibold text-slate-900">matias.santos</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Email</p>
              <p className="mt-2 text-sm font-semibold text-slate-900">matias@gmail.com</p>
            </div>
          </div>

          <Link href="/perfil/editar" className="inline-flex w-full items-center justify-center rounded-2xl bg-[#285ebb] px-4 py-3 text-sm font-semibold text-white hover:bg-blue-800 transition-colors">
            Editar Dados
          </Link>
        </div>
      </div>
    </AppShell>
  );
}
