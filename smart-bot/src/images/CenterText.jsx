import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

export default function CenterText() {
  return (
    <div>
      <Box textAlign={"center"} position="relative">
        <Text fontSize="26px" color={"#33475b"} fontWeight={"550"}>
          Hybrid (Bot+Live Agent)
        </Text>
      </Box>
      <Box position={"absolute"} ml="44%" mt={"5px"}>
        <img src="https://www.smatbot.com/img/Line.svg" width={"170px"} />
      </Box>
      <Box position={"absolute"} ml="80%" mt={"5px"}>
        <img src="https://www.smatbot.com/img/hybrid/hybrid_bg_image_one.svg" width={"90px"} />
      </Box>
      <Box mt={"20px"} textAlign={"center"}>
        <Text fontSize="16px" color={"#33475b"}>
          Get the Most Out Of Smatbot by Simultaneously Automating &
          Personalizing
          <br />
          by Using a Combination of Human Agents & Bots
        </Text>
      </Box>
    </div>
  );
}
