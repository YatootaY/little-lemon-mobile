import { StyleSheet, Image, View, Text, Pressable } from 'react-native';
import OnBoardingScreen from './screens/OnBoardingScreen';
import {useFonts} from "expo-font"
import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from './screens/ProfileScreen';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MainScreen from './screens/MainScreen';

const Stack = createNativeStackNavigator()

const App = () => {

  const [isOnBoard, setIsOnBoard] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const [fontsLoaded] = useFonts({
    "Karla" : require('./assets/fonts/Karla-Regular.ttf'),
    "MarkaziText" : require('./assets/fonts/MarkaziText-Regular.ttf'),
  })

  useEffect(()=> {
    (async() => {
        try{
            setIsLoading(true)
            const email = await AsyncStorage.getItem("email")
            const name = await AsyncStorage.getItem("name")
            if (email !== null && name !== null){
              setIsOnBoard(true)
            }
        }catch(error){
            console.log(error)
        } finally {
          setIsLoading(false)
        }
    })()
  },[isOnBoard])

  
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
          headerTitle: (props) => <Image style={{top: -1}} source={require("./assets/Logo.png")} />
        }}
      >
        <Stack.Screen 
            name="Main" 
            component={MainScreen}
            navigattionOpition={
              {headerLeft: () => null}
            }
            options={({navigation}) => ({
              headerRight: () => (
                <Pressable 
                  onPress={() => navigation.navigate("Profile")}
                >
                  <Image style={{width: 30, height: 30}} source={require("./assets/Profile.png")}/>
                </Pressable>
              ),
              headerLeft: () => (
                <Text></Text>
              )
            })}
          />
        {isOnBoard ? 
          <Stack.Screen 
            name="Profile" 
            component={ProfileScreen}
            options={{
              headerBackTitle: "Menu",
              headerBackTitleStyle: {fontSize: 16}
            }}
          /> :
          <Stack.Screen name="Onboarding" initialParams={{setIsOnBoard: setIsOnBoard}} component={OnBoardingScreen}/>
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