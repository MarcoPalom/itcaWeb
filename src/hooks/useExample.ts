import { useState } from "react";

export function useExample() {
  const [value, setValue] = useState(0);
  const increment = () => setValue((v) => v + 1);
  return { value, increment };
} 