import {
  HStack,
  Text,
  Button,
  Menu,
  MenuList,
  MenuButton,
  MenuItem
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { FC } from "react";

const Header: FC = () => {
  return (
    <HStack alignItems="center" padding="13px 56px" justifyContent="space-between">
      <Text>flavy-moji</Text>
      <HStack>
        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton
                px={4}
                py={2}
                transition="all 0.2s"
                borderRadius="md"
                borderWidth="1px"
                size='sm'
                background='white'
                _hover={{ bg: "gray.400" }}
                isActive={isOpen}
                as={Button}
                rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
              >
                한국어
              </MenuButton>
              <MenuList>
                <MenuItem>한국어</MenuItem>
                <MenuItem>English</MenuItem>
              </MenuList>
            </>
          )}
        </Menu>
        <Button colorScheme="gray" size="sm">
          개발 블로그
        </Button>
      </HStack>
    </HStack>
  );
};

export default Header;
