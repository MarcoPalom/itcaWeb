import { useEffect, RefObject } from "react";

const useButterflySpeed = (
  butterflyRef1: RefObject<HTMLDivElement>,
  butterflyRef2: RefObject<HTMLDivElement>,
  butterflyRef3: RefObject<HTMLDivElement>
) => {
  useEffect(() => {
    if (butterflyRef1.current) butterflyRef1.current.setSpeed(0.2);
    if (butterflyRef2.current) butterflyRef2.current.setSpeed(0.2);
    if (butterflyRef3.current) butterflyRef3.current.setSpeed(0.2);
  }, [butterflyRef1, butterflyRef2, butterflyRef3]);
};

export default useButterflySpeed; 