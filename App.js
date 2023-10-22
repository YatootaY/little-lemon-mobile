import { StyleSheet, Text, View } from 'react-native';
import OnBoarding from './screens/OnBoarding';
import {useFonts} from "expo-font"

export default function App() {

  const [fontsLoaded] = useFonts({
    "Karla" : require('./assets/fonts/Karla-Regular.ttf'),
    "MarkaziText" : require('./assets/fonts/MarkaziText-Regular.ttf'),
  })

  if (!fontsLoaded){
    return null;
  }

  return (
    <OnBoarding/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});