import {
  Box,
  ButtonGroup,
  HStack,
  IconButton,
  PaginationItems,
  PaginationNextTrigger,
  PaginationPageText,
  PaginationPrevTrigger,
  PaginationRoot,
} from "@chakra-ui/react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

export default function Pagination() {
  return (
    <PaginationRoot count={200} pageSize={20} defaultPage={1}>
      <ButtonGroup
        display={{ mdDown: "none" }}
        pos="relative"
        variant="ghost"
        size="lg"
      >
        <PaginationPrevTrigger asChild>
          <IconButton>
            <LuChevronLeft />
          </IconButton>
        </PaginationPrevTrigger>
        <PaginationItems
          render={(page) => (
            <IconButton
              top={0}
              bottom={0}
              position="static"
              variant={{ base: "ghost", _selected: "outline" }}
            >
              {page.value}
            </IconButton>
          )}
        />
        <PaginationNextTrigger asChild>
          <IconButton>
            <LuChevronRight />
          </IconButton>
        </PaginationNextTrigger>
      </ButtonGroup>
      <ButtonGroup
        display={{ md: "none" }}
        pos="relative"
        variant="ghost"
        size="lg"
      >
        <PaginationPrevTrigger asChild>
          <IconButton>
            <LuChevronLeft />
          </IconButton>
        </PaginationPrevTrigger>
        <PaginationPageText />
        <PaginationNextTrigger asChild>
          <IconButton>
            <LuChevronRight />
          </IconButton>
        </PaginationNextTrigger>
      </ButtonGroup>
    </PaginationRoot>
  );
}
