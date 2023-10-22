import { useEffect } from "react"
import { View } from "react-native"


const MainScreen = ({navigation}) => {


    useEffect(()=> {
        navigation.navigate("Onboarding")
    },[])
    return(
        <View>
            
        </View>
    )
}

export default MainScreen