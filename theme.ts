import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
    theme: {
        tokens: {
            colors: {
                brand: {
                    cta: { value: "#f05647" },
                    ctaHover: { value: "#a73429" },
                    primary: { value: "#3e3d43" },
                    secondary: { value: "#333237" },
                    thirtiary: { value: "#2d2c30" }
                },
                background: {
                    white: { value: "white" },
                    gray: { value: "#f5f5f5" }
                }
            },
        },
    },
})

const system = createSystem(defaultConfig, config)

export default system;