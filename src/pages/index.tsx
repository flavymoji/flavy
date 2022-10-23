import { Box, Center, Heading, HStack, Text, VStack, Flex, Textarea, Select, Checkbox, IconButton, Icon } from "@chakra-ui/react";
import { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <Flex direction="column" alignItems="center">
      <Flex direction="column" alignItems="center" textAlign="center">
        <Text fontSize="24px"> Make Your Slack Emoticon! </Text>
        <Text> 이모티콘으로 변환하고 싶은 텍스트를 입력해주세요 </Text>
        <Image src="/emoji.gif" alt="사랑스러운 얼굴 이모지" width="120px" height="120px"></Image>
      </Flex>
      <Flex width="100%" direction="row" gap="16px" padding="30px 50px">
        <Flex
          direction="column"
          height="485px"
          flexGrow="1"
          border="1px solid"
          borderColor="gray.200"
          borderRadius="16px"
          boxShadow="0px 0px 25px rgba(0, 0, 0, 0.05)"
        >
          <Flex direction="column" padding="24px 24px 20px 24px" width="100%" gap="20px">
            <Textarea placeholder="여기에 텍스트를 입력해주세요."></Textarea>
            <Flex direction="row" gap="16px" padding="0px 24px 24px 24px">
              <Flex direction="column" gap="16px">
                <Flex direction="row" gap="16px">
                  <Checkbox size="md">글자색</Checkbox>
                  <Checkbox size="md">배경색</Checkbox>
                </Flex>
              </Flex>
              <Flex direction="column" gap="20px">
                <Select placeholder="폰트를 선택해주세요">
                  <option value="font 1">font 1</option>
                </Select>
                <Box border="1px solid" alignItems="center" borderColor="gray.200" padding="18px 50px" borderRadius="6px">
                </Box>
                <Flex direction="column">
                  <Checkbox size="lg"> 배경색 설정 </Checkbox>
                  <Checkbox size="lg"> 글자크기 고정 </Checkbox>
                  <Checkbox size="lg"> 확대 비활성화 </Checkbox>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          direction="column"
          height="485px"
          flexGrow="1"
          border="1px solid"
          borderColor="gray.200"
          borderRadius="16px"
          boxShadow="0px 0px 25px rgba(0, 0, 0, 0.05)"
        >
          <Flex direction="row" alignItems="center" gap="11px" padding="24px">
            <Box padding="20px" border="1px solid" borderColor="gray.200" borderRadius="6px">
              <Image src="/emoticonGhost.png" alt="이모티콘 이미지" width="162px" height="162px"></Image>
            </Box>
            <Box padding="20px" border="1px solid" borderColor="gray.200" borderRadius="6px" background="#191A1f">
              <Image src="/emoticonGhost.png" alt="이모티콘 이미지" width="162px" height="162px"></Image>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Home;
