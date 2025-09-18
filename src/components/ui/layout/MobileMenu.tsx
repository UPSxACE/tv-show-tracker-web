import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerContent,
  DrawerPositioner,
  DrawerRoot,
  DrawerTrigger,
  IconButton,
  Portal,
} from "@chakra-ui/react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { NAVBAR_HEIGHT } from "./constants";

export default function MobileMenu() {
  return (
    <DrawerRoot placement="top">
      <DrawerTrigger
        display={{
          xl: "none",
        }}
        asChild
      >
        <IconButton
          flexShrink={0}
          h={{
            base: `${NAVBAR_HEIGHT.base}px`,
            xl: `${NAVBAR_HEIGHT.xl}px`,
          }}
          w={{
            base: `${NAVBAR_HEIGHT.base}px`,
            xl: `${NAVBAR_HEIGHT.xl}px`,
          }}
          variant="plain"
          color="white"
          size="2xl"
          minW={0}
          minH={0}
        >
          <RxHamburgerMenu strokeWidth={0.5} />
        </IconButton>
      </DrawerTrigger>
      <Portal>
        <DrawerBackdrop />
        <DrawerPositioner>
          <DrawerContent>
            <DrawerBody p={0}>
              <DrawerActionTrigger
                asChild
                p={3}
                pb={2.5}
                display="block"
                bg="brand.primary"
                color="gray.100"
              >
                <Link href="/">Home</Link>
                <Link href="/tv-shows">TV Shows</Link>
              </DrawerActionTrigger>
            </DrawerBody>
          </DrawerContent>
        </DrawerPositioner>
      </Portal>
    </DrawerRoot>
  );
}
