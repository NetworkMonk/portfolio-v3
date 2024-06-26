"use client";

import { useInView } from "react-intersection-observer";

export default function InView(props) {
  const { children } = props;
  const { ref, inView, entry } = useInView({ threshold: 0 });

  return (
    <div ref={ref} className={`${inView ? "in-view" : ""}`}>
      {children}
    </div>
  );
}
