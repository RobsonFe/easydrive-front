import { AlertCircle, HelpCircle, Home, Search } from "lucide-react";
import Link from "next/link";

const Error404 = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center px-4 bg-white dark:bg-black">
      <AlertCircle className="w-20 h-20 text-red-500 mb-8" />
      <p className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 mb-4">
        404 - Página não encontrada.
      </p>
			<p className="text-center text-lg mb-12 max-w-xl text-gray-500 dark:text-gray-400">
				Não conseguimos encontrar o que você está procurando. Aqui estão algumas opções úteis
				para ajudá-lo a voltar ao caminho certo.
			</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
				<Link href="/">
        	<div className="group flex flex-col items-center p-6 rounded-2xl border border-gray-200 dark:border-gray-800 transition-all hover:bg-gray-50 dark:hover:bg-gray-900 cursor-pointer">
          	<Home className="w-8 h-8 mb-4 text-gray-900 dark:text-gray-100 transition-transform group-hover:scale-110" />
          	<span className="text-sm font-medium text-gray-900 dark:text-gray-100">
								Home
          	</span>
        	</div>
				</Link>
        <div className="group flex flex-col items-center p-6 rounded-2xl border border-gray-200 dark:border-gray-800 transition-all hover:bg-gray-50 dark:hover:bg-gray-900 cursor-pointer">
          <Search className="w-8 h-8 mb-4 text-gray-900 dark:text-gray-100 transition-transform group-hover:scale-110" />
          <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
            Procurar
          </span>
        </div>
        <div className="group flex flex-col items-center p-6 rounded-2xl border border-gray-200 dark:border-gray-800 transition-all hover:bg-gray-50 dark:hover:bg-gray-900 cursor-pointer">
          <HelpCircle className="w-8 h-8 mb-4 text-gray-900 dark:text-gray-100 transition-transform group-hover:scale-110" />
          <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
            Suporte
          </span>
        </div>
      </div>
    </div>
  );
};

export default Error404;
