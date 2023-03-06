import { Button, View, Text, StyleSheet } from "react-native";

function Login({ navigation }) {
  return (
    <View style={Styles.container}>
      <Text>Ini Login</Text>
      <Button title="Login" onPress={() => navigation.replace("ButtonNav")} />
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

export default Login;
