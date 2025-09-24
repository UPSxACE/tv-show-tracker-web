import {
  AvatarFallback,
  AvatarImage,
  AvatarRoot,
  type AvatarRootProps,
} from "@chakra-ui/react";

export default function Avatar({
  username,
  ...props
}: { username: string } & AvatarRootProps) {
  return (
    <AvatarRoot {...props}>
      <AvatarFallback name={username} />
      <AvatarImage />
    </AvatarRoot>
  );
}
