import { Box, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";
import CenterText from "../images/CenterText";

let data = [
  {
    img: "https://www.smatbot.com/img/ai_powered.svg",
    nm1: "AI Powered",
    nm2: "Leverage the Power of Artificial Intelligence Using Google Dialogue flow, RASA and IBM.",
  },
  {
    img: "https://www.smatbot.com/img/on_premise.svg",
    nm1: "Tailor-Made Solutions",
    nm2: "Looking for Something Custom-Made for Your Business? We’ve got you covered",
  },
  {
    img: "https://www.smatbot.com/img/whatsapp/e_commerce_section.svg",
    nm1: "On-Premise",
    nm2: "Deploy On-premise and Get Full Control of the Application for Ultimate Security and Compliance.",
  },
  {
    img: "https://www.smatbot.com/img/ai_powered.svg",
    nm1: "Arabic Chatbot",
    nm2: "Add AI Support for Your Arabic Chatbot with Right-To-Left Support In-Built",
  },
];

export default function FludTAgs() {
  return (
    <Box>
      <CenterText name={"Add More Power to your bots"} />
      <Box width={"50%"} margin={"auto"}>
        <Box>
          <Grid templateColumns="repeat(2, 400px)">
            {data.map((e) => (
              <Box w={"390px"} textAlign="center" p={"10px"}>
                <Image w="386px" src={e.img} />
                <Text mt={"18px"} fontSize={"23px"}>
                  {e.nm1}
                </Text>
                <Text
                  color="gray"
                  fontSize={"13px"}
                  w="80%"
                  m="auto"
                  mt={"14px"}
                >
                  {e.nm2}
                </Text>
              </Box>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
