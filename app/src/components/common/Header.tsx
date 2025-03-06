import { Input } from "@heroui/input";
import { Modal, ModalContent, useDisclosure } from "@heroui/modal";
import { ArrowLeft, MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter, useRouterState } from "@tanstack/react-router";
import { FC, useEffect, useState } from "react";
import { SearchModal } from "../discover/search/SearchModal";

export const Header: FC = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const routerState = useRouterState();
  const router = useRouter();
  const [showBackArrow, setShowBackArrow] = useState(false);

  useEffect(() => {
    setShowBackArrow(
      routerState.location.pathname !== "/" &&
        routerState.location.pathname !== "/library"
    );
  }, [routerState.location.pathname]);

  const handleClickOnInput = () => {
    onOpen();
  };

  const handleClickOnBackArrow = () => router.history.back();

  return (
    <header className="flex flex-row justify-start items-center gap-12 p-6">
      {showBackArrow ? (
        <ArrowLeft
          size={24}
          onClick={handleClickOnBackArrow}
          className="cursor-pointer"
        />
      ) : (
        <h1 className="font-bold">Reader App</h1>
      )}
      <div className="flex flex-grow max-w-sm">
        <Input
          size="md"
          variant={"bordered"}
          radius={"full"}
          endContent={<MagnifyingGlass size={20} />}
          label=""
          placeholder="Search your book"
          type="text"
          classNames={{ mainWrapper: "max-w-sm" }}
          onClick={handleClickOnInput}
        />
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="full">
        <ModalContent>{() => <SearchModal />}</ModalContent>
      </Modal>
    </header>
  );
};
