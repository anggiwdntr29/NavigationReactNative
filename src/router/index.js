import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Course, Home, Login, Profile } from "../pages";
import ButtonNav from "./ButtonNav";

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <Stack.Navigator>
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
    </Stack.Navigator>
  );
}

export default Router;
