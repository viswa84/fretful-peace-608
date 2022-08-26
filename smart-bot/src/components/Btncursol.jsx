import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const data = [
  {
    img: "https://www.smatbot.com/img/platforms/website.svg",
    name: "Website ChatBot",
    content:
      "Solve Queries, Generate & Capture Leads, Provide Support & Lots More with SmatBot on Your Website.",
  },
  {
    img: "https://www.smatbot.com/img/platforms/whatsapp.svg",
    name: "WhatsApp ChatBot",
    content:
      "Authenticate users, Send Updates Using our WhatsApp Business Solutions",
  },
  {
    img: "https://www.smatbot.com/img/platforms/landing-page.svg",
    name: "Landing Page Chatbot",
    content:
      "Access your Bot Directly via a Link and Engage with Your Visitors to see 2x Growth in Data Collection",
  },
  {
    img: "https://www.smatbot.com/img/reviews/mediaqart_review.png",
    name: "Facebook Messenger ChatBot",
    content:
      "Install SmatBot on Messenger to Engage with Your Social Media Audience Real-Time.",
  },
  {
    img: "https://www.smatbot.com/img/platforms/smartphone.svg",
    name: "Mobile App ChatBot",
    content:
      "Integrate SmatBot into Your Mobile Application to be Available 24/7 to Resolve Customer Issues.",
  },
];

let imgdata=[
    'https://www.smatbot.com/img/platforms/webiste_chatbot_platform.svg',
    'https://www.smatbot.com/img/platforms/whatsapp_chatbot_platform.svg',
    'https://www.smatbot.com/img/platforms/landing_page_platform.svg',
    'https://www.smatbot.com/img/platforms/fb_messenger_platform.svg',
    'https://www.smatbot.com/img/platforms/mobile_app_platform.svg'
]

export default function Btncursol() {


    let active=  "rgba(0, 0, 0, 0.1) 0px 4px 12px" ;
    

    const [sate, setsate]=useState(false)

    let x= false

    const [num,Setnum]=useState(0)
  return (
    <Box pl={"10%"} pr="10%">
      <Box>
        <Box position="relative">
          <Text fontSize="26px" color={"#33475b"} fontWeight={"550"}>
            Omnichannel Support
          </Text>
        </Box>
        <Box position={"absolute"} ml="2%">
          <img src="https://www.smatbot.com/img/Line.svg" width={"150px"} />
        </Box>

        <Box mt={"2%"}>
          <Text fontSize="14px" color={"#33475b"}>
            Support Your Users Across All Platforms with a Single Chatbot
          </Text>
        </Box>
      </Box>
      <Flex mt={"20px"} justifyContent="space-between">
        <Box  w={'55%'}>
          {data.map((e,i) => (
            
            <Flex id='bonxx' onClick={()=>{
                Setnum(i);
                setsate(!sate)
                

                
            }}
              key={e.name}
              p={"2%"}
              borderRadius="20px"
              cursor={"pointer"}
              mt="10px"
              boxShadow={ sate && active }
              
            >

              <Flex
                alignItems="center"
                justifyContent={"center"}
                bg={"#eef4fb"}
                borderRadius="50%"
                boxSize="80px"
              >
                <Image
                  borderRadius="full"
                  boxSize="50px"
                  src={e.img}
                  alt="Dan Abramov"
                />
              </Flex>
              <Box pl={"2%"}>
                <Text fontSize={"19px"} fontWeight="500">
                  {e.name}
                </Text>
                <Text fontSize="13px">{e.content}</Text>
              </Box>
            </Flex>
            
          ))}
        </Box>
        <Box >
          <Image
            src={imgdata[num]}
            w={"572px"}
            h='480px'
          />
        </Box>
      </Flex>
    </Box>
  );
}
