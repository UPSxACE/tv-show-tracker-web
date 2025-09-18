import { Button, type ButtonProps } from "@chakra-ui/react";
import { forwardRef, type Ref } from "react";

function CtaButton(props: ButtonProps, ref: Ref<HTMLButtonElement>) {
  return (
    <Button
      ref={ref}
      bg={{
        base: "brand.cta",
        _hover: "brand.ctaHover",
      }}
      {...props}
    />
  );
}

export default forwardRef(CtaButton);
