import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Btn1, Btn2 } from "../components/Btn1";
import Navbar from "../components/Navbar";
import Imgslider from "../components/ImgSlider";

export default function Whatsap() {
  return (
    <Box>
      <Navbar />
      <Flex mt={'30px'}  >
        <Box>
          <Image
            w={"170px"}
            src="https://www.smatbot.com/img/whatsapp/whatsapp_main_left_arrow.svg"
          />
        </Box>
        <br />
        <Box width="40%" p="10px " pl={"20px"}>
          <Box>
            <Image
              ml={"32%"}
              w={"30px"}
              src="https://www.smatbot.com/img/whatsapp/first_section/whatsapp.svg"
            />
          </Box>
          <br />

          <Text fontSize="26px" color={"#33475b"} fontWeight={"550"}>
          One-Stop Solution
   
          </Text>
          <Text fontSize="26px" color={"#33475b"} fontWeight={"550"}>
          for WhatsApp Business API 
          </Text>
          <Text pt={"25px"} color={"#33475b"} fontSize="16px">
          Chatbot, LiveChat and 3rd Party Integrations
          </Text>
          <br />
          <Flex gap="20px">
            <Btn2 size={"lg"} name={"Book Demo"} />
            <Btn1 size={"lg"} name={"Start Free Trail"} />
          </Flex>
          <Flex gap="29px" mt={"10px"}>
            <Text fontSize={"xs"} color=" #465def">
              *Try Free Trial for 14 days
            </Text>
            <Text fontSize={"xs"} color=" #465def">
              *No Credit Card Required
            </Text>
          </Flex>
          <Box mt={"40px"}>
            <Image
              ml={"55%"}
              w={"40px"}
              src="https://www.smatbot.com/img/whatsapp/first_section/robot.svg"
            />
          </Box>
        </Box>
        <Box>
          <Image
            w={"576px"}
            src="https://www.smatbot.com/img/whatsapp/whatsapp_main_poster.svg"
          />
        </Box>
      </Flex>
      <Flex mt={"-50px"} flexDirection={"row-reverse"}>
        <Image
          w={"140px"}
          src="https://www.smatbot.com/img/main_bg/main_arrow_bg_image_two.svg"
        />
      </Flex>

      <HStack mt={'-40px'}  gap={'20px'}>
        <Box>
          <Image src="https://www.smatbot.com/img/whatsapp/whatsapp_main_left_corner.png"/>
        </Box>
        <Box   w='80%'>
          <Imgslider/>
        </Box>

      </HStack>
      <Box mt={'40px'} >
      <iframe
          id="vii"
          width="800"
          height="400"
          src="https://www.youtube.com/embed/_n9Yq4ZmvDU?controls=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Box>

    </Box>
  );
}
