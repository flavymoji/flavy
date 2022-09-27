import { Box, Center, Heading, HStack, VStack } from "@chakra-ui/react";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Center w="100vw">
      <VStack>
      <Heading>Make Your Slack Emoticon!</Heading>
      <text font-Weight='800' margin-top='24px' margin-bottom='30px' fontSize='24px'>이모티콘으로 변환하고 싶은 텍스트를 입력해주세요!</text>
        <Box>
          <text>gif 이미지</text>
        </Box>

        <HStack paddingTop='30px' spacing='16px'>
          <Box w='467px' height='485px' border='1px' borderColor='gray.200' borderRadius='16px'></Box>
          <Box w='467px' height='485px' border='1px' borderColor='gray.200' borderRadius='16px'></Box>
        </HStack>      
      </VStack>

    </Center>
  );
};

export default Home;