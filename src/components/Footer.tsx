import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <Box as="footer">
      <VStack alignItems="center" paddingBottom="20px">
        <Text
          color="#888B8E"
          fontSize="14px"
          fontWeight="500"
          letterSpacing="-0.2px"
          lineHeight="20px"
        >
          (C) 2022 - 2032 by Flavy
        </Text>
      </VStack>
      <HStack
        bgColor="#F7FAFC"
        flexDirection="row"
        justifyContent="space-between"
        padding="20px 55px 26px"
        borderTop="1px solid #EDF2F7"
      >
        <VStack />
        <VStack
          color="#888B8E"
          fontSize="14px"
          letterSpacing="-0.2px"
          lineHeight="20px"
          alignItems="flex-end"
        >
          <Text>개발자에게 문의: fly@watcha.com</Text>
          <Text>디자이너에게 문의: ivy@watcha.com</Text>
        </VStack>
      </HStack>
    </Box>
  );
};

export default Footer;
