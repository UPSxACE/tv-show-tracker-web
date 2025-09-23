import {
  AlertIndicator,
  AlertRoot,
  type AlertRootProps,
  AlertTitle,
} from "@chakra-ui/react";

export default function FormAlert({
  errorMessage,
  ...props
}: {
  errorMessage?: string | null;
} & AlertRootProps) {
  if (!errorMessage) return null;

  return (
    <AlertRoot
      alignItems="center"
      px={3}
      py={2.5}
      status="error"
      title={errorMessage}
      {...props}
    >
      <AlertIndicator />
      <AlertTitle>{errorMessage}</AlertTitle>
    </AlertRoot>
  );
}
