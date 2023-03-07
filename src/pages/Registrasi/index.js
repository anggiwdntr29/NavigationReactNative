import {
  NativeBaseProvider,
  Box,
  Text,
  Stack,
  Center,
  Button,
  FormControl,
  Input,
  ScrollView,
  Link,
  KeyboardAvoidingView,
} from "native-base";
import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
    };
  }

  onLogin() {
    this.props.navigation.replace("Login");
  }

  onRegister() {
    const { email, name, password, confirmPassword } = this.state;

    console.log(`${email} +${name} + ${password} +${confirmPassword}`);
    this.props.navigation.replace("ButtonNav");
  }

  render() {
    return (
      <NativeBaseProvider>
        <ScrollView>
          <KeyboardAvoidingView>
            <Center px="43px" py="37px">
              <Box bg="primary.600" width="100%" height="195" safeAreaTop />
              <Text
                fontSize={"2xl"}
                fontWeight={"semibold"}
                mt={"16px"}
                textAlign={"justify"}
                width="100%"
              >
                Create Account
              </Text>
              <Text
                width="100%"
                fontSize={"md"}
                fontWeight={"light"}
                mt={"10px"}
                textAlign={"justify"}
              >
                Register an account and join Koding Akademi.
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
                    <FormControl.Label>Full Name</FormControl.Label>
                    <Input
                      variant={"outline"}
                      p={3}
                      value={this.state.name}
                      onChangeText={(name) => this.setState({ name })}
                      placeholder={"Gede Anggi Widiantara"}
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
                  <Stack>
                    <FormControl.Label>Confirm Password</FormControl.Label>
                    <Input
                      variant={"outline"}
                      p={3}
                      value={this.state.confirmPassword}
                      onChangeText={(confirmPassword) =>
                        this.setState({ confirmPassword })
                      }
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
                onPress={this.onRegister.bind(this)}
              >
                Register
              </Button>
              <Text>
                Already have an account?{" "}
                <Link onPress={this.onLogin.bind(this)}>
                  <Text fontWeight={"bold"}>Login here..</Text>
                </Link>
              </Text>
            </Center>
          </KeyboardAvoidingView>
        </ScrollView>
      </NativeBaseProvider>
    );
  }
}
export default Login;
