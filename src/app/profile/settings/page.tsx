import { Stack, Text } from "@chakra-ui/react";
import DeleteAccountButton from "./DeleteAccountButton";

export default function Settings() {
  return (
    <Stack
      as="main"
      w="full"
      maxW="8xl"
      px={{ base: 2.5, xl: 6 }}
      gap={2}
      py={3.5}
    >
      <Text textStyle="xl" fontWeight="bold">
        Account Settings
      </Text>
      <DeleteAccountButton />
    </Stack>
  );
}
