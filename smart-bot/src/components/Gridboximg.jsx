import { Box, Button, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";

const data = [
  {
    img: "https://www.smatbot.com/img/features/tick-mark.svg",
    n1: "Email and Mobile OTP",
    n2: "Validation",
  },
  {
    img: "https://www.smatbot.com/img/features/snowflake.svg ",
    n1: " Condition-Based",
    n2: "Conversations ",
  },
  {
    img: "https://www.smatbot.com/img/features/email.svg ",
    n1: "Automated ",
    n2: "Email  Follow Ups",
  },
  {
    img: " https://www.smatbot.com/img/features/tick-mark.svg",
    n1: " Limitless",
    n2: " API integrations",
  },
  {
    img: "https://www.smatbot.com/img/features/padlock.svg ",
    n1: "High Security with ",
    n2: "Data Masking ",
  },
  {
    img: " https://www.smatbot.com/img/features/idea.svg",
    n1: "AI Intent-Based ",
    n2: " Chat Flows",
  },
  {
    img: "https://www.smatbot.com/img/features/diagram.svg ",
    n1: " Real-Time",
    n2: "Performance Analytics ",
  },
  {
    img: "https://www.smatbot.com/img/features/translate.svg ",
    n1: "Converse in ",
    n2: "50+ Languages",
  },
];

export default function Gridboximg() {
  return (
    <Box>
      <Grid templateColumns="repeat(4, 1fr)" gap={'30px'}  m='auto'  w={'90%'}  >
       {
        data.map((e)=>(
            <Box id='rich-box'  key={e.n2}>
              <Button bg='#e6f2fc'  > <Image src={e.img} w={'26px'}/> </Button>
               <Text mt={'20px'} fontWeight='bold'   >{e.n1}</Text>
               <Text fontWeight='bold'  >{e.n2}</Text>

            </Box>
        ))
       }

      </Grid>
    </Box>
  );
}
