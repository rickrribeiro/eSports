import { ImageBackground } from "react-native";
import backgoundImg from '../../assets/background-galaxy.png'
import { styles } from './styles'

interface Props {
    children: React.ReactNode
}

export function Background({children}: Props){
    return(
        <ImageBackground 
            source={backgoundImg}
            style={styles.container}
            defaultSource={backgoundImg}
        >
            {children}
        </ImageBackground>
    );
}