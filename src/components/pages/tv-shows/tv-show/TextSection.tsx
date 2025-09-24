import { Stack, type StackProps, Text } from "@chakra-ui/react";
import type { ReactNode } from "react";

export default function TextSection({
  title,
  children,
  ...props
}: {
  title: string;
  children: ReactNode;
} & StackProps) {
  return (
    <Stack flexBasis="100%" gap={0} minW="100px" flexGrow={1} {...props}>
      <Text textStyle="xl" fontWeight="bold">
        {title}
      </Text>
      <Text color="gray.200" lineHeight="moderate">
        {children}
      </Text>
    </Stack>
  );
}
