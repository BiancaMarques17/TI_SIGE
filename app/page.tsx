import Link from 'next/link';
import Logo from '../components/Logo';

export default function WelcomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f0f6ff] px-6 py-12">
      <div className="w-full max-w-md flex flex-col items-center h-full">
        <Logo variant="dark" className="text-5xl mb-12 mt-8" />
        
        {/* Placeholder for Illustration */}
        <div className="relative w-full aspect-square max-w-[300px] mb-12 flex items-center justify-center">
          <div className="absolute inset-0 bg-[#e6f4ca] rounded-full opacity-50"></div>
          {/* Placeholder text instead of real image */}
          <div className="z-10 text-center text-slate-500 font-medium px-4">
            [Illustration Placeholder]
          </div>
        </div>

        <div className="text-center mt-auto mb-10 w-full flex flex-col items-center">
          <h1 className="text-[#285ebb] text-xl font-bold mb-2">
            Sua nova solução de organização
          </h1>
          <p className="text-[#285ebb] text-sm font-medium mb-8">
            Comece agora
          </p>
          
          <Link 
            href="/login" 
            className="w-full max-w-[280px] bg-[#285ebb] text-white font-medium py-3 rounded-lg hover:bg-blue-800 transition-colors shadow-md text-center"
          >
            Entrar
          </Link>
        </div>
      </div>
    </div>
  );
}
