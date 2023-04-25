import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  IconButton,
  Link,
  useBoolean,
} from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const links = [
  {
    to: "/",
    title: "Home",
  },
  {
    to: "/about",
    title: "About",
  },
  {
    to: "/users",
    title: "Users",
  },
];

const Navbar = () => {
  const [flag, setFlag] = useBoolean(false);
  return (
    <Box>
      <Box pos="fixed" top="1rem" right="1rem" align="center">
        <Flex display={{ base: "none", md: "flex" }}>
          {links.map(({ to, title }) => (
            <Box>
              <Link as={RouterLink} to={to}>
                <Button variant="ghost">{title}</Button>
              </Link>
            </Box>
          ))}
        </Flex>
        <IconButton
          display={{ base: "block", md: "none" }}
          icon={<HamburgerIcon />}
          onClick={setFlag.on}
        ></IconButton>
      </Box>
      {flag && (
        <Box
          pos="fixed"
          top="0"
          left="0"
          w="100vw"
          h="100vh"
          zIndex={20}
          bgColor="white"
          overflow="auto"
          display={{ base: "block", md: "none" }}
        >
          <Flex>
            <Box pos="fixed" top="1rem" right="1rem">
              <IconButton
                onClick={setFlag.off}
                display={{ base: "block", md: "none" }}
                icon={<CloseIcon />}
              ></IconButton>
            </Box>
          </Flex>

          <Flex
            direction="column"
            align="center"
            justify="center"
            marginTop="3rem"
          >
            {links.map(({ to, title }) => (
              <Box>
                <Link as={RouterLink} to={to}>
                  <Button variant="ghost">{title}</Button>
                </Link>
              </Box>
            ))}
          </Flex>
        </Box>
      )}
    </Box>
  );
};
export { Navbar };
