import { Box, Button, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

export function WhatsapElement(props) {
  return (
    <Stack mt={"100px"} pl="7%">
      <Text color={"#8b8f92"}> {props.line1}</Text>
      <Text color={"#33475b"} fontSize="26px" fontWeight={"bold"}>
        {props.line2}
      </Text>

      <Text color={"#8b8f92"} fontSize="16px">
        {props.line3}
        <br />
        {props.line4}
      </Text>
      <Stack>
        <HStack mt={"25px"} gap="10px">
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
            {props.btn1}
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
            {props.btn2}
          </Button>
        </HStack>
      </Stack>
      <Box>
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
          {props.btn3}
        </Button>
      </Box>
    </Stack>
  );
}

export function WhatsImage(props) {
  return (
    <Box>
      <Image
        src={props.src}
        w="576px"
        h="450px"
      />
    </Box>
  );
}
