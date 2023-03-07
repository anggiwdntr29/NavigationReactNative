import { Button, View, Text, StyleSheet } from "react-native";

function Registrasi({ navigation }) {
  return (
    <View style={Styles.container}>
      <Text>Ini Registrasi</Text>
      <Button
        title="Sudah Punya Akun?"
        onPress={() => navigation.replace("Login")}
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

export default Registrasi;
