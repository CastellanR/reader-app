import React from "react";

export const useWindowWidth = () => {
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", onResize, {
      capture: false,
      passive: true,
    });

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return width;
};
