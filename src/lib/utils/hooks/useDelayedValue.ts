import { useEffect, useState } from "react";

function useDelayedValue<T>(value: T, delay: number) {
  const [delayedValue, setDelayedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return delayedValue;
}

export default useDelayedValue;
