import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const Filters = ({ onChange, selections, sections }) => {
  return (
    <View style={styles.filtersContainer}>
      {sections.map((section, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            onChange(index);
          }}
          style={{
            backgroundColor: selections[index] ? "#F4CE14" : "#D9D9D9",
            width: 80,
            paddingVertical: 8,
            borderRadius: 5,
          }}
        >
          <View>
            <Text style={{ color: "#333333", fontWeight: "bold", textAlign:"center", fontSize: 10 }}>
              {section}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  filtersContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 20
  },
});

export default Filters;
