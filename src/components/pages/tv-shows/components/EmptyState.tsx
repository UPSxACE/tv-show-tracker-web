import {
  EmptyStateContent,
  EmptyStateDescription,
  EmptyStateIndicator,
  EmptyStateRoot,
  EmptyStateTitle,
  VStack,
} from "@chakra-ui/react";
import { TbDeviceTv } from "react-icons/tb";

export default function EmptyState({ message }: { message?: string }) {
  return (
    <EmptyStateRoot>
      <EmptyStateContent>
        <EmptyStateIndicator textStyle="5xl">
          <TbDeviceTv />
        </EmptyStateIndicator>
        <VStack textAlign="center">
          <EmptyStateTitle>No TV Shows</EmptyStateTitle>
          <EmptyStateDescription>
            {message || "All clear for now. Come back soon!"}
          </EmptyStateDescription>
        </VStack>
      </EmptyStateContent>
    </EmptyStateRoot>
  );
}
