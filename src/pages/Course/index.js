import { View, Text, StyleSheet, Button } from "react-native";

function Course({ navigation }) {
  return (
    <View style={Styles.container}>
      <Text>Ini Course</Text>
      <Button
        title="Product"
        onPress={() => navigation.navigate("Detail Product")}
      />
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Course;
