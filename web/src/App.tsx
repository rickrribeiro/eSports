import "./styles/main.css";
import {useState, useEffect} from 'react'
import logoImg from "./assets/logo.svg";
import { GameBanner } from './components/GameBanner';
import { CreateAdsBanner } from './components/CreateAdsBanner';
import * as Dialog from '@radix-ui/react-dialog';
import { CreateAdModal } from "./components/CreateAdModal";
import axios from "axios";
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
    axios('http://192.168.0.31:3000/games')
    .then(response => {
      setGames(response.data)
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
        <CreateAdModal />
      </Dialog.Root>
    </div>
  );
}

export default App;
