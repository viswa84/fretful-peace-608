import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Text,
  Grid,
  Center,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import Imgslider from "../components/ImgSlider";
import Navbar from "../components/Navbar";

import CenterText from "../images/CenterText";

let data = [
  {
    img: "https://www.smatbot.com/img/partners_page_images/p3-left.svg",
    nm1: "Earn Recurring Revenue",
    nm2: "Get a 20% commission (on the recurring subscription value)for any clients that onboard with us through your referral.",
  },
  {
    img: "https://www.smatbot.com/img/partners_page_images/p3-right.svg",
    nm1: "Add Value To Your Clients",
    nm2: "10% discount will be applied on standardplans to the first client you onboard with us.",
  },
];

export default function Partners() {
  return (
    <Box>
      <Navbar />

      <Box ml={"10%"} mr="10%" mt={"50px"}>
        <HStack gap={"80px"} lineHeight="29px">
          <Box>
            <Text fontSize={"26px"} fontWeight="500" color={"#33475b"}>
              Partner with Smatbot To
              <br /> See Instant Revenue Growth
            </Text>
            <Text pt="10px">
              Earn Continuous Steady Revenue While Adding Value
            </Text>
            <Text>to Your Clients.</Text>
            <Button
              colorScheme="messenger"
              variant="solid"
              pl="30px"
              pr="30px"
              mt="30px"
              _hover={{
                color: "blue",
                background: "white",
                border: "1px solid blue",
              }}
            >
              <Text fontSize={"16px"} fontWeight="light">
                Let's Talk
              </Text>
            </Button>
            <Text color={"blue"} fontSize="12px">
              {" "}
              *Try free for 3 months
            </Text>
          </Box>
          <Box>
            <Image src="https://www.smatbot.com/img/partners_page_images/pg1.png" />
          </Box>
        </HStack>

        <Box mt={"90px"} position="relative">
          {" "}
          <Imgslider />
          <Box mt={"50px"}>
            <HStack gap={"80px"} lineHeight="29px">
              <Box>
                <Text fontSize={"26px"} fontWeight="500" color={"#33475b"}>
                  Experience
                  <br /> Our Platform For Yourself
                </Text>
                <Text letterSpacing={"0.27px"} pt="10px">
                  Free Usage of Our Platform - Both Website
                </Text>
                <Text mt={"-5px"}>& WhatsApp for 3 months.</Text>
              </Box>
              <Box>
                <Image src="https://www.smatbot.com/img/partners_page_images/p2img.png" />
              </Box>
            </HStack>
            <Image
              position={"absolute"}
              mt="-500px"
              src="https://www.smatbot.com/img/partners_page_images/p2side.png"
            />
          </Box>
        </Box>
      </Box>
      <Flex pr="10%" flexDirection={"row-reverse"}>
        <Image src="https://www.smatbot.com/img/partners_page_images/p2bottom.png" />
      </Flex>

      <Box>
        <CenterText name={"Add More Power to your bots"} />
        <Box width={"50%"} margin={"auto"}>
          <Box>
            <HStack gap={"50px"}>
              {data.map((e) => (
                <Box key={e.nm2} w={"500px"} textAlign="center" p={"10px"}>
                  <Image w="386px" src={e.img} />
                  <Text mt={"18px"} fontSize={"23px"}>
                    {e.nm1}
                  </Text>
                  <Text color="gray" fontSize={"13px"} m="auto" mt={"14px"}>
                    {e.nm2}
                  </Text>
                </Box>
              ))}
            </HStack>
          </Box>
        </Box>
      </Box>
      <Center>
        <Text fontSize={"25px"} fontWeight="600">
          Contact Us
        </Text>
      </Center>
      <Center>
        <Image w={"130px"} src="https://www.smatbot.com/img/Line.svg" />
      </Center>
      <br />
      <br />
      <br />
      <br />
      <Box>
        <Center>
          {" "}
          <Stack id="partInput" gap={"20px"}>
            <Input placeholder="Name"  />
            <Input placeholder="Email" />
            <Input placeholder="Phone number" />
            <Input placeholder="Website" />

            <Textarea placeholder="Message"></Textarea>
          </Stack>
        </Center>

        <br />
        <br />
        <br />
        <br />
        <br />
      </Box>
    </Box>
  );
}
