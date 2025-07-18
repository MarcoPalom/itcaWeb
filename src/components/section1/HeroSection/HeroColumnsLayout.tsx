import React from "react";
import { AnimationControls } from "framer-motion";
import HeroSideColumn from "./HeroSideColumn";

interface HeroColumnsLayoutProps {
  leftControls: AnimationControls;
  rightControls: AnimationControls;
  IMAGE: string;
  pan: { x: number; y: number };
  leftRightY: number;
}

const HeroColumnsLayout: React.FC<HeroColumnsLayoutProps> = ({
  leftControls,
  rightControls,
  IMAGE,
  pan,
  leftRightY,
}) => (
  <div className="absolute inset-0 flex items-stretch justify-center gap-4 bg-neutral-900 z-0 p-4">
    <HeroSideColumn side="left" controls={leftControls} IMAGE={IMAGE} pan={pan} leftRightY={leftRightY} />
    <div className="flex-1" style={{ pointerEvents: "none" }} />
    <HeroSideColumn side="right" controls={rightControls} IMAGE={IMAGE} pan={pan} leftRightY={leftRightY} />
  </div>
);

export default HeroColumnsLayout; 