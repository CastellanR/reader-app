import { Books, Compass } from "@phosphor-icons/react";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
// import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <hr />
      <Outlet />
      {/* <TanStackRouterDevtools /> */}
      <div className="p-3 flex justify-around border-t border-gray-300 absolute bottom-0 left-0 w-full">
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
      </div>
    </>
  ),
});
