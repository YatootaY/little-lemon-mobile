import { ScrollView, View, Text, Image, StyleSheet, Pressable, TextInput } from "react-native"
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';


const ProfileScreen = ({navigation, route}) => {

    const {setIsOnBoard} = route.params
    const [firstName, setFirstName] = useState("")
    const [email, setEmail] = useState("")
    const [lastName, setLastName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [orderNoti, setOrderNoti] = useState(false)
    const [passwordNoti, setPasswordNoti] = useState(false)
    const [specialNoti, setSpecialNoti] = useState(false)
    const [newsNoti, setNewsNoti] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        (async() => {
            try{
                setLoading(true)
                const storedEmail = await AsyncStorage.getItem("email");
                const storedLastName = await AsyncStorage.getItem("lastName");
                const storedFirstName = await AsyncStorage.getItem("name");
                const storedPhoneNumber = await AsyncStorage.getItem("phoneNumber");
                const storedOrderNoti = await AsyncStorage.getItem("orderNoti");
                const storedPasswordNoti = await AsyncStorage.getItem("passwordNoti");
                const storedSpecialNoti = await AsyncStorage.getItem("specialNoti");
                const storedNewsNoti = await AsyncStorage.getItem("newsNoti");

                if (storedEmail !== null) {
                    setEmail(storedEmail);
                  }
                  if (storedLastName !== null) {
                    setLastName(storedLastName);
                  }
                  if (storedFirstName !== null) {
                    setFirstName(storedFirstName);
                  }
                  if (storedPhoneNumber !== null) {
                    setPhoneNumber(storedPhoneNumber);
                  }
                  if (storedOrderNoti !== null) {
                    setOrderNoti(storedOrderNoti === "true");
                  }
                  if (storedPasswordNoti !== null) {
                    setPasswordNoti(storedPasswordNoti === "true");
                  }
                  if (storedSpecialNoti !== null) {
                    setSpecialNoti(storedSpecialNoti === "true");
                  }
                  if (storedNewsNoti !== null) {
                    setNewsNoti(storedNewsNoti === "true");
                  }
            }catch(error){
                console.log(error)
            } finally {
              setLoading(false)
            }
        })()
    }, [])


    const handleDiscard = () => {
        navigation.navigate("Home")
    }

    const handleSaveChanges = async () => {
        await AsyncStorage.setItem("email",email)
        await AsyncStorage.setItem("name", firstName)
        await AsyncStorage.setItem("lastName", lastName)
        await AsyncStorage.setItem("phoneNumber", phoneNumber);
        await AsyncStorage.setItem("orderNoti", orderNoti.toString());
        await AsyncStorage.setItem("passwordNoti", passwordNoti.toString());
        await AsyncStorage.setItem("specialNoti", specialNoti.toString());
        await AsyncStorage.setItem("newsNoti", newsNoti.toString());
        navigation.navigate("Home")
    }

    const handleLogout = async () => {
        await AsyncStorage.clear()
        console.log(setIsOnBoard)
        setIsOnBoard(false)
        navigation.navigate("Onboarding")
    }

    if (loading){
        return(
            <View>
                <Text>Loading...</Text>
            </View>
        )
    }

    return(
        <ScrollView style={styles.container}>
            <Text style={{color:"black", fontSize: 20, fontFamily: "Karla", fontWeight: "bold"}}>Personal information</Text>
            <View>
                <Text style={styles.label}>Avatar</Text>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap:30
                }}>
                    <Image 
                    source={require("../assets/Profile.png")}
                    style={{width:80, height: 80}}
                    />
                    <Pressable>
                        <Text style={styles.greenBtn}>Change</Text>
                    </Pressable>
                    <Pressable>
                        <Text style={styles.darkButton}>Remove</Text>
                    </Pressable>
                </View>
                <View>
                    <Text style={styles.InputLabel}>First Name</Text>
                    <TextInput
                        style={styles.InputField}
                        value={firstName}
                        onChangeText={setFirstName}
                    />
                </View>
                <View>
                    <Text style={styles.InputLabel}>Last Name</Text>
                    <TextInput
                        style={styles.InputField}
                        value={lastName}
                        onChangeText={setLastName}
                    />
                </View>
                <View>
                    <Text style={styles.InputLabel}>Email</Text>
                    <TextInput
                        style={styles.InputField}
                        value={email}
                        onChangeText={setEmail}
                        editable={false}
                        keyboardType="email-address"
                    />
                </View>
                <View>
                    <Text style={styles.InputLabel}>Phone Number</Text>
                    <TextInput
                        style={styles.InputField}
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                        keyboardType="phone-pad"
                        placeholder="+95"
                    />
                </View>
                <Text style={{color:"black", fontSize: 18, fontFamily: "Karla", fontWeight: "bold", marginVertical: 18}}>Email notification</Text>
                <View style={{flexDirection: "row", alignItems: "center", marginVertical: 5}}>
                    <BouncyCheckbox fillColor="#495E57" size={22} isChecked={orderNoti} onPress={(isChecked) => setOrderNoti(isChecked)}/>
                    <Text style={{color: "#333333", fontFamily: "Karla"}}>Order statuses</Text>
                </View>

                <View style={{flexDirection: "row", alignItems: "center", marginVertical: 5}}>
                    <BouncyCheckbox fillColor="#495E57" size={22} isChecked={passwordNoti} onPress={(isChecked) => setPasswordNoti(isChecked)}/>
                    <Text style={{color: "#333333", fontFamily: "Karla"}}>Password changes</Text>
                </View>

                <View style={{flexDirection: "row", alignItems: "center", marginVertical: 5}}>
                    <BouncyCheckbox fillColor="#495E57" size={22} isChecked={specialNoti} onPress={(isChecked) => setSpecialNoti(isChecked)}/>
                    <Text style={{color: "#333333", fontFamily: "Karla"}}>Special offers</Text>
                </View>

                <View style={{flexDirection: "row", alignItems: "center", marginVertical: 5}}>
                    <BouncyCheckbox fillColor="#495E57" size={22} isChecked={newsNoti} onPress={(isChecked) => setNewsNoti(isChecked)}/>
                    <Text style={{color: "#333333", fontFamily: "Karla"}}>Newsletter</Text>
                </View>
                <Pressable
                    onPress={handleLogout}
                >
                    <Text style={{
                        backgroundColor: "#F4CE14",
                        marginVertical: 50,
                        marginBottom: 10,
                        textAlign: "center",
                        paddingVertical: 15,
                        borderRadius: 10,
                        fontWeight: "bold"
                    }}>Log out</Text>
                </Pressable>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 30,
                    marginTop: 20,
                    marginBottom: 80
                }}>
                    <Pressable
                        onPress={handleDiscard}
                    >
                        <Text style={{
                            width: 130,
                            paddingVertical: 10,
                            textAlign: "center",
                            color: "white",
                            fontWeight: "bold",
                            fontFamily: "Karla",
                            borderColor: "gray",
                            borderWidth: 1,
                            color: "gray"
                        }}>Discard changes</Text>
                    </Pressable>
                    <Pressable
                        onPress={handleSaveChanges}
                    >
                        <Text style={{
                            width: 130,
                            paddingVertical: 10,
                            textAlign: "center",
                            color: "white",
                            fontWeight: "bold",
                            fontFamily: "Karla",
                            backgroundColor: "#495E57"
                        }}>
                            Save changes
                        </Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    label: {
        color: "gray",
        fontFamily: "Karla", 
        fontWeight: "bold",
        marginTop: 20,
        marginBottom:6
    },
    greenBtn: {
        width: 80,
        paddingVertical: 10,
        textAlign: "center",
        backgroundColor: "#495E57",
        color: "white",
        fontWeight: "bold",
        fontFamily: "Karla",
        borderRadius: 8,
    },
    darkButton: {
        width: 80,
        paddingVertical: 10,
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
        fontFamily: "Karla",
        borderColor: "gray",
        borderWidth: 1,
        color: "gray"
    },
    InputLabel: {
        color: "gray",
        fontFamily: "Karla", 
        fontWeight: "bold",
        fontSize: 14,
        marginTop: 20,
        marginBottom: 5,
    },
    InputField: {
        width: "100%",
        backgroundColor:"#EDEFEE",
        color: "#333333",
        borderRadius: 5,
        height: 40,
        padding: 10
    },
})

export default ProfileScreen