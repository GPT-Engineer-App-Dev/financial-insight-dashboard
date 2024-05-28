import { Box, Container, Flex, Heading, Link, Text, VStack, HStack, Divider } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Header */}
      <Box bg="gray.800" color="white" py={4}>
        <Heading as="h1" size="xl" textAlign="center">
          Financial Times
        </Heading>
      </Box>

      {/* Navigation Bar */}
      <Box bg="gray.700" color="white" py={2}>
        <Flex justify="center">
          <HStack spacing={8}>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.300" }}>Home</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.300" }}>News</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.300" }}>Markets</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.300" }}>Opinion</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.300" }}>More</Link>
          </HStack>
        </Flex>
      </Box>

      {/* Main Content Area */}
      <Flex direction={{ base: "column", md: "row" }} p={4}>
        {/* Main Articles */}
        <Box flex="3" p={4}>
          <VStack spacing={8} align="stretch">
            <Box>
              <Heading as="h2" size="lg">Sample Article 1</Heading>
              <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
            </Box>
            <Divider />
            <Box>
              <Heading as="h2" size="lg">Sample Article 2</Heading>
              <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
            </Box>
            <Divider />
            <Box>
              <Heading as="h2" size="lg">Sample Article 3</Heading>
              <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
            </Box>
          </VStack>
        </Box>

        {/* Sidebar */}
        <Box flex="1" bg="gray.100" p={4} ml={{ md: 4 }} mt={{ base: 4, md: 0 }}>
          <Heading as="h3" size="md" mb={4}>Sidebar Content</Heading>
          <Text>Additional content or advertisements can go here.</Text>
        </Box>
      </Flex>

      {/* Footer */}
      <Box bg="gray.800" color="white" py={4} mt={8}>
        <Flex justify="space-between" align="center" direction={{ base: "column", md: "row" }} px={4}>
          <Text>&copy; 2023 Financial Times</Text>
          <HStack spacing={4}>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.300" }}>Contact</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.300" }}>Privacy Policy</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.300" }}>Terms of Service</Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;