import { MagnifyingGlassPlus } from 'phosphor-react'

import "./styles/main.css";

import logoImg from "./assets/logo.svg";

function App() {
  //mx seta margin
  // cada 1 é 4px
  // 2xl é 24px
  return (
    <div className="mx-auto flex flex-col items-center m-20 max-w-[1344px]">
      <img src={logoImg} alt="" />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="bg-main-gradient text-transparent bg-clip-text">duo</span> está aqui
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {/* Overflow hidden para os de dentro respeitarem */}
        <a href="" className="relative rounded-lg overflow-hidden"> 
          <img src="/game-1.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">League of legends</strong>
            <span className="text-zinc-300 text-sm block mt-1">4 anuncios</span>
          </div>
        </a>
    
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game-2.png" alt="" />
           <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Dota</strong>
            <span className="text-zinc-300 text-sm block mt-1">4 anuncios</span>
          </div>
        </a>
    
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game-3.png" alt="" />
           <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">CS</strong>
            <span className="text-zinc-300 text-sm block mt-1">4 anuncios</span>
          </div>
        </a>
      
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game-4.png" alt="" />
           <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">apex</strong>
            <span className="text-zinc-300 text-sm block mt-1">4 anuncios</span>
          </div>
        </a>
    
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game-5.png" alt="" />
           <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">WOW</strong>
            <span className="text-zinc-300 text-sm block mt-1">4 anuncios</span>
          </div>
        </a>
    
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game-6.png" alt="" />
           <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Fortnite</strong>
            <span className="text-zinc-300 text-sm block mt-1">4 anuncios</span>
          </div>
        </a>
      </div>

      <div className="bg-main-gradient pt-1 self-stretch rounded-lg overflow-hidden mt-8">
        {/* flex justify between p jogar p cada lado*/}
        <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
          <div>
            <strong className="text-2xl text-white font-black">Não encontrou seu duo?</strong>
            <span className="text-zinc-400 block">Publique um anúncio para encontrar novos players!</span>
          </div>
          {/* escurecer o botão */}
          <button className="py-3 px-4 bg-violet-500 text-white rounded hover:bg-violet-700 flex items-center gap-3">
            <MagnifyingGlassPlus size={24}/>
            Publicar Anúncio</button>
        </div>
      </div>

    </div>
  );
}

export default App;
