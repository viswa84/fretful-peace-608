import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Btn1, Btn2 } from "../components/Btn1";
import Imgslider from "../components/ImgSlider";
import Navbar from "../components/Navbar";
import Macimg from "./Macimg";
import MELLO from "../images/chatbot.png";
import CenterText from "../images/CenterText";
import Gridboximg from "../components/Gridboximg";
import Btncursol from "../components/Btncursol";
import FludTAgs from "../components/Tags";
import Map from "../components/Map";
import Fotter from "../components/Fotter";

export default function Home() {
  return (
    <Box>
      <Navbar />

      <br />
      <br />
      <br />

      <Flex>
        <Box>
          <Image
            w={"150px"}
            src="https://www.smatbot.com/img/main_bg/main_arrow_bg_image_one.svg"
          />
        </Box>
        <br />
        <Box width="40%" p="10px " pl={"20px"}>
          <Box>
            <Image
              ml={"32%"}
              w={"18px"}
              src="https://www.smatbot.com/img/main_bg/main_bg_image_five.svg"
            />
          </Box>
          <br />

          <Text fontSize="26px" color={"#33475b"} fontWeight={"550"}>
            Automate Conversations to Acquire,
          </Text>
          <Text fontSize="26px" color={"#33475b"} fontWeight={"550"}>
            Engage & Support Customers.
          </Text>
          <Text pt={"25px"} color={"#33475b"} fontSize="16px">
            No coding, Easy customization, Sensible pricig
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
              w={"18px"}
              src="https://www.smatbot.com/img/main_bg/main_bg_image_five.svg"
            />
          </Box>
        </Box>
        <Box>
          <Image
            w={"576px"}
            src="https://www.smatbot.com/img/home_page_banner.svg"
          />
        </Box>
      </Flex>

      <Flex mt={"-50px"} flexDirection={"row-reverse"}>
        <Image
          w={"150px"}
          src="https://www.smatbot.com/img/main_bg/main_arrow_bg_image_two.svg"
        />
      </Flex>
      <br />
      <br />
      <br />

      <Imgslider />
      <br />
      <br />
      <br />
      <br />
      <Box d>
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
        <Box mt={"80px"}>
          {" "}
          <Image
            ml={"5%"}
            borderRadius="20px"
            height={"100%"}
            w={"90%"}
            src={MELLO}
            alt="images"
          />
        </Box>
      </Box>

      <Box mt={"70px"}>
        <CenterText
          status="true"
          name={"Hybrid (Bot+Live Agent)"}
          texting={
            "Get the Most Out Of Smatbot by Simultaneously Automating & Personalizing"
          }
        />
      </Box>
      <Macimg />

      <Box bg={"#f6f9ff"} boxShadow=" 0 3px 15px #4d6ff629" pb={"70px"}>
        <Box pt={"70px"}>
          <CenterText
            name={"Feature Rich"}
            texting={
              "All the Features You Need to Take Your Business to The Next Level."
            }
          />
        </Box>

        <Box mt={"40px"}>
          <Gridboximg />
        </Box>
      </Box>

      <Box pt={"70px"}>
        <Btncursol />
      </Box>

      <Box mt={"100px"}>
        <CenterText
          name={"Seamless Integrations"}
          texting={
            "Connect with Your Preferred Apps to Maintain Continuity & Simplify Processes Across Your Business."
          }
        />
        <Box
          ml={"10%"}
          mt="20px"
          bg={"#275288"}
          mr="10%"
          borderRadius={"20px"}
          pt="40px"
          pb={"40px"}
        >
          <Flex alignItems={"center"} justifyContent="center">
            <Image
              bg={"#275288"}
              w="1000px"
              src="https://www.smatbot.com/img/integrations.svg"
            />
          </Flex>
        </Box>
      </Box>

      <Box mt={"100px"}>
        <FludTAgs />
      </Box>
      <Box mt={"100px"}>
        <Map />
      </Box>
      <Box mt={"50px"}>
        <Fotter />
      </Box>
    </Box>
  );
}
