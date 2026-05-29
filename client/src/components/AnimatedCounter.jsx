import { useEffect, useState } from "react";

export default function AnimatedCounter({ value }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const step = value / 40;

    const interval = setInterval(() => {
      start += step;

      if (start >= value) {
        start = value;
        clearInterval(interval);
      }

      setCount(Math.floor(start));
    }, 20);

    return () => clearInterval(interval);
  }, [value]);

  return <span>{count}</span>;
}