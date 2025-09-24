import { Center, Spinner, Stack, VStack } from "@chakra-ui/react";
import { NAVBAR_HEIGHT } from "@/components/ui/layout/constants";

export default function Fallback() {
  return (
    <VStack
      as="main"
      minH={{
        base: `calc(100svh - ${NAVBAR_HEIGHT.base}px)`,
        xl: `calc(100svh - ${NAVBAR_HEIGHT.xl}px)`,
      }}
    >
      <VStack w="full" bg="brand.secondary" h="90px" color="white">
        <Stack w="full" maxW="8xl" px={{ base: 2.5, xl: 6 }} gap={0} py={3.5} />
      </VStack>
      <Center flex={1}>
        <Spinner size="lg" mb="90px" />
      </Center>
    </VStack>
  );
}
