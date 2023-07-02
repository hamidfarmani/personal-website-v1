import { ColorScheme } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import React, { useRef, useEffect } from "react";

const MouseHighlight: React.FC = () => {
  const circleRef = useRef<HTMLDivElement>(null);
  const [colorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "dark",
    getInitialValueInEffect: true,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const circle = circleRef.current;
      if (circle) {
        const circleSize = circle.getBoundingClientRect().width;
        const circleHalfSize = circleSize / 2;
        const circleX = e.clientX - circleHalfSize;
        const circleY = e.clientY - circleHalfSize;

        circle.style.top = `${circleY}px`;
        circle.style.left = `${circleX}px`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  let highlightColor;
  if (colorScheme === "dark") {
    highlightColor = "rgba(53, 99, 143, 0.05)";
  } else {
    highlightColor = "rgba(135, 206, 250, 0.1)";
  }

  return (
    <div
      className="mouse-highlight"
      ref={circleRef}
      style={{
        background: `radial-gradient(circle at center, ${highlightColor}, rgba(0, 0, 0, 0) 70%)`,
      }}
    ></div>
  );
};

export default MouseHighlight;
