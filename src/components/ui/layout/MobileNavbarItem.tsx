import {
  Button,
  DrawerActionTrigger,
  type DrawerActionTriggerProps,
} from "@chakra-ui/react";
import Link from "next/link";
import type { ReactNode } from "react";

export default function MobileNavbarItem({
  onClick,
  link,
  children,
  ...props
}: {
  link?: string;
  children: ReactNode;
} & DrawerActionTriggerProps) {
  return (
    <DrawerActionTrigger
      asChild
      p={3}
      pb={2.5}
      display="block"
      bg="brand.primary"
      color="gray.100"
      {...props}
    >
      {link ? (
        <Link href={link}>{children}</Link>
      ) : (
        <Button
          variant="plain"
          h="auto"
          p={0}
          color="inherit"
          fontSize="inherit"
          lineHeight="inherit"
          onClick={onClick}
        >
          {children}
        </Button>
      )}
    </DrawerActionTrigger>
  );
}
