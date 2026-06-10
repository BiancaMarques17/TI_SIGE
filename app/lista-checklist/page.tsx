import Link from 'next/link';
import AppShell from '../../components/AppShell';

export default function ListaChecklistPage() {
  return (
    <AppShell title="Lista Checklist" description="Filtre e acesse os checklists disponíveis.">
      <div className="rounded-[30px] bg-white/95 p-5 shadow-sm">
        <div className="space-y-4">
          <label className="flex flex-col text-sm text-slate-700">
            Filtro de status
            <select className="mt-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-[#285ebb] focus:ring-2 focus:ring-[#cfe0ff]">
              <option>Todos</option>
              <option>Aberto</option>
              <option>Finalizado</option>
            </select>
          </label>

          <div className="space-y-3">
            {[
              { title: 'Porta Dianteira Direita', status: 'Aberto' },
              { title: 'Radiador Argo', status: 'Aprovado' },
              { title: 'Montagem 1', status: 'Corrigido' },
            ].map((item) => (
              <Link key={item.title} href="/checklist" className="block rounded-3xl border border-slate-200 bg-slate-50 p-4 hover:border-[#285ebb] hover:bg-[#f4f8ff] transition-colors">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-semibold text-slate-900">{item.title}</p>
                    <p className="text-xs text-slate-500">Checklist de Qualidade</p>
                  </div>
                  <span className="rounded-full bg-[#285ebb] px-3 py-1 text-xs font-semibold text-white">{item.status}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
