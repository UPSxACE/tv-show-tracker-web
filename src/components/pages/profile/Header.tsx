"use client";

import {
  HStack,
  Stack,
  TabsList,
  TabsRoot,
  TabsTrigger,
  Text,
  VStack,
} from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";
import type { SessionInfo } from "@/__generated__/graphql";
import Avatar from "@/components/ui/Avatar";

export default function Header({ profile }: { profile?: SessionInfo | null }) {
  const router = useRouter();

  const pathname = usePathname();

  const tab = resolveTab(pathname);

  const goTo = (route: string) => () => router.push(route);

  if (!profile) return null;

  return (
    <>
      <VStack w="full" bg="brand.secondary" color="white" gap={0}>
        <HStack
          h="90px"
          w="full"
          maxW="8xl"
          px={{ base: 2.5, xl: 6 }}
          gap={4.5}
          py={3.5}
        >
          <Avatar username={profile.username} size="xl" />
          <Text fontSize="26px" fontWeight="bold">
            {profile.username}
          </Text>
        </HStack>
      </VStack>
      <VStack w="full" gap={0}>
        <VStack
          w="full"
          borderBottom="1px solid"
          borderColor="border"
          bg="gray.100"
        >
          <Stack w="full" maxW="8xl" px={{ base: 2.5, xl: 6 }} gap={0} pt={0}>
            <TabsRoot value={tab} variant="line">
              <TabsList border={0} _before={{ border: 0 }}>
                <TabsTrigger
                  onClick={goTo("/profile")}
                  value="favorites"
                  textStyle="sm"
                >
                  Favorites
                </TabsTrigger>
                <TabsTrigger
                  onClick={goTo("/profile/settings")}
                  value="settings"
                  textStyle="sm"
                >
                  Settings
                </TabsTrigger>
              </TabsList>
            </TabsRoot>
          </Stack>
        </VStack>
      </VStack>
    </>
  );
}

function resolveTab(pathname: string) {
  switch (pathname) {
    case "/profile/settings":
      return "settings";
    default:
      return "favorites";
  }
}
