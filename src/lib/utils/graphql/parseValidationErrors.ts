import { CombinedGraphQLErrors, type ErrorLike } from "@apollo/client";
import z from "zod";

export default function parseValidationErrors(
  error: ErrorLike,
  inputPath: string,
): ValidationErrorsParseResult {
  if (!(error instanceof CombinedGraphQLErrors)) {
    return [false, {}];
  }

  const validationFailedError = error.errors.find((e) => {
    const { success } = validationFailedErrorSchema.safeParse(e);
    return success;
  }) as z.infer<typeof validationFailedErrorSchema> | undefined;

  if (!validationFailedError) {
    return [false, {}];
  }

  const {
    extensions: { validationErrors },
  } = validationFailedErrorSchema.parse(validationFailedError);

  const errors: Record<string, string> = {};
  for (const err of validationErrors) {
    errors[err.field.replace(`${inputPath}.`, "")] = err.message;
  }

  return [true, errors];
}

const validationFailedErrorSchema = z.object({
  extensions: z.object({
    validationErrors: z.array(
      z.object({
        message: z.string(),
        field: z.string(),
      }),
    ),
  }),
});

type ValidationErrorsParseResult = [boolean, Record<string, string>];
