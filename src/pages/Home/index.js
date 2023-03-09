import React from "react";
import {
  NativeBaseProvider,
  Container,
  Center,
  Text,
  HStack,
  VStack,
  Box,
  Stack,
  ZStack,
  Button,
  ScrollView,
} from "native-base";

function Home() {
  return (
    <NativeBaseProvider>
      <Stack pt={10} px={4}>
        <HStack alignItems={"center"} justifyContent={"space-between"} mb={5}>
          <VStack>
            <Text fontSize={"xl"} fontWeight={"semibold"} mb={1}>
              Anggi Widiantara
            </Text>
            <Text fontSize={"md"}>What do you want to learn?</Text>
          </VStack>
          <HStack space={4}>
            <Box bg={"black"} height={10} width={10}></Box>
            <Box bg={"black"} height={10} width={10}></Box>
          </HStack>
        </HStack>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack>
            <HStack
              alignItems={"center"}
              justifyContent={"space-between"}
              mb={3.5}
            >
              <Text fontWeight={"semibold"} fontSize={"sm"}>
                Latest Events
              </Text>
              <Text fontWeight={"light"} fontSize={"xs"} underline>
                See all
              </Text>
            </HStack>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <HStack space={4} mb={8}>
                <Box w={"134px"} h={"158"} borderWidth={1} borderRadius={10}>
                  <Box
                    w="100%"
                    h="80px"
                    bg={"black"}
                    borderTopRadius={10}
                    mb={2}
                  ></Box>
                  <Text
                    fontSize={"xs"}
                    fontWeight={"semibold"}
                    px={2}
                    textAlign={"justify"}
                  >
                    Workshop DTIK Festival
                  </Text>
                  <Text fontSize={"xs"} fontWeight={"thin"} px={2} mt={1}>
                    27 January 2023
                  </Text>
                </Box>
                <Box w={"134px"} h={"158"} borderWidth={1} borderRadius={10}>
                  <Box
                    w="100%"
                    h="80px"
                    bg={"black"}
                    borderTopRadius={10}
                    mb={2}
                  ></Box>
                  <Text
                    fontSize={"xs"}
                    fontWeight={"semibold"}
                    px={2}
                    textAlign={"justify"}
                  >
                    The Journey of Food Savior
                  </Text>
                  <Text fontSize={"xs"} fontWeight={"thin"} px={2} mt={1}>
                    12 Desember 2022
                  </Text>
                </Box>
                <Box w={"134px"} h={"158"} borderWidth={1} borderRadius={10}>
                  <Box
                    w="100%"
                    h="80px"
                    bg={"black"}
                    borderTopRadius={10}
                    mb={2}
                  ></Box>
                  <Text
                    fontSize={"xs"}
                    fontWeight={"semibold"}
                    px={2}
                    textAlign={"justify"}
                  >
                    The Journey of Food Savior
                  </Text>
                  <Text fontSize={"xs"} fontWeight={"thin"} px={2} mt={1}>
                    12 Desember 2022
                  </Text>
                </Box>
              </HStack>
            </ScrollView>
          </VStack>
          <VStack pb={100}>
            <Text fontSize={"md"} fontWeight={"semibold"}>
              Course Promo
            </Text>
            <Text fontSize={"xs"} mb={3}>
              Learning promo, limited time. Grab it fast!
            </Text>
            <HStack space={4} mb={4}>
              <Box h="96px" w="132px" bg="black" borderRadius={10} />
              <VStack justifyContent={"space-around"}>
                <Stack>
                  <Text fontSize={"md"} fontWeight={"semibold"}>
                    Coding Explorer
                  </Text>
                  <Text fontSize={"xs"} fontWeight={"thin"} strikeThrough>
                    Rp. 3.000.000
                  </Text>
                  <Text fontSize={"sm"} fontWeight={"medium"}>
                    Rp2.400.000
                  </Text>
                </Stack>
                <HStack space={4}>
                  <Button variant={"outline"} h={6} w={24} p={0}>
                    <Text fontSize={"xs"} fontWeight="light">
                      Add to cart
                    </Text>
                  </Button>
                  <Button variant={"solid"} h={6} w={24} p={0} bg="black">
                    <Text color={"white"} fontSize={"xs"} fontWeight="light">
                      Buy now
                    </Text>
                  </Button>
                </HStack>
              </VStack>
            </HStack>
            <HStack space={4} mb={4}>
              <Box h="96px" w="132px" bg="black" borderRadius={10} />
              <VStack justifyContent={"space-around"}>
                <Stack>
                  <Text fontSize={"md"} fontWeight={"semibold"}>
                    Coding Explorer
                  </Text>
                  <Text fontSize={"xs"} fontWeight={"thin"} strikeThrough>
                    Rp. 3.000.000
                  </Text>
                  <Text fontSize={"sm"} fontWeight={"medium"}>
                    Rp2.400.000
                  </Text>
                </Stack>
                <HStack space={4}>
                  <Button variant={"outline"} h={6} w={24} p={0}>
                    <Text fontSize={"xs"} fontWeight="light">
                      Add to cart
                    </Text>
                  </Button>
                  <Button variant={"solid"} h={6} w={24} p={0} bg="black">
                    <Text color={"white"} fontSize={"xs"} fontWeight="light">
                      Buy now
                    </Text>
                  </Button>
                </HStack>
              </VStack>
            </HStack>
            <HStack space={4} mb={4}>
              <Box h="96px" w="132px" bg="black" borderRadius={10} />
              <VStack justifyContent={"space-around"}>
                <Stack>
                  <Text fontSize={"md"} fontWeight={"semibold"}>
                    Coding Explorer
                  </Text>
                  <Text fontSize={"xs"} fontWeight={"thin"} strikeThrough>
                    Rp. 3.000.000
                  </Text>
                  <Text fontSize={"sm"} fontWeight={"medium"}>
                    Rp2.400.000
                  </Text>
                </Stack>
                <HStack space={4}>
                  <Button variant={"outline"} h={6} w={24} p={0}>
                    <Text fontSize={"xs"} fontWeight="light">
                      Add to cart
                    </Text>
                  </Button>
                  <Button variant={"solid"} h={6} w={24} p={0} bg="black">
                    <Text color={"white"} fontSize={"xs"} fontWeight="light">
                      Buy now
                    </Text>
                  </Button>
                </HStack>
              </VStack>
            </HStack>
            <HStack space={4} mb={4}>
              <Box h="96px" w="132px" bg="black" borderRadius={10} />
              <VStack justifyContent={"space-around"}>
                <Stack>
                  <Text fontSize={"md"} fontWeight={"semibold"}>
                    Coding Explorer
                  </Text>
                  <Text fontSize={"xs"} fontWeight={"thin"} strikeThrough>
                    Rp. 3.000.000
                  </Text>
                  <Text fontSize={"sm"} fontWeight={"medium"}>
                    Rp2.400.000
                  </Text>
                </Stack>
                <HStack space={4}>
                  <Button variant={"outline"} h={6} w={24} p={0}>
                    <Text fontSize={"xs"} fontWeight="light">
                      Add to cart
                    </Text>
                  </Button>
                  <Button variant={"solid"} h={6} w={24} p={0} bg="black">
                    <Text color={"white"} fontSize={"xs"} fontWeight="light">
                      Buy now
                    </Text>
                  </Button>
                </HStack>
              </VStack>
            </HStack>
          </VStack>
        </ScrollView>
      </Stack>
    </NativeBaseProvider>
  );
}

export default Home;
