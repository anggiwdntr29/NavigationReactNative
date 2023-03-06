import { View, Text, StyleSheet } from "react-native";

function Home() {
  return (
    <View style={Styles.container}>
      <Text>Ini Home</Text>
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

export default Home;