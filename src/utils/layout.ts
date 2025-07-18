export function getInitialCenterWidth(windowWidth: number): number {
  return windowWidth * 0.333333;
}

export function getInitialCenterHeight(windowHeight: number): number {
  return windowHeight - 32;
}

export function getCenterWidth(scrollProgress: number, initial: number, full: number): number {
  return scrollProgress < 1 ? initial : full;
}

export function getCenterHeight(scrollProgress: number, initial: number, full: number): number {
  return scrollProgress < 1 ? initial : full;
}

export function getLeftRightY(scrollProgress: number, maxY: number): number {
  return -scrollProgress * maxY;
}

export function getCircleProgress(scrollProgress: number): number {
  return Math.min(scrollProgress / 0.5, 1);
} 