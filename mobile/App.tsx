import { Background, Loading } from './src/components'
import { StatusBar } from 'react-native';
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black } from '@expo-google-fonts/inter'
import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black
  });
  return (
    <Background >
     <StatusBar barStyle="light-content" translucent backgroundColor="transparent"/>
     {fontsLoaded ? <Routes/>: <Loading />}
    </Background>
  );
}
