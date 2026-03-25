import { useState, useEffect } from "react";

type Props = {
  text: string;
};

export default function GbAnimation({ text }: Props) {
  const letters = text.split("");

  const [visibleCount, setVisibleCount] = useState(0);

  let visibleLetters = letters.slice(0, visibleCount);
  let invisibleLetters = letters.slice(visibleCount);
  const spansVisible = visibleLetters.map((letter, index) => (
    <span className="gb-char" key={`${index}`}>
      {letter === " " ? "\u00A0" : letter}
    </span>
  ));
  const spansInvisible = invisibleLetters.map((letter, index) => (
    <span className="gb-char-invisible" key={`${index}`}>
      {letter === " " ? "\u00A0" : letter}
    </span>
  ));

  useEffect(() => {
    if (invisibleLetters.length > 0) {
      const timer = setTimeout(() => {
        setVisibleCount((count) => count + 1);
      }, 70);
      return () => clearTimeout(timer);
    }
  }, [visibleCount, letters.length]);

  return (
    <div className="gb-animation">
      {spansVisible}
      {spansInvisible}
    </div>
  );
}
