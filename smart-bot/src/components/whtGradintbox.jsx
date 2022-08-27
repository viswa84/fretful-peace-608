import { CheckCircleIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FcCheckmark } from "react-icons/fc";

export default function WGradintbox() {
  return (
    <Box mt={"50px"}>
      <Flex
        ml={"9%"}
        id="whatsgrad"
        mr={"9%"}
        justifyContent="center"
        alignItems={"center"}
        flexDirection='row'
        background={'white'}
      >
        <Stack
          gap={"20px"}
          id="gradbox"
          w="80%"
          
          bg="white"
          pl={"2%"}
          pt="4%"
          pb={'2%'}
        >
          <Text fontSize={"22px"} fontWeight="500">
            Connect With 2 Billion+ People on WhatsApp
          </Text>
          <Text>
            Engage With Your Customers On The World's Most Used Communication
            Channel <br /> and See 2x More Responses
          </Text>
          <Text fontSize={"22px"} fontWeight="500">
            What's Included
          </Text>
          <HStack  >
            <HStack gap="10px">
              <Button
                leftIcon={<CheckCircleIcon color="#25D366" />}
                color={"#8b8f92"}
                borderRadius="20px"
                fontSize="14px"
                fontWeight="medium"
                variant="outline"
                pt="10px"
                pb="10px"
              >
                Connect with 3rd Party Apps
              </Button>
              <Button
                leftIcon={<CheckCircleIcon color="#25D366" />}
                color={"#8b8f92"}
                borderRadius="20px"
                fontSize="14px"
                fontWeight="medium"
                variant="outline"
                pt="10px"
                pb="10px"
              >
                Insights to Analyze
              </Button>
            </HStack>
            
            
          </HStack>
         
        </Stack>
      
      </Flex>
    </Box>
  );
}
{/* <Box> <Image w='140px'src="https://www.smatbot.com/img/Instagram/robo-hand.jpg"/></Box> */}