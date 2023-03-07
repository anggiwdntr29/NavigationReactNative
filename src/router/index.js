import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DetailProduct, Login, OnBoarding, Registrasi } from "../pages";
import ButtonNav from "./ButtonNav";

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OnBoarding"
        component={OnBoarding}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ButtonNav"
        component={ButtonNav}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Registrasi"
        component={Registrasi}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Detail Product" component={DetailProduct} />
    </Stack.Navigator>
  );
}

export default Router;
