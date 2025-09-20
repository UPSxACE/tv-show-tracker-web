import type { CodegenConfig } from "@graphql-codegen/cli";
import { loadEnvConfig } from '@next/env';

loadEnvConfig(process.cwd())


const config: CodegenConfig = {
    schema: `${process.env.NEXT_PUBLIC_BACKEND_URL}/graphql`,
    documents: ["src/**/*.tsx", "src/**/*.ts"],
    generates: {
        "./src/__generated__/": {
            preset: "client",
            presetConfig: {
                gqlTagName: "gql",
            },
        },
    },
    ignoreNoDocuments: true,
};

export default config;