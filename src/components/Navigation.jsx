import { Box, HStack, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Box bg="gray.100" py={4}>
      <HStack maxWidth="500px" mx="auto" spacing={4}>
        <Link as={RouterLink} to="/">
          Home
        </Link>
        <Link as={RouterLink} to="/about">
          About
        </Link>
      </HStack>
    </Box>
  );
};

export default Navigation;
