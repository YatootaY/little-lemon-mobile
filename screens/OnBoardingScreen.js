import { useEffect, useState } from "react"
import { View, StyleSheet, Text, TextInput, Pressable } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';

const OnBoardingScreen = ({navigation, route}) => {

    const {setIsOnBoard} = route.params
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const onNextHandle = () => {
        console.log(setIsOnBoard)
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(email) && name){
            (async() => {
                try{
                    await AsyncStorage.setItem("email", email)
                    await AsyncStorage.setItem("name",name)
                    setIsOnBoard(true)
                    navigation.navigate("Onboarding")
                } catch( error){
                    console.log(error)
                }
            })();
        }
    }

    return(
        <View style={OnBoardingStyle.container}>
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
                            onChangeText={setName}
                            value={name}
                        />
                    </View>
                    <View>
                        <Text style={OnBoardingStyle.InputLabel}>Email</Text>
                        <TextInput
                            style={OnBoardingStyle.InputField}
                            onChangeText={setEmail}
                            value={email}
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

export default OnBoardingScreen