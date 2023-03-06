import { View, Text, Button, StyleSheet } from "react-native";

function Profile({ navigation }) {
  return (
    <View style={Styles.container}>
      <Text>Ini Profile</Text>
      <Button title="Log Out" onPress={() => navigation.replace("Login")} />
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

export default Profile;
