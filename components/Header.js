import { View, Image, StyleSheet } from "react-native"

const Header = () => {
    return(
        <View style={HeaderStyle.container}>
            <Image source={require("../assets/Logo.png")} style={HeaderStyle.logoPic}/>
            <Image source={require("../assets/Profile.png")} style={HeaderStyle.profilePic}/>
        </View>
    )
}

const HeaderStyle = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems:"center",
        justifyContent: "center",
        position: "relative",
        padding: 30
    },
    profilePic: {
        width: 40,
        height: 40,
        position: "absolute",
        right: 10
    }
})

export default Header