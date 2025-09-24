"use client";
import { useApolloClient, useMutation } from "@apollo/client/react";
import { Button, Center, Stack, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import type {
  LoginUserMutation,
  LoginUserMutationVariables,
} from "@/__generated__/graphql";
import LoginUser from "@/components/pages/login/mutation";
import { useSession } from "@/components/session/SessionContext";
import FormAlert from "@/components/ui/forms/FormAlert";
import Input from "@/components/ui/forms/Input";
import Logo from "@/components/ui/Logo";
import { NAVBAR_HEIGHT } from "@/components/ui/layout/constants";
import parseSimpleError from "@/lib/utils/graphql/parseSimpleError";
import parseValidationErrors from "@/lib/utils/graphql/parseValidationErrors";

type FormValues = {
  identifier: string;
  password: string;
};

export default function Login() {
  const client = useApolloClient();

  const { reevaluate } = useSession();

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormValues>();

  const router = useRouter();

  const [mutate, { loading }] = useMutation<
    LoginUserMutation,
    LoginUserMutationVariables
  >(LoginUser, {
    onCompleted: () => {
      reevaluate();
      client.resetStore();
      router.push("/");
    },
    onError: (error) => {
      const [isValidationError, errors] = parseValidationErrors(
        error,
        "loginUser.input",
      );

      if (isValidationError) {
        Object.entries(errors).forEach(([key, message]) => {
          setError(key as keyof FormValues, { type: "value", message });
        });
        return;
      }

      const [isSimpleError, message] = parseSimpleError(error);
      if (isSimpleError) {
        setErrorMessage(message);
        return;
      }

      setErrorMessage("An unexpected error occurred. Please try again later.");
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    setErrorMessage(null);
    mutate({ variables: { input: data } });
  });

  const formHasErrors = Object.keys(errors).length > 0;

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
        as="form"
        onSubmit={onSubmit}
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
        <Stack gap={3}>
          <FormAlert errorMessage={errorMessage} />
          <Input
            label="Username or email"
            invalid={!!errors.identifier}
            error={errors.identifier?.message}
            {...register("identifier")}
          />
          <Input
            type="password"
            label="Password"
            invalid={!!errors.password}
            error={errors.password?.message}
            {...register("password")}
          />
        </Stack>
        <Stack mt={4} align="center">
          <Button
            disabled={formHasErrors}
            loading={loading}
            bg={{ base: "brand.primary", _hover: "brand.secondary" }}
            size="sm"
            w="full"
            type="submit"
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
