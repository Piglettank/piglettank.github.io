import { useState, useEffect } from "react";

type Props = {
  text: string;
};

export default function GbAnimation({ text }: Props) {
  const letters = text.split("");
  const spans = letters.map((letter, index) => (
    <span className="gb-char" key={`${index}`}>
      {letter === " " ? "\u00A0" : letter}
    </span>
  ));

  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (visibleCount < spans.length) {
      const timer = setTimeout(() => {
        setVisibleCount((count) => count + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [visibleCount, spans.length]);

  const visibleSpans = spans.slice(0, visibleCount);

  return <div className="gb-animation">{visibleSpans}</div>;
}
