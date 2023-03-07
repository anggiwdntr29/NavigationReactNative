import {
  NativeBaseProvider,
  Box,
  Text,
  HStack,
  VStack,
  Pressable,
  Image,
  Center,
  Button,
  Divider,
  Container,
  Circle,
} from "native-base";
import React from "react";

function OnBoarding({ navigation }) {
  return (
    <NativeBaseProvider>
      <Center px="43px" pt="37">
        <Box bg="primary.600" width="100%" height="280" safeAreaTop />
        <Text
          fontSize={"2xl"}
          fontWeight={"semibold"}
          mt={"42px"}
          textAlign={"justify"}
          width="100%"
        >
          Koding Akademi Mobile
        </Text>
        <Text
          width="100%"
          fontSize={"md"}
          fontWeight={"light"}
          mt={"15px"}
          textAlign={"justify"}
        >
          Welcome to the Koding Academy Mobile App!
        </Text>
        <Button
          width="100%"
          mt={8}
          variant="outline"
          size={"md"}
          onPress={() => navigation.replace("Registrasi")}
        >
          Registrasi
        </Button>
        <Button
          width="100%"
          mt={6}
          variant="solid"
          size={"md"}
          onPress={() => navigation.replace("Login")}
        >
          Login
        </Button>
        <Text mt={5} fontSize={"xs"} fontWeight={"thin"}>
          Or Login With
        </Text>
        <Circle bg={"primary.600"} width={12} height={12} mt={4}></Circle>
      </Center>
    </NativeBaseProvider>
  );
}
export default OnBoarding;
