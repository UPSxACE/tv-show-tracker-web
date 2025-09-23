"use client";

import {
  Button,
  CloseButton,
  DialogActionTrigger,
  DialogBackdrop,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogPositioner,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
  Portal,
} from "@chakra-ui/react";
import type { ReactNode } from "react";
import { Prose } from "../cui/prose";

export default function LegalityModal({
  title,
  content,
  children,
}: {
  title: string;
  content: string;
  children: ReactNode;
}) {
  return (
    <DialogRoot size="xl">
      <DialogTrigger asChild>{children}</DialogTrigger>
      <Portal>
        <DialogBackdrop />
        <DialogPositioner>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{title}</DialogTitle>
            </DialogHeader>
            <DialogBody>
              <Prose
                width="full"
                maxW="unset"
                // biome-ignore lint/security/noDangerouslySetInnerHtml: safe html
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </DialogBody>
            <DialogFooter>
              <DialogActionTrigger asChild>
                <Button>Understood</Button>
              </DialogActionTrigger>
            </DialogFooter>
            <DialogCloseTrigger asChild>
              <CloseButton size="sm" />
            </DialogCloseTrigger>
          </DialogContent>
        </DialogPositioner>
      </Portal>
    </DialogRoot>
  );
}
