"use client";
import { useApolloClient, useMutation } from "@apollo/client/react";
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
  FieldLabel,
  FieldRoot,
  Input,
  Portal,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import type {
  DeleteAccountMutation,
  DeleteAccountMutationVariables,
} from "@/__generated__/graphql";
import DeleteAccount from "@/components/pages/profile/settings/gql/mutation";
import { useSession } from "@/components/session/SessionContext";

export default function DeleteAccountButton() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const { reevaluate } = useSession();
  const { profile } = useSession();
  const client = useApolloClient();
  const [deleteAccount, { loading }] = useMutation<
    DeleteAccountMutation,
    DeleteAccountMutationVariables
  >(DeleteAccount, {
    onCompleted: () => {
      reevaluate();
      client.resetStore();
    },
  });

  const disableSave = text !== profile?.username;

  const onClose = () => setText("");
  const onConfirm = () => deleteAccount();

  return (
    <DialogRoot
      onExitComplete={onClose}
      open={open}
      onOpenChange={(e) => setOpen(e.open)}
      closeOnEscape={!loading}
      closeOnInteractOutside={!loading}
    >
      <DialogTrigger asChild>
        <Button variant="surface" w="fit">
          Delete Account
        </Button>
      </DialogTrigger>
      <Portal>
        <DialogBackdrop />
        <DialogPositioner>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Delete Account</DialogTitle>
            </DialogHeader>
            <DialogBody>
              <Text>
                Are you sure you want to permanently delete your account? This
                action cannot be undone and will remove all your data.
              </Text>
              <FieldRoot>
                <FieldLabel mt={5}>Type your username to confirm:</FieldLabel>
                <Input value={text} onChange={(e) => setText(e.target.value)} />
              </FieldRoot>
            </DialogBody>
            <DialogFooter>
              <DialogActionTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </DialogActionTrigger>
              <Button
                colorPalette="red"
                disabled={disableSave}
                loading={loading}
                onClick={onConfirm}
              >
                Delete
              </Button>
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
