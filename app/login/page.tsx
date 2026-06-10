import Link from 'next/link';
import TopBar from '../../components/TopBar';
import Logo from '../../components/Logo';

export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f0f6ff]">
      <TopBar />
      
      <main className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-sm bg-[#b4cff0] rounded-xl p-6 pb-8 shadow-sm flex flex-col items-center">
          <Logo variant="dark" className="text-3xl mb-6 mt-2" />
          
          <form className="w-full flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-slate-700 ml-1">Usuário</label>
              <input 
                type="text" 
                placeholder="matias.santos"
                className="w-full rounded-md px-3 py-2 bg-white/90 border-none outline-none focus:ring-2 focus:ring-[#285ebb] text-slate-800"
              />
            </div>
            
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-slate-700 ml-1">Senha</label>
              <input 
                type="password" 
                placeholder="••••••••••••"
                className="w-full rounded-md px-3 py-2 bg-white/90 border-none outline-none focus:ring-2 focus:ring-[#285ebb] text-slate-800"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <Link 
                href="/cadastro"
                className="bg-[#285ebb] text-white text-center font-medium py-2 rounded-lg hover:bg-blue-800 transition-colors shadow-sm"
              >
                Cadastrar
              </Link>
              <Link 
                href="/home"
                className="bg-[#52ad1c] text-white font-medium py-2 rounded-lg hover:bg-green-600 transition-colors shadow-sm text-center"
              >
                Login
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
