import { useEffect, useState } from "react";

function useResponsiveSlideWidth() {
  const [slideWidth, setSlideWidth] = useState(60);

  useEffect(() => {
    const update = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setSlideWidth(100);   // Mobile
      } else if (width < 1024) {
        setSlideWidth(85);   // Tablet
      } else if (width < 1080) {
        setSlideWidth(75);   // Desktop
      } else {
        setSlideWidth(70);   // Large desktop
      }
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return slideWidth;
}

export default useResponsiveSlideWidth;