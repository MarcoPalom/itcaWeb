import { useEffect, RefObject } from "react";

const useButterflySpeed = (
  butterflyRef1: RefObject<any>,
  butterflyRef2: RefObject<any>,
  butterflyRef3: RefObject<any>
) => {
  useEffect(() => {
    if (butterflyRef1.current) butterflyRef1.current.setSpeed(0.2);
    if (butterflyRef2.current) butterflyRef2.current.setSpeed(0.2);
    if (butterflyRef3.current) butterflyRef3.current.setSpeed(0.2);
  }, [butterflyRef1, butterflyRef2, butterflyRef3]);
};

export default useButterflySpeed; 