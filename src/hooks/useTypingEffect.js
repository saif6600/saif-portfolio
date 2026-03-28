import { useState, useEffect } from 'react';

export const useTypingEffect = (words, speed = 100, deleteSpeed = 60, pause = 2000) => {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (!isDeleting && displayText === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setWordIndex(i => (i + 1) % words.length);
    } else {
      const nextText = isDeleting
        ? currentWord.substring(0, displayText.length - 1)
        : currentWord.substring(0, displayText.length + 1);
      timeout = setTimeout(() => setDisplayText(nextText), isDeleting ? deleteSpeed : speed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, words, speed, deleteSpeed, pause]);

  return displayText;
};
