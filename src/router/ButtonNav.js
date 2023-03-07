import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Course, Home, Profile } from "../pages";
import Ionicons from "react-native-vector-icons/Ionicons";
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function ButtonNav() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "ios-home" : "ios-home-outline";
          } else if (route.name === "Course") {
            iconName = focused ? "menu" : "menu-outline";
            size = 32;
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ tabBarShowLabel: false, headerShown: false }}
      />
      <Tab.Screen
        name="Course"
        component={Course}
        options={{ tabBarShowLabel: false, headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ tabBarShowLabel: false, headerShown: false }}
      />
    </Tab.Navigator>
  );
}

export default ButtonNav;
