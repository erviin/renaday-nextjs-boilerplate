import { useState, useEffect } from 'react';

export default function useTypingEffect(text: string, typingSpeed: number = 150, erasingSpeed: number = 75, pauseDuration: number = 2000) {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        if (isTyping) {
            if (index < text.length) {
                timeout = setTimeout(() => {
                    setDisplayedText(prev => prev + text[index]);
                    setIndex(prev => prev + 1);
                }, typingSpeed);
            } else {
                timeout = setTimeout(() => setIsTyping(false), pauseDuration);
            }
        } else {
            if (index > 0) {
                timeout = setTimeout(() => {
                    setDisplayedText(prev => prev.slice(0, -1));
                    setIndex(prev => prev - 1);
                }, erasingSpeed);
            } else {
                timeout = setTimeout(() => setIsTyping(true), pauseDuration);
            }
        }

        return () => clearTimeout(timeout);
    }, [index, isTyping, text, typingSpeed, erasingSpeed, pauseDuration]);

    return displayedText;
}

