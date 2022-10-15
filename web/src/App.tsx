import "./styles/main.css";
import {useState, useEffect} from 'react'
import logoImg from "./assets/logo.svg";
import { GameBanner } from './components/GameBanner';
import { CreateAdsBanner } from './components/CreateAdsBanner';
import * as Dialog from '@radix-ui/react-dialog';
import { GameController } from "phosphor-react";
import { Input } from "./components/forms/input";
interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([])

  useEffect(()=>{ //exec a func  qnd a var no array mudar
    fetch('http://localhost:3000/games')
    .then(response => response.json())
    .then(data => {
      setGames(data)
    })
  },[])// se deixar vazio executa uma unica vez durante todo o fluxo



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
        {games.map(game => {
          {/*a key é pro react conseguir manipular sem recriar a interface */}
          return(
            <GameBanner key={game.id} bannerUrl={game.bannerUrl} title={game.title} adsCount={game._count.ads}/>
          )
        })}
       
     
       
    
      
      </div>
      <Dialog.Root>
        <CreateAdsBanner />
        <Dialog.Portal>
          {/* o /x é opacidade */}
          <Dialog.Overlay className="bg-black/68 insert-0 fixed" />
          {/* o translate é pra reposicionar 50% pra esquerda pq começando na metade aponta esquerda dele vai ta na metade*/}
          <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-black/25">
            <Dialog.Title className="text-3xl text-white font-black">Publique um anuncio</Dialog.Title>

              <form className="mt-8 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label className="font-semibold" htmlFor="game">Qual o game?</label>
                  <Input  id="game" placeholder="Selecione o game que deseja jogar" />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="name">Qual seu nick?</label>
                  <Input id="name" placeholder="Qual seu nick?" />
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                    <Input type="number" id="yearsPlaying" placeholder="Joga há quantos anos?" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="discord">Qual seu discord?</label>
                    <Input type="discord" id="discord" placeholder="User#0000" />
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex flex-col gap-2" >
                    <label htmlFor="weekDays">Quando costuma jogar?</label>
                    <div className="grid grid-cols-4 gap-2">
                      <button className="w-8 h-8 rounded bg-zinc-900" title="Domingo">D</button>
                      <button className="w-8 h-8 rounded bg-zinc-900" title="Segunda">S</button>
                      <button className="w-8 h-8 rounded bg-zinc-900" title="Terça">T</button>
                      <button className="w-8 h-8 rounded bg-zinc-900" title="Quarta">Q</button>
                      <button className="w-8 h-8 rounded bg-zinc-900" title="Quinta">Q</button>
                      <button className="w-8 h-8 rounded bg-zinc-900" title="Sexta">S</button>
                      <button className="w-8 h-8 rounded bg-zinc-900" title="Sábado">S</button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 flex-1">
                    <label htmlFor="hourStart">Qual horário do dia?</label>
                    <div className="grid grid-cols-2 gap-2">
                      <Input  type="time" id="hourStart" placeholder="De?" />
                      <Input type="time" id="hourEnd" placeholder="Até?" />
                    </div>
                  </div>
                </div>

                <div className="mt-2 flex gap-2 text-sm">
                  <Input type="checkbox" name="" id="" />    
                    Costume me conectar ao chat de voz
                </div>
                <footer className="mt-4 flex justify-end gap-4">
                  <Dialog.Close>
                    <button className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600">Cancelar</button>
                  </Dialog.Close>
                  <button type="submit" className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600">
                    <GameController className="w-6 h-6"/>
                    Encontrar
                  </button>
                </footer>
              </form>
   
       
        </Dialog.Content>

        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

export default App;
