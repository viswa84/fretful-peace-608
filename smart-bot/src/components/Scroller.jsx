import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";

const data = [
  "https://www.smatbot.com/img/companies/mahindra.svg",
  "https://www.smatbot.com/img/companies/fnc.svg",
  "https://www.smatbot.com/img/companies/saint_gobain.svg",
  "https://www.smatbot.com/img/companies/kch.svg",
  "https://www.smatbot.com/img/companies/ramoji.svg",
  "https://www.smatbot.com/img/companies/forward_parcel.svg",
  "https://www.smatbot.com/img/companies/firstmeridian.svg",
  "https://www.smatbot.com/img/companies/tata.svg",
  "https://www.smatbot.com/img/companies/cinepolis.svg",
];
const data2=[
    "https://www.smatbot.com/img/companies/mahindra.svg",
  "https://www.smatbot.com/img/companies/fnc.svg",
  "https://www.smatbot.com/img/companies/saint_gobain.svg",
  "https://www.smatbot.com/img/companies/kch.svg",
  "https://www.smatbot.com/img/companies/ramoji.svg",
  "https://www.smatbot.com/img/companies/forward_parcel.svg",
]



export default function Scroller() {
  return <div>
     <Flex  w='85%' m='auto' justifyContent={'space-between'} >
        {
            data2.map((e)=>(
                <Image src={e} w="140px" />
            ))
        }
        
     </Flex>
     <br />
     <br />
  </div>;
}
