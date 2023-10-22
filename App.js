import { StyleSheet, Image, View } from 'react-native';
import OnBoarding from './screens/OnBoarding';
import {useFonts} from "expo-font"
import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

export default function App() {

  const [fontsLoaded] = useFonts({
    "Karla" : require('./assets/fonts/Karla-Regular.ttf'),
    "MarkaziText" : require('./assets/fonts/MarkaziText-Regular.ttf'),
  })

  if (!fontsLoaded){
    return null;
  }

  const Header = () => (
    <View style={styles.headerContainer}>
      <Image source={require("./assets/Logo.png")} />
      <Image source={require("./assets/Profile.png")} style={styles.profilePic} />
    </View>
  )

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitle: (props) => <Header/>
        }}
      >
        <Stack.Screen name="Onboarding" component={OnBoarding}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    position: "relative",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    top: -8,
    left: -20
  },
  profilePic: {
    width: 40,
    height: 40,
    position: "absolute",
    right: 20
  },
  logoPic:{

  }
});