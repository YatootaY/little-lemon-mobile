import { StyleSheet, Image, View, Text } from 'react-native';
import OnBoardingScreen from './screens/OnBoardingScreen';
import {useFonts} from "expo-font"
import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from './screens/ProfileScreen';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator()

const App = () => {

  const [isOnBoard, setIsOnBoard] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const [fontsLoaded] = useFonts({
    "Karla" : require('./assets/fonts/Karla-Regular.ttf'),
    "MarkaziText" : require('./assets/fonts/MarkaziText-Regular.ttf'),
  })

  const Header = () => (
    <View style={styles.headerContainer}>
      <Image source={require("./assets/Logo.png")} />
      <Image source={require("./assets/Profile.png")} style={styles.profilePic} />
    </View>
  )

  useEffect(()=> {
    (async() => {
        try{
            setIsLoading(true)
            const value = await AsyncStorage.getItem("email")
            if (value !== null){
                setIsOnBoard(true)
            }
        }catch(error){
            console.log(error)
        } finally {
          setIsLoading(false)
        }
    })()
  },[])

  if (isLoading && !fontsLoaded){
    return(
      <View>
        <Text>Loading</Text>
      </View>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitle: (props) => <Header/>
        }}
      >
        {isOnBoard ? 
          <Stack.Screen name="Profile" component={ProfileScreen}/> :
          <Stack.Screen name="Onboarding" component={OnBoardingScreen}/>
        }
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
    top: -2,
    left: -20,
  },
  profilePic: {
    width: 35,
    height: 35,
    position: "absolute",
    right: 20
  },
  logoPic:{

  }
});

export default App