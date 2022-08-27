import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Btn1, Btn2 } from "../components/Btn1";
import Navbar from "../components/Navbar";
import Imgslider from "../components/ImgSlider";
import { WhatsapElement, WhatsImage } from "../components/WhatsapElement";
import FludTAgs from "../components/Tags";

import Btncursol from "../components/Btncursol";
import WGradintbox from "../components/whtGradintbox";

export default function Whatsap() {
  return (
    <Box>
      <Navbar />
      <Flex mt={"30px"}>
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

      <HStack mt={"-40px"} gap={"20px"}>
        <Box>
          <Image src="https://www.smatbot.com/img/whatsapp/whatsapp_main_left_corner.png" />
        </Box>
        <Box w="80%">
          <Imgslider />
        </Box>
      </HStack>
      <Box mt={"40px"}>
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

      <HStack
        mt={"100px"}
        pl="40px"
        pt={"50px"}
        pb="50px"
        boxShadow={
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;"
        }
      >
        <WhatsapElement
          line1={"Engage Users Using"}
          line2={"Automated Chatbots"}
          line3="Be Available 24/7 by Automating Conversations on Your Business"
          line4="WhatsApp Account."
          btn1="Generate & Capture Leads"
          btn2="Offer Support"
          btn3="WhatsApp E-commerce"
        />
        <WhatsImage src="https://www.smatbot.com/img/whatsapp/automate_chats/automate_chats.svg" />
      </HStack>
      <HStack
        mt={"100px"}
        pl="40px"
        pt={"50px"}
        pb="50px"
        boxShadow={
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;"
        }
      >
        <WhatsImage src="https://www.smatbot.com/img/whatsapp/real_time/real_time_engagement.svg" />

        <WhatsapElement
          line1={"1-on 1 Conversations with"}
          line2={"Real Time Live Chat"}
          line3="Interct with Your Customers or Leads"
          line4="Via WhatsApp in Real-Time"
          btn1="Live Chat"
          btn2="Agent monitoring"
          btn3="Cross Functional Teams"
        />
      </HStack>
      <HStack
        mt={"100px"}
        pl="40px"
        pt={"50px"}
        pb="50px"
        boxShadow={
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;"
        }
      >
        <WhatsapElement
          line1={"Goal-Driven Conversations Using"}
          line2={"KeyWord Based Flow"}
          line3="DeSign Chat Flows Based on Keywods"
          line4="and Increase ROI."
          btn1="Marketing Campigns"
          btn2="Custom Flows"
          btn3="PersonaliZation"
        />
        <WhatsImage src="https://www.smatbot.com/img/whatsapp/keyboard/keyword_based_flow.svg" />
      </HStack>
      <HStack
        mt={"100px"}
        pl="40px"
        pt={"50px"}
        pb="50px"
        boxShadow={
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;"
        }
      >
        <WhatsImage src="https://www.smatbot.com/img/whatsapp/workflow/workflow_notifications.svg" />

        <WhatsapElement
          line1={"Integrate and Send"}
          line2={"WorkFlow Notifications"}
          line3="Simplified Notifications for Users Using"
          line4="External Triggers."
          btn1="User Authentication "
          btn2="Notifications"
          btn3="Remainders"
        />

      </HStack>
      <Box mt={'100px'} >
        <FludTAgs/>

      </Box>
      <Box pt={"70px"}>
        <Btncursol />
      </Box>
      <Box>
        <WGradintbox/>
      </Box>
    
    </Box>
  );
}
