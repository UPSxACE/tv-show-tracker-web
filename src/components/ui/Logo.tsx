import { Button, Center, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Logo() {
  return (
    <Center>
      <Button
        asChild
        variant="plain"
        color="white"
        h="min"
        textStyle={{
          base: "md",
          md: "xl",
        }}
        fontWeight="semibold"
        gap={1}
        px={0}
      >
        <Link href="/">
          Tekever
          <Text bg="brand.cta" px={1} rounded="md">
            TV
          </Text>
        </Link>
      </Button>
    </Center>
  );
}
