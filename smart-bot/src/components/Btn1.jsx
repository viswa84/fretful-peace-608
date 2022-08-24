import { Button } from "@chakra-ui/react";
import React from "react";

export  function Btn1(props) {
  return (
    <div>
      <Button size={props.size}   colorScheme="blue" variant="outline">
        {props.name}
      </Button>
    </div>
  );
}


export  function Btn2(props) {
    return (
      <div>
        <Button size={props.size}   colorScheme="blue" variant="solid">
          {props.name}
        </Button>
      </div>
    );
  }


