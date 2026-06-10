import Link from 'next/link';
import TopBar from '../../components/TopBar';
import Logo from '../../components/Logo';

export default function CadastroPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f0f6ff]">
      <TopBar />
      
      <main className="flex-1 flex flex-col items-center justify-center p-6 py-8">
        <div className="w-full max-w-sm bg-[#b4cff0] rounded-xl p-6 shadow-sm flex flex-col items-center">
          <Logo variant="dark" className="text-3xl mb-6 mt-2" />
          
          <form className="w-full flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-slate-700 ml-1">Nome</label>
              <input 
                type="text" 
                placeholder="Matias Santos"
                className="w-full rounded-md px-3 py-2 bg-white/90 border-none outline-none focus:ring-2 focus:ring-[#285ebb] text-sm text-slate-800"
              />
            </div>
            
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-slate-700 ml-1">Setor</label>
              <div className="relative">
                <select className="w-full rounded-md px-3 py-2 bg-white/90 border-none outline-none appearance-none focus:ring-2 focus:ring-[#285ebb] text-sm text-slate-800">
                  <option>Pintura</option>
                  <option>Montagem</option>
                  <option>Qualidade</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-slate-700 ml-1">Função</label>
              <div className="relative">
                <select className="w-full rounded-md px-3 py-2 bg-white/90 border-none outline-none appearance-none focus:ring-2 focus:ring-[#285ebb] text-sm text-slate-800">
                  <option>Inspetor</option>
                  <option>Supervisor</option>
                  <option>Operador</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-slate-700 ml-1">Usuário</label>
              <input 
                type="text" 
                placeholder="matias.santos"
                className="w-full rounded-md px-3 py-2 bg-white/90 border-none outline-none focus:ring-2 focus:ring-[#285ebb] text-sm text-slate-800"
              />
            </div>
            
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-slate-700 ml-1">Senha</label>
              <input 
                type="password" 
                placeholder="••••••••••••"
                className="w-full rounded-md px-3 py-2 bg-white/90 border-none outline-none focus:ring-2 focus:ring-[#285ebb] text-sm text-slate-800"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-slate-700 ml-1">Email</label>
              <input 
                type="email" 
                placeholder="matiass@gmail.com"
                className="w-full rounded-md px-3 py-2 bg-white/90 border-none outline-none focus:ring-2 focus:ring-[#285ebb] text-sm text-slate-800"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <Link 
                href="/login"
                className="bg-[#f23e5c] text-white text-center font-medium py-2 rounded-lg hover:bg-red-600 transition-colors shadow-sm"
              >
                Cancelar
              </Link>
              <Link 
                href="/home"
                className="bg-[#52ad1c] text-white font-medium py-2 rounded-lg hover:bg-green-600 transition-colors shadow-sm text-center"
              >
                Cadastrar
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
