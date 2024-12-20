import { Building2, Clock, DollarSign, MapPin } from "lucide-react";

interface RentCardProps { 
	nome: string;
	email: string;
	username: string;
	veiculo: string;
	marca: string;
	ano: number;
	quantidade: number;
	tipo: string;
	descricao?: string;
	dataDeInicio: string;
	dataFinal: string;
	is_available: boolean;
}

const RentCard = () => {
  return (
    <div className="h-screen flex justify-center items-center ">
      <div className="w-full max-w-md mx-auto bg-white/70 dark:bg-gray-800/70 rounded-2xl shadow-lg overflow-hidden border border-gray-200/50 dark:border-gray-700/50">
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-semibold mb-2 dark:text-white">
               John Wick
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                <Building2 className="w-4 h-4 mr-2" />
                jonhwick
              </p>
            </div>
            <span className="bg-blue-100/80 text-blue-800 dark:bg-blue-900/80 dark:text-blue-200 text-xs font-medium px-3 py-1.5 rounded-full">
              Cliente
            </span>
          </div>
          <div className="space-y-3 mb-6">
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
              <MapPin className="w-4 h-4 mr-2" />
              <span>john@email.com</span>
            </div>
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
              <DollarSign className="w-4 h-4 mr-2" />
              <span>11/12/2024 - 20/12/2024</span>
            </div>
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
              <Clock className="w-4 h-4 mr-2" />
              <span>Ford Ká</span>
            </div>
          </div>
          <p className="mb-8 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            Veiculo alugado por 10 dias, com data de inicio em 11/12/2024 e data final em 20/12/2024.
          </p>
          <div className="flex space-x-4">
            <button className="w-1/2 rounded-full bg-blue-600/90 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700 transition-colors duration-200 dark:bg-blue-500 dark:hover:bg-blue-600">
              Devolução
            </button>
            <button className="w-1/2 rounded-full border border-gray-300/50 dark:border-gray-600/50 bg-white/50 dark:bg-gray-700/50 px-6 py-3 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600/80 transition-colors duration-200">
              Mais Detalhes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentCard;
