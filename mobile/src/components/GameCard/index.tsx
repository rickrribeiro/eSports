
import { Text, TouchableOpacity, ImageBackground, ImageSourcePropType, TouchableOpacityProps } from 'react-native';
import { styles } from './styles'
import { LinearGradient } from 'expo-linear-gradient';
import { THEME } from '../../theme';

export interface GameCardProps {
    id: string;
    name: string;
    ads: string;
    cover: ImageSourcePropType
}

interface Props extends TouchableOpacityProps{
    data:GameCardProps
}



export function GameCard({data, ...rest}: Props){
    return(
        // ...rest p jogar as outras props desconhecidas
        <TouchableOpacity style={styles.container} {...rest}>
            <ImageBackground
            style= {styles.cover}
            source={data.cover}
            >
                <LinearGradient
          colors={THEME.COLORS.FOOTER}
          style={styles.footer}
        >
          <Text style={styles.name}>
            {data.name}
          </Text>
          <Text style={styles.ads}>
            {data.ads} anúncios
          </Text>
        </LinearGradient>
      </ImageBackground>
        </TouchableOpacity>
    );
}