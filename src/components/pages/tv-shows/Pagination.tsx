"use client";
import {
  ButtonGroup,
  IconButton,
  PaginationItems,
  PaginationNextTrigger,
  PaginationPageText,
  PaginationPrevTrigger,
  PaginationRoot,
} from "@chakra-ui/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

export default function Pagination({
  page,
  total,
  pageSize,
}: {
  page: number | null;
  total: number;
  pageSize: number;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const createPageLink = useCallback(
    (page: number) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("page", page.toString());

      return `${pathname}?${params.toString()}`;
    },
    [searchParams, pathname],
  );

  const onPageChange = ({ page }: { page: number }) => {
    router.push(createPageLink(page));
  };

  return (
    <PaginationRoot
      page={page ?? 1}
      onPageChange={onPageChange}
      count={total}
      pageSize={pageSize}
      defaultPage={1}
    >
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
