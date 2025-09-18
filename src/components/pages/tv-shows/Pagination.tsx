import {
  ButtonGroup,
  IconButton,
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from "@chakra-ui/react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

export default function Pagination() {
  return (
    <PaginationRoot count={20} pageSize={2} defaultPage={1}>
      <ButtonGroup variant="ghost" size="lg">
        <PaginationPrevTrigger asChild>
          <IconButton>
            <LuChevronLeft />
          </IconButton>
        </PaginationPrevTrigger>

        <PaginationItems
          render={(page) => (
            <IconButton variant={{ base: "ghost", _selected: "outline" }}>
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
    </PaginationRoot>
  );
}
