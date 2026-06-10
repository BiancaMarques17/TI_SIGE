import AppShell from '../../components/AppShell';

export default function HistoricoPage() {
  return (
    <AppShell title="Histórico" description="Confira o histórico de checklists e não conformidades.">
      <div className="rounded-[30px] bg-white/95 p-5 shadow-sm">
        <div className="space-y-4">
          <label className="flex flex-col text-sm text-slate-700">
            Filtro de tipo
            <select className="mt-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-[#285ebb] focus:ring-2 focus:ring-[#cfe0ff]">
              <option>Todos</option>
              <option>Checklist</option>
              <option>Não conformidade</option>
            </select>
          </label>

          <div className="space-y-3">
            {[
              { title: 'Porta Dianteira Direita', type: 'Checklist', status: 'Fechado' },
              { title: 'Radiador Argo', type: 'Não conformidade', status: 'Em andamento' },
              { title: 'Pintura Final', type: 'Checklist', status: 'Cancelado' },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-semibold text-slate-900">{item.title}</p>
                    <p className="text-xs text-slate-500">{item.type}</p>
                  </div>
                  <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-semibold text-slate-700">{item.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
