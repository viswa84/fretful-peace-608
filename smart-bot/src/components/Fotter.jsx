import {
  Avatar,
  Box,
  Flex,
  HStack,
  Image,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { MdCall, MdEmail, MdOutlineCall, MdWifiCalling2 } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { ImWhatsapp } from "react-icons/im";
import { GrFacebook } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import {GrLinkedin} from 'react-icons/gr'
import { FaYoutube } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";

export default function Fotter() {
  return (
    <Box>
      <Box  id='fotter'   background="#1C1D2E" color={"white"} pt="40px">
        <Flex justifyContent={"space-around"} p="10px">
          <Text>Trusted By:</Text>
          <Image
            src="https://www.smatbot.com/img/Footer/Asset%2015.svg"
            w="60px"
          />
          <Image
            src="https://www.smatbot.com/img/Footer/Asset%2023.svg"
            w="60px"
          />
          <Image
            src="https://www.smatbot.com/img/Footer/Asset%2019.svg"
            w="60px"
          />
          <Image
            src="https://www.smatbot.com/img/Footer/Asset%2020.svg"
            w="60px"
          />
          <Box bg="black" borderRadius={5} padding={3} boxSize={"border-box"}>
            <Image
              src="https://www.smatbot.com/img/companies/kch.svg"
              w="60px"
            />
          </Box>
        </Flex>
        <Flex padding={10} justifyContent="space-between">
          <Box pt={"70px"}>
            <Link to="/">
              <Image
                src="https://s3.ap-south-1.amazonaws.com/custpostimages/sb_images/SB_logo_horizontal_text.png"
                alt="Smart"
                w={"100px"}
              />
            </Link>
            <Text fontSize={"12px"}>Feso Social Media Pvt. Ltd.</Text>
            <Text fontSize={"12px"}>Subsidiary Of ByteQuark Solutions</Text>
          </Box>

          <Box>
            <Stack id="Fotter-ptag">
              <h3>PRODUCT</h3>
              <p>Whatsap</p>
              <p>Instagaram</p>
              <p>On-Premise</p>
              <p>Arabic-Chatbot</p>
              <p>Pricing</p>
              <p>AI Services</p>
              <p>SingnUp</p>
              <p>Login</p>
            </Stack>
          </Box>
          <Stack id="Fotter-ptag">
            <h3>RESORSES</h3>
            <p>Contact Us</p>
            <p>Help Center</p>
            <p>Blog</p>
            <p>About Us</p>
            <p>Partners</p>
            <p>Whatsap Free Plugin</p>
            <p>SingnUp</p>
            <p>Login</p>
          </Stack>
          <Stack id="Fotter-ptag">
            <h3>INDUSTRIES</h3>
            <p>Education</p>
            <p>Real Estate</p>
            <p>Auto Mobile</p>
            <p>Health Care</p>
            <p>E-Commerse</p>
            <p>HR</p>
            <p>ITES</p>
            <p>Others</p>
          </Stack>
          <Box>
            <Flex gap={"20px"} id="Fotter-ptag2" p="10px">
              <Avatar
                size="xs"
                name="Dan Abrahmov"
                src="https://www.smatbot.com/img/Footer/india.svg"
              />
              <Text>
                Ashoka Hi-Tech Chambers-2F, Banjara Hills -2 , <br />
                Hyderabad-34
              </Text>
            </Flex>
            <HStack ml={"40px"} mt="10px" gap={"10px"}>
              <MdCall color="white" />
              <Text color={"#465def"}>+91 9205308991</Text>
            </HStack>
            <hr id="fotter-hr" />
            <Flex gap={"20px"} id="Fotter-ptag2" p="10px" pr={"20px"}>
              <Avatar
                size="xs"
                name="Dan Abrahmov"
                src="https://www.smatbot.com/img/Footer/united-states.svg"
              />
              <Text>
                ByteQuark Solutions LLC, Atlanta Tech Village, 3423 <br />
                Piedmont Rd NE, GA, 30308.
              </Text>
            </Flex>
            <HStack ml={"40px"} mt="10px" gap={"10px"}>
              <MdCall color="white" />
              <Text color={"#465def"}>+1 2179046040</Text>
            </HStack>
            <hr id="fotter-hr" />
            <Flex gap={"20px"} id="Fotter-ptag2" p="10px">
              <Avatar
                size="xs"
                name="Dan Abrahmov"
                src="https://www.smatbot.com/img/Footer/united-arab-emirates.svg"
              />
              <Text>
                ByteQuark FZE, DSO-HQ-C4-435/4, Dubai Silicon Oasis, <br />
                Dubai, UAE.
              </Text>
            </Flex>
            <HStack ml={"40px"} mt="10px" gap={"10px"}>
              <MdCall color="white" />
              <Text color={"#465def"}>+91 9205308991 </Text>
            </HStack>

            <hr id="fotter-hr" />
            <HStack ml={"40px"} mt="10px" gap={"10px"}>
              <MdEmail color="white" />
              <Text color={"#465def"}>Info@smatbot.com</Text>
              <ImWhatsapp color="white" />
              <Text color={"#465def"}>Info@smatbot.com</Text>
            </HStack>
          </Box>
        </Flex>

        <Flex
          h={"50px"}
          alignItems="center"
          justifyContent={"space-evenly"}
          bg="black"
        >
          <HStack gap={"20px"}>
            <Text color={"#666"}>Privacy Policy</Text>
            <Text color={"#666"}>Terms And Condition</Text>
          </HStack>
          <HStack gap={"10px"}>
            <Flex
              w="30px"
              h="30px"
              bg={"#212529"}
              borderRadius="50%"
              align="center"
              justify="center"
            >
              <a href="https://www.facebook.com/smatbotai/">
                
                <FaFacebookF />
              </a>
            </Flex>
            <Flex
              w="30px"
              h="30px"
              bg={"#212529"}
              borderRadius="50%"
              align="center"
              justify="center"
            >
            <a  href="https://twitter.com/smatbot"> <BsTwitter /></a> 
            </Flex>
            <Flex
              w="30px"
              h="30px"
              bg={"#212529"}
              borderRadius="50%"
              align="center"
              justify="center"
            >
              <BsInstagram />
            </Flex>
            <Flex
              w="30px"
              h="30px"
              bg={"#212529"}
              borderRadius="50%"
              align="center"
              justify="center"
            >
              <FaYoutube />
            </Flex>
            <Flex
              w="30px"
              h="30px"
              bg={"#212529"}
              borderRadius="50%"
              align="center"
              justify="center"
            >
            <a href="https://www.linkedin.com/company/smatbot/" >  <GrLinkedin/></a>
            </Flex>
          </HStack>
        </Flex>
        <Flex alignItems={'center'} justifyContent='center'p='20px' >
          <Image w='80px' src="https://www.smatbot.com/img/Footer/Vaeto.svg"/>
        </Flex>
        <hr/>
        <Box p={'20px'}  ><Text fontSize={'13px'}   textAlign={'center'} > © 2015-2022 Feso Social Media. All Rights Reserved.<Text color={'whatsapp.300'} >Devloped by Vishwanath</Text></Text></Box>
      </Box>
    </Box>
  );
}
