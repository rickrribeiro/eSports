import * as Dialog from '@radix-ui/react-dialog';
import * as Checkbox from '@radix-ui/react-checkbox';
import { GameController, Check, ArrowDown } from "phosphor-react";
import { Input } from "../components/forms/input";
import * as ToggleGroup  from '@radix-ui/react-toggle-group';
import { FormEvent, useEffect, useState } from 'react';
import axios from 'axios';

interface Game {
    id: string;
    title: string;
  }

export function CreateAdModal(){

    const [games, setGames] = useState<Game[]>([])
    const [weekDays, setWeekDays] = useState<string[]>([]);
    const [useVoiceChannel, setUseVoiceChannel] = useState(false);

    useEffect(()=>{ //exec a func  qnd a var no array mudar
      axios('http://192.168.0.31:3000/games')
      .then(response => {
        setGames(response.data)
      })
    },[])// se deixar vazio executa uma unica vez durante todo o fluxo
  

    async function handleCreateAd(event: FormEvent) {
        event.preventDefault()
    
        const formData = new FormData(event.target as HTMLFormElement);
        const data = Object.fromEntries(formData);
    
        if (!data.name) {
          return;
        }
    
        try {
          const response = await axios.post(`http://localhost:3000/games/${data.game}/ads`, {
            name: data.name,
            yearsPlaying: Number(data.yearsPlaying),
            discord: data.discord,
            weekDays: weekDays.map(Number),
            hourStart: data.hourStart,
            hourEnd: data.hourEnd,
            useVoiceChannel: useVoiceChannel,
          });
    
          alert('Anúncio criado com sucesso!');
        } catch (err) {
          console.log(err);
          alert('Erro ao criar anúncio!');
        }
      }

    return(
        <Dialog.Portal>
          {/* o /x é opacidade */}
          <Dialog.Overlay className="bg-black/68 insert-0 fixed" />
          {/* o translate é pra reposicionar 50% pra esquerda pq começando na metade aponta esquerda dele vai ta na metade*/}
          <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-black/25">
            <Dialog.Title className="text-3xl text-white font-black">Publique um anuncio</Dialog.Title>

              <form className="mt-8 flex flex-col gap-4" onSubmit={handleCreateAd}>
                <div className="flex flex-col gap-2">
                <label className="font-semibold">Qual o game?</label>
                <select
                    id="game"
                    name="game"
                    className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500 appearance-none"
                    defaultValue=""
                    >
                    <option disabled value="">
                        Selecione o game que deseja jogar
                    </option>

                    {games.map((game) => (
                        <option key={game.id} value={game.id}>
                        {game.title}
                        </option>
                    ))}
                </select>

                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="name">Qual seu nick?</label>
                  <Input name ="name" id="name" placeholder="Qual seu nick?" />
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                    <Input name ="yearsPlaying" type="number" id="yearsPlaying" placeholder="Joga há quantos anos?" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="discord">Qual seu discord?</label>
                    <Input name ="discord" type="discord" id="discord" placeholder="User#0000" />
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex flex-col gap-2" >
                    <label htmlFor="weekDays">Quando costuma jogar?</label>
                   
                        <ToggleGroup.Root type="multiple" className='grid grid-cols-4 gap-2' onValueChange={setWeekDays}>

                            <ToggleGroup.Item value="0" className={`w-8 h-8 rounded bg-zinc-900 ${weekDays.includes('0')?'bg-violet-500':''}`} title="Domingo">D</ToggleGroup.Item>
                            <ToggleGroup.Item value="1" className={`w-8 h-8 rounded bg-zinc-900 ${weekDays.includes('1')?'bg-violet-500':''}`} title="Segunda">S</ToggleGroup.Item>
                            <ToggleGroup.Item value="2" className={`w-8 h-8 rounded bg-zinc-900 ${weekDays.includes('2')?'bg-violet-500':''}`} title="Terça">T</ToggleGroup.Item>
                            <ToggleGroup.Item value="3" className={`w-8 h-8 rounded bg-zinc-900 ${weekDays.includes('3')?'bg-violet-500':''}`} title="Quarta">Q</ToggleGroup.Item>
                            <ToggleGroup.Item value="4" className={`w-8 h-8 rounded bg-zinc-900 ${weekDays.includes('4')?'bg-violet-500':''}`} title="Quinta">Q</ToggleGroup.Item>
                            <ToggleGroup.Item value="5" className={`w-8 h-8 rounded bg-zinc-900 ${weekDays.includes('5')?'bg-violet-500':''}`} title="Sexta">S</ToggleGroup.Item>
                            <ToggleGroup.Item value="6" className={`w-8 h-8 rounded bg-zinc-900 ${weekDays.includes('6')?'bg-violet-500':''}`} title="Sábado">S</ToggleGroup.Item>
                        </ToggleGroup.Root>
              
                  </div>
                  <div className="flex flex-col gap-2 flex-1">
                    <label htmlFor="hourStart">Qual horário do dia?</label>
                    <div className="flex flex-col gap-2 items-center">
                        <div className="flex items-center gap-3 ">
                            <label className="font-semibold">De:</label>
                            <input name="hourStart" id="hourStart" type="time"
                            className="bg-zinc-900 py-3 px-2 rounded text-sm placeholder:text-zinc-500 appearance-none" placeholder="De" />

                        </div>
                        <div className="flex items-center gap-2 ">
                            <label className="font-semibold">Até:</label>
                            <input name="hourEnd" id="hourEnd" type="time" 
                            className="bg-zinc-900 py-3 px-2 rounded text-sm placeholder:text-zinc-500 appearance-none" placeholder="Até" />

                        </div>
                    </div>
                </div>
                </div>

                <div className="mt-2 flex items-center gap-2 text-sm">
                  <Checkbox.Root 
                  checked={useVoiceChannel}
                  onCheckedChange={(checked) => {
                    if (checked== true){
                        setUseVoiceChannel(true)
                    }else{
                        setUseVoiceChannel(false)
                    }
                  }} className='w-6 h-6 p-1 rounded bg-zinc-900'>
                    <Checkbox.CheckboxIndicator>
                        <Check className="w-4 h-4 text-emerald-400 p1"/>
                    </Checkbox.CheckboxIndicator>
                  </Checkbox.Root>
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
    )
}