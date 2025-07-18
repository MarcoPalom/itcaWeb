import { useEffect, useState, useRef } from "react";

export default function useTypewriterText(targetText: string, speed: number = 30) {
  const [displayed, setDisplayed] = useState("");
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setDisplayed("");
    if (!targetText) return;
    let i = 0;
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setDisplayed((prev) => prev + targetText[i]);
      i++;
      if (i >= targetText.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
    }, speed);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [targetText, speed]);

  return displayed;
} 