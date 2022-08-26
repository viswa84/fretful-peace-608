import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  Box,
  Image,
} from "@chakra-ui/react";
import { useRef } from "react";

export default function SingnForm(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  return (
    <Box>
      <Text onClick={onOpen}>{props.name}</Text>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader><Image w={'140px'} src='https://s3.ap-south-1.amazonaws.com/custpostimages/sb_images/SB_logo_horizontal_text.png' /></ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6} mt="60px">
            <FormControl    >
              <FormLabel>First name</FormLabel>
              <Input ref={initialRef} placeholder="First name" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input placeholder="Last name" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
