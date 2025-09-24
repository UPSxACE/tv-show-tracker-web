import { CombinedGraphQLErrors, type ErrorLike } from "@apollo/client";
import z from "zod";

export default function parseSimpleError(
  error: ErrorLike,
): simpleErrorParseResult {
  if (!(error instanceof CombinedGraphQLErrors)) {
    return [false, ""];
  }

  const simpleError = error.errors.find((e) => {
    const { success } = simpleErrorSchema.safeParse(e);
    return success;
  }) as z.infer<typeof simpleErrorSchema> | undefined;

  if (!simpleError) {
    return [false, ""];
  }

  const { message } = simpleErrorSchema.parse(simpleError);

  return [true, message];
}

const simpleErrorSchema = z.object({
  extensions: z.object({
    classification: z.enum(["BAD_REQUEST", "FORBIDDEN", "NOT_FOUND"]),
  }),
  message: z.string(),
});

type simpleErrorParseResult = [boolean, string];
