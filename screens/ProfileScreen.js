import { ScrollView, View, Text, Image, StyleSheet, Pressable, TextInput } from "react-native"
import BouncyCheckbox from "react-native-bouncy-checkbox";

const ProfileScreen = () => {

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
                    />
                </View>
                <View>
                    <Text style={styles.InputLabel}>Last Name</Text>
                    <TextInput
                        style={styles.InputField}
                    />
                </View>
                <View>
                    <Text style={styles.InputLabel}>Email</Text>
                    <TextInput
                        style={styles.InputField}
                    />
                </View>
                <View>
                    <Text style={styles.InputLabel}>Phone Number</Text>
                    <TextInput
                        style={styles.InputField}
                    />
                </View>
                <Text style={{color:"black", fontSize: 18, fontFamily: "Karla", fontWeight: "bold", marginVertical: 18}}>Email notification</Text>
                <View style={{flexDirection: "row", alignItems: "center", marginVertical: 5}}>
                    <BouncyCheckbox fillColor="#495E57" size={22}/>
                    <Text style={{color: "#333333", fontFamily: "Karla"}}>Order statuses</Text>
                </View>

                <View style={{flexDirection: "row", alignItems: "center", marginVertical: 5}}>
                    <BouncyCheckbox fillColor="#495E57" size={22}/>
                    <Text style={{color: "#333333", fontFamily: "Karla"}}>Password changes</Text>
                </View>

                <View style={{flexDirection: "row", alignItems: "center", marginVertical: 5}}>
                    <BouncyCheckbox fillColor="#495E57" size={22}/>
                    <Text style={{color: "#333333", fontFamily: "Karla"}}>Special offers</Text>
                </View>

                <View style={{flexDirection: "row", alignItems: "center", marginVertical: 5}}>
                    <BouncyCheckbox fillColor="#495E57" size={22}/>
                    <Text style={{color: "#333333", fontFamily: "Karla"}}>Newsletter</Text>
                </View>
                <Pressable>
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
                    <Pressable>
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
                    <Pressable>
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