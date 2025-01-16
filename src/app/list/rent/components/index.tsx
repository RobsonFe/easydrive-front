import { FaCar, FaRegCalendarAlt, FaRegUser } from "react-icons/fa";
import { GiCarKey } from "react-icons/gi";
import { MdOutlineEmail } from "react-icons/md";
import { RiMotorbikeFill } from "react-icons/ri";
import { DialogInfoButton } from "./dialogInfoComponent";

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

const RentCard = ({
  nome,
  email,
  username,
  veiculo,
  marca,
  ano,
  quantidade,
  tipo,
  descricao,
  dataDeInicio,
  dataFinal,
  is_available,
}:RentCardProps) => {

  return (
    <div className="flex justify-center items-center ">
      <div className="w-full max-w-md mx-auto bg-white/70 dark:bg-gray-800/70 rounded-2xl shadow-lg overflow-hidden border border-gray-200/50 dark:border-gray-700/50">
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-semibold mb-2 dark:text-white">
               {nome || 'John Wick'}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                <FaRegUser className="w-4 h-4 mr-2" />
                {username ||'jonhwick'}
              </p>
            </div>
            <span className="bg-blue-100/80 text-blue-800 dark:bg-blue-900/80 dark:text-blue-200 text-xs font-medium px-3 py-1.5 rounded-full">
              Cliente
            </span>
          </div>
          <div className="space-y-3 mb-6">
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
              <MdOutlineEmail className="w-4 h-4 mr-2" />
              <span>{ email || "john@email.com" }</span>
            </div>
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
              <FaRegCalendarAlt className="w-4 h-4 mr-2"  />
              <span>{ dataDeInicio?.replace("-", "/").replace("-","/") } - { dataFinal?.replace("-", "/").replace("-","/")}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
              <GiCarKey className="w-4 h-4 mr-2"/>
              <span>{ marca }</span>
            </div>
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
              {tipo === "Carro" ? <FaCar className="w-4 h-4 mr-2"/> : <RiMotorbikeFill className="w-4 h-4 mr-2" /> }
              <span>{ veiculo }</span>
            </div>
          </div>
          <p className="mb-8 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            Veiculo alugado por x dias, com data de inicio em { dataDeInicio?.replace("-", "/").replace("-","/") } e data final em { dataFinal?.replace("-", "/").replace("-","/") }.
          </p>
          <div className="flex space-x-4">
            <button className="w-1/2 rounded-full bg-blue-600/90 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700 transition-colors duration-200 dark:bg-blue-500 dark:hover:bg-blue-600">
              Devolução
            </button>
            <DialogInfoButton
              descricao={descricao ? descricao : "Descrição Detalhada do Aluguel"}
              classNameContent="w-[470px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentCard;
