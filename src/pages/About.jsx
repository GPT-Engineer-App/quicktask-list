import { Box, Heading, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Box maxWidth="500px" mx="auto" mt={8}>
      <Heading mb={4}>About</Heading>
      <Text>This is a simple Todo application built with React and Chakra UI.</Text>
    </Box>
  );
};

export default About;
