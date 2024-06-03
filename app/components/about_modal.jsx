"use client";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { useDisclosure } from "@chakra-ui/react";

function ReturnFocus() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);

  return (
    <>
      {/* <Box ref={finalRef} tabIndex={-1} aria-label="Focus moved to this box">
        Some other content that'll receive focus on close.
      </Box> */}

      <Button mt={4} onClick={onOpen} colorScheme="blue" variant="outline">
        About Me
      </Button>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>About Me</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div>
              I possess three years of working experience as an Assistant News
              Producer and News Presenter at EAP Network in Sri Lanka (PVT) Ltd.
              (2007-2010). I also possess working experience as a Senior News
              Presenter and Senior News Reporter at TV Derana in Sri Lanka.
              (2010 – to date) I am capable to translating Sinhala and English.
              I posses one year of working experience as a provincial
              correspondents coordinator at TV Derana. I am working as a
              freelance Producer at Flair Media (Based in Turkey) I am working
              as freelance producer and Journalist at Pearvideo Social Media
              (Based in China) I am working as a fixer at CNN - Big story
            </div>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ReturnFocus;
