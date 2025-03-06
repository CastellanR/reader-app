import { Footer } from "@/components/common/Footer";
import { Header } from "@/components/common/Header";
import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-col flex-grow pb-20 no-scrollbar">
        <Outlet />
      </div>
      <Footer />
    </div>
  ),
});
