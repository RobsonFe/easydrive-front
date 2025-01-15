
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { IoInformationCircle } from "react-icons/io5";

interface iDescriptionsProps {
	descricao?: string;
	classNameContainer?: string;
	classNameContent?: string;
}

export function DialogInfoButton({ descricao, classNameContainer, classNameContent }: iDescriptionsProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className={`w-1/2 h-1/2 rounded-full border border-gray-300/50 dark:border-gray-600/50 bg-white/50 dark:bg-gray-700/50 px-6 py-3 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600/80 transition-colors duration-200 ${classNameContainer}`}>Mais Detalhes</Button>
      </DialogTrigger>
      <DialogContent className={`${classNameContent} bg-white/70 dark:bg-gray-800/70 border-gray-200/50 dark:border-gray-700/50`}>
        <DialogHeader className="flex justify-between">
					<DialogTitle>
						Informações Adicionais
					</DialogTitle>
          <DialogDescription className=" dark:text-gray-300 text-gray-600 flex">
            <IoInformationCircle className="w-4 h-4 mr-2 self-center" />
						Observações.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2  text-blue-800  dark:text-blue-200">
          <div className="grid flex-1 gap-2">
						{descricao ? (
							<div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
								<span className="w-fit">{descricao}</span>
							</div>
						) : (
								<div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
								<span>Descrição Detalhada do Aluguel</span>
							</div>
						)}
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary" className="bg-white/50 dark:bg-gray-700/50">
              Fechar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
