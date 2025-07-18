import React, { useEffect, useRef, useState } from "react";

interface VideoTrapProps {
  sectionRef: React.RefObject<HTMLElement>;
  src: string;
  width?: string;
  height?: string;
  opacity?: number;
  trapOffset?: number;
}

const VideoTrap: React.FC<VideoTrapProps> = ({
  sectionRef,
  src,
  width = "220px",
  height = "220px",
  opacity = 0.85,
  trapOffset = 250,
}) => {
  const [isTrapped, setIsTrapped] = useState<null | "top" | "bottom">(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !videoRef.current) return;
      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      if (rect.top >= trapOffset) {
        setIsTrapped("top");
      } else if (rect.bottom <= vh - trapOffset) {
        setIsTrapped("bottom");
      } else {
        setIsTrapped(null);
      }
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [sectionRef, trapOffset]);

  let videoStyle: React.CSSProperties;
  if (isTrapped === "top") {
    videoStyle = {
      position: "absolute" as const,
      top: 0,
      left: "50%",
      transform: "translateX(-50%)",
      width,
      height,
      pointerEvents: "none" as const,
      opacity,
    };
  } else if (isTrapped === "bottom") {
    videoStyle = {
      position: "absolute" as const,
      bottom: 0,
      left: "50%",
      transform: "translateX(-50%)",
      width,
      height,
      pointerEvents: "none" as const,
      opacity,
    };
  } else {
    videoStyle = {
      position: "fixed" as const,
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width,
      height,
      pointerEvents: "none" as const,
      opacity,
    };
  }

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay
      loop
      muted
      playsInline
      style={videoStyle}
    />
  );
};

export default VideoTrap; 