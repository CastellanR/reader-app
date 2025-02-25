import { Books, Compass } from "@phosphor-icons/react";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
// import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="flex flex-col grow h-screen overflow-hidden">
        <Outlet />
      </div>
      {/* <TanStackRouterDevtools /> */}
      <nav className="p-3 flex justify-around border-t border-gray-300 fixed bottom-0 left-0 w-full z-999 bg-white">
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
    </>
  ),
});
