import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

export default function CenterText(props) {
  return (
    <Box>
      <Box textAlign={"center"} position="relative">
        <Text fontSize="26px" color={"#33475b"} fontWeight={"550"}>
          {props.name}
          {/* Hybrid (Bot+Live Agent) */}
        </Text>
      </Box>
      <Box position={"absolute"} ml="44%" mt={"5px"}>
       <img src="https://www.smatbot.com/img/Line.svg" width={"170px"} />
      </Box>
      <Box position={"absolute"} ml="80%" mt={"5px"}>
    {  props.status &&   <img
          src="https://www.smatbot.com/img/hybrid/hybrid_bg_image_one.svg"
          width={"90px"}
        />}
      </Box>
      <Box mt={"20px"} textAlign={"center"}>
        <Text fontSize="16px" color={"#33475b"}>
          {props.texting}
        </Text>
      </Box>
    </Box>
  );
}
