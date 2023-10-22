import { View, StyleSheet, Text } from "react-native"
import Header from "../components/Header"

const OnBoarding = () => {
    
    return(
        <View style={OnBoardingStyle.container}>
            <Header/>
        </View>
    )
}

const OnBoardingStyle = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default OnBoarding