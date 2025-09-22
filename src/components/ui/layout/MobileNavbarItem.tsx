import { DrawerActionTrigger } from "@chakra-ui/react";
import Link from "next/link";
import type { ReactNode } from "react";

export default function MobileNavbarItem({
  link,
  children,
}: {
  link: string;
  children: ReactNode;
}) {
  return (
    <DrawerActionTrigger
      asChild
      p={3}
      pb={2.5}
      display="block"
      bg="brand.primary"
      color="gray.100"
    >
      <Link href={link}>{children}</Link>
    </DrawerActionTrigger>
  );
}
