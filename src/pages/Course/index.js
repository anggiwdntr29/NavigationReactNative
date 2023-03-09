import React, { useState } from "react";
import {
  View,
  Button,
  Text,
  NativeBaseProvider,
  Center,
  HStack,
  ScrollView,
  Stack,
} from "native-base";

const buttons = [
  {
    id: "1",
    label: "Tombol 1",
  },
  {
    id: "2",
    label: "Tombol 2",
  },
  {
    id: "3",
    label: "Tombol 3",
  },
  {
    id: "4",
    label: "Tombol 3",
  },
  {
    id: "5",
    label: "Tombol 3",
  },

  // tambahkan tombol lainnya di sini jika diperlukan
];

const App = () => {
  const [activeButtonId, setActiveButtonId] = useState(buttons[0].id);

  const handleButtonPress = (id) => {
    setActiveButtonId(id);
  };

  return (
    <NativeBaseProvider>
      <Stack pt={10} px={4}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <HStack space={3}>
            {buttons.map(({ id, label }) => (
              <Button
                key={id}
                onPress={() => handleButtonPress(id)}
                style={{
                  backgroundColor:
                    activeButtonId === id ? "black" : "transparent",
                  borderWidth: 1,
                  borderColor: "black",
                  borderRadius: 5,
                }}
                w={32}
              >
                <Text
                  style={{
                    color: activeButtonId === id ? "white" : "black",
                    fontSize: 18,
                    fontWeight: "bold",
                  }}
                >
                  {label}
                </Text>
              </Button>
            ))}
          </HStack>
        </ScrollView>
      </Stack>
    </NativeBaseProvider>
  );
};

export default App;
