import * as Dialog from "@radix-ui/react-dialog";
import { MagnifyingGlassPlus } from "phosphor-react";

export function CreateAdsBanner() {
    return (
        <div className="bg-main-gradient pt-1 self-stretch rounded-lg overflow-hidden mt-8">
        {/* flex justify between p jogar p cada lado*/}
        <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
          <div>
            <strong className="text-2xl text-white font-black">Não encontrou seu duo?</strong>
            <span className="text-zinc-400 block">Publique um anúncio para encontrar novos players!</span>
          </div>
          {/* escurecer o botão */}
          <Dialog.Trigger className="py-3 px-4 bg-violet-500 text-white rounded hover:bg-violet-700 flex items-center gap-3">
            <MagnifyingGlassPlus size={24}/>
            Publicar Anúncio
          </Dialog.Trigger>
        </div>
      </div>

    )
}