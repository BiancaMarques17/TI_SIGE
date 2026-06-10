import Link from 'next/link';
import AppShell from '../../../components/AppShell';

export default function EditarPerfilPage() {
  return (
    <AppShell title="Editar Perfil" description="Atualize seus dados de usuário e contato." backHref="/perfil">
      <div className="rounded-[30px] bg-white/95 p-5 shadow-sm">
        <form className="space-y-4">
          <label className="flex flex-col text-sm text-slate-700">
            Nome
            <input type="text" value="Matias Santos" readOnly className="mt-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none" />
          </label>

          <label className="flex flex-col text-sm text-slate-700">
            Setor
            <input type="text" value="Pintura" readOnly className="mt-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none" />
          </label>

          <label className="flex flex-col text-sm text-slate-700">
            Usuário
            <input type="text" defaultValue="matias.santos" className="mt-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-[#285ebb] focus:ring-2 focus:ring-[#cfe0ff]" />
          </label>

          <label className="flex flex-col text-sm text-slate-700">
            Email
            <input type="email" defaultValue="matias@gmail.com" className="mt-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-[#285ebb] focus:ring-2 focus:ring-[#cfe0ff]" />
          </label>

          <div className="grid grid-cols-2 gap-4 pt-2">
            <Link href="/perfil" className="rounded-2xl bg-[#f23e5c] px-4 py-3 text-center text-sm font-semibold text-white hover:bg-red-600 transition-colors">
              Cancelar
            </Link>
            <Link href="/perfil" className="rounded-2xl bg-[#52ad1c] px-4 py-3 text-sm font-semibold text-white hover:bg-green-600 transition-colors text-center">
              Salvar
            </Link>
          </div>
        </form>
      </div>
    </AppShell>
  );
}
