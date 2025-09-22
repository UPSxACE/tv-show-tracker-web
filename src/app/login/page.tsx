"use client";
import { Button, Center, Stack, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "@/components/forms/Input";
import Logo from "@/components/ui/Logo";
import { NAVBAR_HEIGHT } from "@/components/ui/layout/constants";

type FormValues = {
  identifier: string;
  password: string;
};

export default function Login() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
  } = useForm<FormValues>();

  return (
    <Center
      as="main"
      minH={{
        sm: `calc(100svh - ${NAVBAR_HEIGHT.base}px)`,
        xl: `calc(100svh - ${NAVBAR_HEIGHT.xl}px)`,
      }}
      bg="background.gray"
    >
      <Stack
        bg="white"
        w="full"
        h="fit"
        maxW={{ sm: "400px" }}
        p={{ base: 3, sm: 5 }}
        py={{ base: 2, sm: 4 }}
        rounded="md"
        shadow={{ sm: "md" }}
        gap={0}
      >
        <Center
          color="brand.primary"
          p={2}
          w="fit"
          rounded="sm"
          mx="auto"
          display={{ smDown: "none" }}
        >
          <Logo color="gray.800" textStyle="2xl" />
        </Center>
        <Input
          label="Username or email"
          invalid={!!errors.identifier}
          error={errors.identifier?.message}
          {...register("identifier")}
        />
        <Input
          label="Password"
          invalid={!!errors.password}
          error={errors.password?.message}
          {...register("password")}
        />
        <Stack mt={4} align="center">
          <Button
            bg={{ base: "brand.primary", _hover: "brand.secondary" }}
            size="sm"
            w="full"
          >
            Login
          </Button>
          <Text
            asChild
            textAlign="center"
            color="gray.700"
            textStyle="sm"
            textDecoration={{ _hover: "underline" }}
          >
            <Link href="/register">Don't have an account yet? Sign up</Link>
          </Text>
        </Stack>
      </Stack>
    </Center>
  );
}
