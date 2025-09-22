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
import { NAVBAR_HEIGHT, NAVBAR_ITEMS } from "./constants";
import MobileNavbarItem from "./MobileNavbarItem";
import MobileUserOptions from "./MobileUserOptions";

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
            <DrawerBody p={0} py={2} bg="brand.primary">
              <MobileNavbarItem link="/">Home</MobileNavbarItem>
              {NAVBAR_ITEMS.map((n) => (
                <MobileNavbarItem key={n.id} link={n.link}>
                  {n.label}
                </MobileNavbarItem>
              ))}
              <MobileUserOptions />
            </DrawerBody>
          </DrawerContent>
        </DrawerPositioner>
      </Portal>
    </DrawerRoot>
  );
}
