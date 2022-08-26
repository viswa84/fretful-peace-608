import { Box, Button, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import SingnForm from "./SingnModal";

export default function Map() {
  return (
    <Box>
      <Box
        w={"80%"}
        h="330px"
        bg="#465def"
        m="auto"
        bgRepeat={"no-repeat"}
        borderRadius={"20px"}
        bgImage="url('https://www.smatbot.com/img/world-in-bg.svg')"
        backgroundPosition={"center"}
      >
        <Stack>
          <Text
            textAlign={"center"}
            color={"white"}
            mt="50px"
            fontSize={"26px"}
            fontWeight="Bold"
          >
            Capture, Engage &Support Your Costomers Across The <br /> Web
          </Text>
          <Text textAlign={"center"} fontSize={"14px"} color={"white"}>
            Build Customizable Conversational ChatBoats All Your <br /> Business
            Needs
          </Text>
        </Stack>
        <Flex alignItems={'center'} justifyContent='center' gap={'30px'} mt='30px'>
       <Button> <Text color={'blue'}  fontWeight={'light'} >Book Demo</Text></Button>
       <Button> <Text color={'blue'}  fontWeight={'light'} ><SingnForm name='Start Free Trail'/></Text></Button>
     
        </Flex>
      </Box>
    </Box>
  );
}
