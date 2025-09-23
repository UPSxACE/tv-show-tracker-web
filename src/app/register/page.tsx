"use client";
import { useMutation } from "@apollo/client/react";
import {
  Button,
  Center,
  CheckboxControl,
  CheckboxHiddenInput,
  CheckboxIndicator,
  CheckboxLabel,
  CheckboxRoot,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm, type Validate } from "react-hook-form";
import type {
  RegisterUserMutation,
  RegisterUserMutationVariables,
} from "@/__generated__/graphql";
import { toaster } from "@/components/cui/toaster";
import LegalityModal from "@/components/legal/LegalityModal";
import RegisterUser from "@/components/pages/register/mutation";
import FormAlert from "@/components/ui/forms/FormAlert";
import Input from "@/components/ui/forms/Input";
import Logo from "@/components/ui/Logo";
import { NAVBAR_HEIGHT } from "@/components/ui/layout/constants";
import parseSimpleError from "@/lib/utils/graphql/parseSimpleError";
import parseValidationErrors from "@/lib/utils/graphql/parseValidationErrors";
import termsAndConditions from "../legal/terms-and-conditions";

type FormValues = {
  username: string;
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
};

export default function Register() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [legalCheck, setLegalCheck] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormValues>();

  const router = useRouter();

  const [mutate, { loading }] = useMutation<
    RegisterUserMutation,
    RegisterUserMutationVariables
  >(RegisterUser, {
    onCompleted: () => {
      toaster.success({
        title: "Your account has been created successfully.",
        duration: 4000,
      });
      router.push("/login");
    },
    onError: (error) => {
      const [isValidationError, errors] = parseValidationErrors(
        error,
        "registerUser.input",
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

  const onSubmit = handleSubmit(async ({ confirmPassword, ...data }) => {
    setErrorMessage(null);
    mutate({ variables: { input: data } });
  });

  const formHasErrors = Object.keys(errors).length > 0;

  const validateConfirmPassword: Validate<string, FormValues> = (
    value,
    formValues,
  ) =>
    value === formValues.password ||
    "Passwords do not match. Please make sure both fields are the same.";

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
            label="Username"
            invalid={!!errors.username}
            error={errors.username?.message}
            {...register("username")}
          />
          <Input
            type="email"
            label="Email"
            invalid={!!errors.email}
            error={errors.email?.message}
            {...register("email")}
          />
          <Input
            type="password"
            label="Password"
            invalid={!!errors.password}
            error={errors.password?.message}
            {...register("password")}
          />
          <Input
            type="password"
            label="Confirm password"
            invalid={!!errors.confirmPassword}
            error={errors.confirmPassword?.message}
            {...register("confirmPassword", {
              validate: validateConfirmPassword,
            })}
          />
        </Stack>
        <CheckboxRoot
          checked={legalCheck}
          onChange={() => setLegalCheck((c) => !c)}
          mt={2}
        >
          <CheckboxHiddenInput />
          <CheckboxControl>
            <CheckboxIndicator />
          </CheckboxControl>
          <CheckboxLabel>
            <Text as="span" textStyle="sm" color="gray.700">
              I agree to the{" "}
              <LegalityModal
                title="Terms and Conditions"
                content={termsAndConditions}
              >
                <Button
                  color="gray.700"
                  variant="plain"
                  p={0}
                  textStyle="sm"
                  verticalAlign="baseline"
                  minH="0"
                  h="auto"
                >
                  terms and conditions
                </Button>
              </LegalityModal>
              .
            </Text>
          </CheckboxLabel>
        </CheckboxRoot>
        <Stack mt={2.5} align="center" gap={0}>
          <Button
            disabled={formHasErrors || !legalCheck}
            loading={loading}
            bg={{ base: "brand.primary", _hover: "brand.secondary" }}
            size="sm"
            w="full"
            type="submit"
          >
            Register
          </Button>

          <Text
            asChild
            textAlign="center"
            color="gray.700"
            textStyle="sm"
            textDecoration={{ _hover: "underline" }}
            mt={2}
          >
            <Link href="/login">Already have an account? Sign in</Link>
          </Text>
        </Stack>
      </Stack>
    </Center>
  );
}
