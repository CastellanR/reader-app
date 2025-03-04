import { Books, Compass } from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";
import { FC } from "react";

export const Footer: FC = () => (
  <nav className="p-3 flex flex-row items-center justify-around border-t border-gray-300 fixed bottom-0 left-0 w-full h-20 z-9 bg-white">
    <Link to="/">
      {({ isActive }) => {
        return (
          <div className="flex flex-col gap-2 items-center">
            <Compass weight={isActive ? "fill" : "regular"} size={20} />
            Discover
          </div>
        );
      }}
    </Link>
    <Link to="/library" className="flex flex-col gap-2">
      {({ isActive }) => {
        return (
          <div className="flex flex-col gap-2 items-center">
            <Books weight={isActive ? "fill" : "regular"} size={20} />
            My library
          </div>
        );
      }}
    </Link>
  </nav>
);
