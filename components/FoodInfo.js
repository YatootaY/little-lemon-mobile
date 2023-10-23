import { useEffect, useState } from "react"
import { View, Image, Text } from "react-native"

const imageMapping = {
    "greekSalad.jpg": require('../assets/greekSalad.jpg'),
    "bruschetta.jpg": require('../assets/bruschetta.jpg'),
    "grilledFish.jpg": require('../assets/grilledFish.jpg'),
    "pasta.jpg": require('../assets/pasta.jpg'),
    "lemonDessert.jpg": require('../assets/lemonDessert.jpg'),
}

const FoodInfo = ({name, price, description, image}) => {

    return(
        <View style={{flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 1, borderColor: "#ACACAC", paddingVertical: 20, alignItems: "center"}}>
            <View style={{width: "65%", gap: 8}}>
                <Text style={{fontSize: 20, fontWeight: "500"}}>{name}</Text>
                <Text numberOfLines={2} style={{fontFamily: "Karla", color: "#333333"}}>{description}</Text>
                <Text style={{fontWeight: "bold", fontSize: 12, color: "#333333"}}>${price}</Text>
            </View>
            <Image 
                source={imageMapping[image]}
                style={{width: 80, height: 80}}
            />
        </View>
    )
}

export default FoodInfo