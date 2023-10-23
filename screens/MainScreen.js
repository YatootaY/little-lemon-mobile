import { useEffect, useState, useCallback, useMemo } from "react"
import { View, Text, Image, StyleSheet, ScrollView, Alert, SectionList } from "react-native"
import { Searchbar } from "react-native-paper"
import Filters from "../components/Filters"
import FoodInfo from "../components/FoodInfo"
import { createTable, filterByQueryAndCategories, getMenuItems, saveMenuItems } from "../database"
import { getSectionListData, useUpdateEffect } from "../utils"
import debounce from 'lodash.debounce';

const sections = ["starters", "mains", "desserts", "drinks"]
const API_URL = "https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/capstone.json"

const MainScreen = ({navigation}) => {

    const [data, setData] = useState([]);
    const [searchBarText, setSearchBarText] = useState('');
    const [query, setQuery] = useState(" ");
    const [filterSelections, setFilterSelections] = useState(
        sections.map(()=> false)
    )

    const handleFiltersChange = async (index) => {
        const arrayCopy = [...filterSelections]
        arrayCopy[index] = !filterSelections[index];
        setFilterSelections(arrayCopy)
    }
    const lookup = useCallback((q) => {
        setQuery(q);
      }, []);
    
    const debouncedLookup = useMemo(() => debounce(lookup, 500), [lookup]);

    const handleSearchChange = (text) => {
        setSearchBarText(text);
        debouncedLookup(text);
    };

    const fetchData = async () => {
        let data = []
        try {
            const jsonData = await fetch(API_URL)
            data = await jsonData.json()
        }catch(err){
            console.log("Fetch: Fail")
        }

        return [...data.menu]
    }

    useUpdateEffect(() => {
        (async () => {
          const activeCategories = sections.filter((s, i) => {
            if (filterSelections.every((item) => item === false)) {
              return true;
            }
            return filterSelections[i];
          });
          try {
            const menuItems = await filterByQueryAndCategories(
              query,
              activeCategories
            );
            const sectionListData = getSectionListData(menuItems);
            setData(sectionListData);
          } catch (e) {
            Alert.alert(e.message);
          }
        })();
      }, [filterSelections, query]);

    useEffect(()=>{
        (async () => {
            try{
                await createTable();
                let menuItems = await getMenuItems();
                if (!menuItems.length){
                    const menuItems = await fetchData()
                    saveMenuItems(menuItems)
                }
                const sectionListData = getSectionListData(menuItems)
                setData(sectionListData)
            } catch(e) {
                Alert.alert(e.message)
            }
        })()
    }, [])

    return(
        <View style={{flex:1, paddingBottom: 10}}>
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
                <Searchbar 
                    style={{borderRadius: 5}}
                    placeholder="Search"
                    placeholderTextColor="gray"
                    onChangeText={handleSearchChange}
                    value={searchBarText}
                />
            </View>
            <View style={{padding: 30, paddingBottom: 18}}>
                <Text style={{fontSize:18, fontWeight: "bold"}}>ORDER FOR DELIVERY!</Text>
                <Filters
                    selections={filterSelections}
                    onChange={handleFiltersChange}
                    sections={sections}
                />
            </View>
            <SectionList
                style={{borderTopWidth: 1, marginHorizontal: 30, borderColor: "#333333"}}
                sections={data}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <FoodInfo name={item.name} price={item.price} description={item.description} image={item.image}/>
                )}
            >

            </SectionList>
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