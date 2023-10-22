import { View, StyleSheet, Text, TextInput, Pressable } from "react-native"
import Header from "../components/Header"

const OnBoarding = () => {

    const onNextHandle = () => {
        console.log("Clicked Next")
    }
    
    return(
        <View style={OnBoardingStyle.container}>
            <Header/>
            <View style={OnBoardingStyle.InputArea}>
                <View>
                    <Text style={{color: "#EDEFEE", fontSize: 14, fontFamily: "Karla"}}>Welcome from</Text>
                    <Text style={{color: "#F4CE14", fontSize: 54, fontFamily: "MarkaziText"}}>Little Lemon</Text>
                    <Text style={{lineHeight: 36,color: "white",  fontSize: 36, fontFamily: "MarkaziText"}}>Chicago</Text>
                </View>
                <View style={{marginTop:16, display: "flex", gap: 20}}>
                    <View>
                        <Text style={OnBoardingStyle.InputLabel}>First Name</Text>
                        <TextInput
                            style={OnBoardingStyle.InputField}
                        />
                    </View>
                    <View>
                        <Text style={OnBoardingStyle.InputLabel}>Email</Text>
                        <TextInput
                            style={OnBoardingStyle.InputField}
                        />
                    </View>
                </View>
                <View style={OnBoardingStyle.ButtonContainer}>
                    <Pressable style={OnBoardingStyle.Button} onPress={onNextHandle}>
                        <Text style={{textAlign:"center"}}>Next</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

const OnBoardingStyle = StyleSheet.create({
    container: {
        flex: 1,
    },
    InputArea: {
        backgroundColor: "#495E57",
        color: "#EDEFEE",
        padding: 20,
        flex: 1,
        paddingVertical: 50
    },
    InputLabel: {
        color: "#EDEFEE",
        fontSize: 14,
        marginBottom: 5,
        fontWeight: "bold",
    },
    InputField: {
        width: "100%",
        backgroundColor:"#EDEFEE",
        color: "#333333",
        borderRadius: 5,
        height: 40,
        padding: 10
    },
    ButtonContainer: {
        marginVertical: 20,
        alignItems: "flex-end"
    },
    Button: {
        backgroundColor: "#F4CE14",
        width: 80,
        paddingVertical: 10,
        color: "#333333",
        fontWeight: "bold",
        borderRadius: 5
    }

})

export default OnBoarding