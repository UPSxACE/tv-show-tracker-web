import {
  Input as ChakraInput,
  type InputProps as ChakraInputProps,
  FieldErrorText,
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
    <FieldRoot invalid={invalid} gap={1}>
      <FieldLabel textStyle="sm" color="gray.700">
        {label}
      </FieldLabel>
      <ChakraInput borderColor="gray.300" {...props} />
      <FieldErrorText textStyle="sm">{error}</FieldErrorText>
    </FieldRoot>
  );
}
