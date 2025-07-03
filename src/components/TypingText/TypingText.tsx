import React from "react";
import { useState, useEffect } from "react";

type TypingTextProps = {
  textToType: string;
  typingSpeed?: number;
  erasingSpeed?: number;
  delayBeforeTyping?: number;
  delayBeforeErase?: number;
};

const TypingText: React.FC<TypingTextProps> = ({
  textToType,
  typingSpeed = 150,
  erasingSpeed = 100,
  delayBeforeErase = 1500,
  delayBeforeTyping = 500,
}) => {
  const [text, setText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() =>{
    const cursorInterval = setInterval(() =>{
        setCursorVisible((prev) => !prev);
    }, 700)

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && charIndex < textToType.length) {
      timeout = setTimeout(() => {
        setText(textToType.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setText(textToType.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, erasingSpeed);
    } else {
      timeout = setTimeout(
        () => {
          setIsDeleting(!isDeleting);
        },
        isDeleting ? delayBeforeTyping : delayBeforeErase
      );
    }

    return () => clearTimeout(timeout);
  }, [
    charIndex,
    isDeleting,
    textToType,
    typingSpeed,
    erasingSpeed,
    delayBeforeErase,
    delayBeforeTyping,
  ]);

  return <span>{text}
  <span style={{opacity: cursorVisible ? 1 : 0}}>|</span>
  </span>;
};
export default TypingText;
