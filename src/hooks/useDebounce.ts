import {useEffect, useState} from "react";

export const useDebounce = <T>(value: T, delay: number = 200) => {
  const [debouncedValue, setDebouncedValue] = useState<T>()
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value)
    }, delay);
    return () => clearTimeout(timeout);
  }, [delay, value]);

  return debouncedValue
}