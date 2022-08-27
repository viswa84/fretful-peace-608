import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import React from "react";
import { Btn1, Btn2 } from "./Btn1";
import SingnForm from "./SingnModal";

export default function Navbar() {
  return (
    <>
      <Box position={"sticky"} top="0%" zIndex={"1"} bg="white" pb={"20px"}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          pt="20px"
          w={"84%"}
          m="auto"
        >
          <Box>
            <Link to="/">
              <Image
                src="https://s3.ap-south-1.amazonaws.com/custpostimages/sb_images/SB_logo_horizontal_text.png"
                alt="Smart"
                w={"100px"}
              />
            </Link>

            <br />

            <Box>
              <Text fontSize="10px" mt={"-22px"}>
                Subsidary of ByteQuark
              </Text>
            </Box>
          </Box>
          <Flex id="navvv" alignItems="center" gap="40px">
            <Box>
              <Menu id="ddpr">
                <MenuButton>Actions</MenuButton>
                <MenuList
                  mt={"10px"}
                  boxShadow={
                    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;"
                  }
                >
                  <MenuItem>Download</MenuItem>
                  <MenuItem>Create a Copy</MenuItem>
                  <MenuItem>Mark as Draft</MenuItem>
                  <MenuItem>Delete</MenuItem>
                  <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
              </Menu>
            </Box>
            <Link to="/whatsapp">
              <Text>Whatsapp</Text>
            </Link>
            <Link to="/instagram">
              <Text>Instagarm</Text>
            </Link>

            <Link to="/partners">
           
              <Text>Partners</Text>
            </Link>
            <Text>Pricing</Text>
            <SingnForm name="Login" />
            <Flex gap="20px">
              <Btn1 name={"Free Trial"} />
              <Btn2 name={"Book Demo"} />
            </Flex>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
