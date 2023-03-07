import {
  NativeBaseProvider,
  Box,
  Text,
  Stack,
  Center,
  Button,
  Circle,
  FormControl,
  Input,
  Link,
  KeyboardAvoidingView,
} from "native-base";
import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  onLogin() {
    const { email, password } = this.state;

    console.log(`${email} + ${password}`);
    this.props.navigation.replace("ButtonNav");
  }

  onRegistrasi() {
    this.props.navigation.replace("Registrasi");
  }

  render() {
    return (
      <NativeBaseProvider>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <Center px="43px" pt="37px">
            <Box bg="primary.600" width="100%" height="200" safeAreaTop />
            <Text
              fontSize={"2xl"}
              fontWeight={"semibold"}
              mt={"42px"}
              textAlign={"justify"}
              width="100%"
            >
              Login to Continue
            </Text>
            <Text
              width="100%"
              fontSize={"md"}
              fontWeight={"light"}
              mt={"15px"}
              textAlign={"justify"}
            >
              Log in to your account and continue your learning journey in
              Koding Akademi.
            </Text>

            <FormControl>
              <Stack space={5}>
                <Stack>
                  <FormControl.Label>Username</FormControl.Label>
                  <Input
                    variant={"outline"}
                    p={3}
                    value={this.state.email}
                    onChangeText={(email) => this.setState({ email })}
                    placeholder={"example@gmail.com"}
                  />
                </Stack>
                <Stack>
                  <FormControl.Label>Password</FormControl.Label>
                  <Input
                    variant={"outline"}
                    p={3}
                    value={this.state.password}
                    onChangeText={(password) => this.setState({ password })}
                    placeholder={"********"}
                    secureTextEntry={true}
                  />
                </Stack>
              </Stack>
            </FormControl>
            <Button
              width="100%"
              mt={6}
              variant="solid"
              size={"md"}
              onPress={this.onLogin.bind(this)}
            >
              Login
            </Button>
            <Text>
              Don't have an account?{" "}
              <Link onPress={this.onRegistrasi.bind(this)}>
                <Text fontWeight={"bold"}>Register here.</Text>
              </Link>
            </Text>
            <Text mt={5} fontSize={"xs"} fontWeight={"thin"}>
              Or Login With
            </Text>
            <Circle bg={"primary.600"} width={12} height={12} mt={4}></Circle>
          </Center>
        </KeyboardAvoidingView>
      </NativeBaseProvider>
    );
  }
}
export default Login;
