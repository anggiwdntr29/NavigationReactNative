import { View, Text, StyleSheet } from "react-native";

function Course() {
  return (
    <View style={Styles.container}>
      <Text>Ini Course</Text>
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
