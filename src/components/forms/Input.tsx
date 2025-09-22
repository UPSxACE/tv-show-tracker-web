import {
  Input as ChakraInput,
  type InputProps as ChakraInputProps,
  FieldLabel,
  FieldRoot,
} from "@chakra-ui/react";
import type { RefAttributes } from "react";

export type InputProps = {
  label: string;
  invalid: boolean;
  error?: string | null;
} & ChakraInputProps &
  RefAttributes<HTMLInputElement>;

export default function Input({ label, invalid, error, ...props }: InputProps) {
  return (
    <FieldRoot invalid={invalid} gap={1} mt={3}>
      <FieldLabel textStyle="sm" color="gray.700">
        {label}
      </FieldLabel>
      <ChakraInput borderColor="gray.300" {...props} />
    </FieldRoot>
  );
}
