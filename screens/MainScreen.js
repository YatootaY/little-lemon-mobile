import { useEffect, useState } from "react"
import { View, Text, Image, StyleSheet } from "react-native"
import { Searchbar } from "react-native-paper"
import Filters from "../components/Filters"

const sections = ["Starters", "Mains", "Desserts", "Drinks"]

const MainScreen = ({navigation}) => {

    const [filterSelections, setFilterSelections] = useState(
        sections.map(()=> false)
    )

    const handleFiltersChange = async (index) => {
        const arrayCopy = [...filterSelections]
        arrayCopy[index] = !filterSelections[index];
        setFilterSelections(arrayCopy)
    }

    return(
        <View>
            <View style={Style.heroContainer}>
                <View style={{marginVertical: 30,flexDirection: "row", justifyContent:"space-between", alignItems: "flex-end"}}>
                    <View style={{width: "60%"}}>
                        <Text style={{color: "#F4CE14", fontFamily: "MarkaziText", fontSize: 40}}>Little Lemon</Text>
                        <Text style={{color: "white", fontFamily: "MarkaziText", fontSize: 30}}>Chicago</Text>
                        <Text style={{color: "white", fontFamily: "Karla", fontSize: 15}}>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist..</Text>
                    </View>
                    <View>
                        <Image style={Style.heroImage} source={require("../assets/HeroImage.png")}/>
                    </View>
                </View>
                <Searchbar style={{borderRadius: 5}}/>
            </View>
            <View style={{padding: 30}}>
                <Text style={{fontSize:18, fontWeight: "bold"}}>ORDER FOR DELIVERY!</Text>
                <Filters
                    selections={filterSelections}
                    onChange={handleFiltersChange}
                    sections={sections}
                />
            </View>
        </View>
    )
}

const Style = StyleSheet.create({
    heroContainer: {
        backgroundColor: "#495E57",
        paddingHorizontal: 30,
        paddingBottom: 30
    },
    heroImage: {
        width: 120,
        height: 140,
        borderRadius: 10,
        objectFit: "cover"
    }
    
})

export default MainScreen