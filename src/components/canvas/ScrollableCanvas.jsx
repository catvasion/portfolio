import { useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";

export const ScrollableCanvas = ({ children, ...props }) => {
  // const { gl } = useThree();
  // const canvasRef = useRef(null);
  // useEffect(() => {
  //   const canvas = canvasRef.current;
  //   const disableCanvasInteraction = () => {
  //     canvas.style.pointerEvents = "none";
  //   };
  //   const enableCanvasInteraction = () => {
  //     canvas.style.pointerEvents = "auto";
  //   };
  //   const handleScroll = () => {
  //     disableCanvasInteraction();
  //     // Enable canvas interaction after a short delay
  //     setTimeout(enableCanvasInteraction, 300);
  //   };
  //   // Add scroll event listener
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     // Clean up event listener
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  // return (
  //   <canvas ref={canvasRef} {...props}>
  //     {children}
  //   </canvas>
  // );
};

export default ScrollableCanvas;
