import { Button, type ButtonProps } from "@chakra-ui/react";
import Link from "next/link";
import type { ReactNode } from "react";

export default function NavbarItem({
  onClick,
  link,
  children,
  ...props
}: {
  link?: string;
  children: ReactNode;
} & ButtonProps) {
  return (
    <Button
      asChild
      ml={2.5}
      variant="plain"
      minH="0"
      h="auto"
      borderBottom="2px solid"
      borderBottomColor={{
        base: "transparent",
        _hover: "brand.cta",
      }}
      px={1}
      pt={1}
      color="gray.300"
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
    </Button>
  );
}
