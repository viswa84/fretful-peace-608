import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";

export default function Macimg() {
  return (
    <div>
      <Box position={"relative"}>
        <Box m={"auto"} ml="20%">
          <Image
            w="800px"
            h="700px"
            src="https://www.smatbot.com/img/hybrid/hybrid_chat.svg"
          />
        </Box>
        <Box position={"absolute"} ml="18%" top={"1"}>
          <Image
            w="130px"
            src="https://www.smatbot.com/img/hybrid/hybrid_left_corner.svg"
          />
        </Box>
        <Box position={"absolute"} ml="15%" bottom={"20%"}>
          <Image
            w="80px"
            src="https://www.smatbot.com/img/hybrid/live_agent_in_hybrid.svg"
          />
        </Box>
        <Box position={"absolute"} ml="68%" bottom={"4.9%"}>
          <Image
            w="130px"
            h={"145px"}
            src="https://www.smatbot.com/img/hybrid/hybrid_right_corner.svg"
          />
        </Box>
      </Box>
    </div>
  );
}
