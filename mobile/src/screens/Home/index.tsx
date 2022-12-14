import { FlatList, Image, View } from 'react-native';
import { styles } from './styles'
import { Background, Heading } from '../../components';
import logoImg from '../../assets/logo-nlw-esports.png'
import { GameCard, GameCardProps } from '../../components/GameCard';
import {GAMES} from '../../utils/games'
import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native'


export function Home(){
    
    const [games, setGames] = useState<GameCardProps[]>([]);

    const navigation = useNavigation()
    function handleOpenGame({id, title, bannerUrl}: GameCardProps){
        navigation.navigate('game', {id, title, bannerUrl});
    }

    useEffect(() => {
        fetch('http://192.168.0.31:3000/games')
        .then(response =>response.json())
        .then(data => setGames(data))
    }, []);

    return(
        <Background >
            <SafeAreaView style={styles.container}>
                <Image source={logoImg}
                        style={styles.logo}/>
                        <Heading
                            title="Encontre seu duo!"
                            subtitle="Selecione o game que deseja jogar..."
                />

                {/* keyExtractor é p definir qual attr vai ser utilizado como idx */}
                <FlatList 
                data= {games}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <GameCard
                    data={item}
                    onPress={() => handleOpenGame(item)}/>
                )}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.contentList}
                horizontal/>
            
                        
            </SafeAreaView>
        </Background >
    );
}