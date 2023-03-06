import { NavigationContainer } from "@react-navigation/native";
import react from "react";
import Router from "./src/router";
import ButtonNav from "./src/router/ButtonNav";

function App() {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}

export default App;
