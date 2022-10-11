import { FlatList, Image, View } from 'react-native';
import { styles } from './styles'
import { Heading } from '../../components';
import logoImg from '../../assets/logo-nlw-esports.png'
import { GameCard } from '../../components/GameCard';
import {GAMES} from '../../utils/games'
export function Home(){
    return(
        <View style={styles.container}>
            <Image source={logoImg}
                    style={styles.logo}/>
                    <Heading
                        title="Encontre seu duo!"
                        subtitle="Selecione o game que deseja jogar..."
            />

            {/* keyExtractor é p definir qual attr vai ser utilizado como idx */}
            <FlatList 
            data= {GAMES}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
                <GameCard
                data={item}/>
            )}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.contentList}
            horizontal/>
           
                    
        </View>
    );
}