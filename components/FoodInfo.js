import { View, Image, Text } from "react-native"


const FoodInfo = () => {

    const name = "Greek Salad"
    const price = 12.99
    const description = "Our delicious salad is served with Feta cheese and peeled cucumber. Includes tomatoes, onions, olives, salt and oregano in the ingredients."
    const image = "lemonDessert.jpg"

    return(
        <View style={{flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 1, borderColor: "#ACACAC", paddingVertical: 20, alignItems: "center"}}>
            <View style={{width: "65%", gap: 8}}>
                <Text style={{fontSize: 20, fontWeight: "500"}}>{name}</Text>
                <Text numberOfLines={2} style={{fontFamily: "Karla", color: "#333333"}}>{description}</Text>
                <Text style={{fontWeight: "bold", fontSize: 12, color: "#333333"}}>${price}</Text>
            </View>
            <Image 
                source={require(`../assets/${image}`)}
                style={{width: 80, height: 80}}
            />
        </View>
    )
}

export default FoodInfo