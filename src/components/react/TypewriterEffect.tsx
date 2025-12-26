import React, { useState, useEffect } from "react";

interface TypewriterProps {
    words: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseDuration?: number;
}

export const TypewriterEffect = ({
    words,
    typingSpeed = 150,
    deletingSpeed = 100,
    pauseDuration = 2000,
}: TypewriterProps) => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [blink, setBlink] = useState(true);

    // Blinking cursor effect
    useEffect(() => {
        const timeout2 = setTimeout(() => {
            setBlink((prev) => !prev);
        }, 500);
        return () => clearTimeout(timeout2);
    }, [blink]);

    useEffect(() => {
        if (index === words.length) {
            // Reset to start
            setIndex(0);
            return;
        }

        if (subIndex === words[index].length + 1 && !reverse) {
            // Word finished typing, wait then delete
            const timeout = setTimeout(() => {
                setReverse(true);
            }, pauseDuration);
            return () => clearTimeout(timeout);
        }

        if (subIndex === 0 && reverse) {
            // Word finished deleting, move to next
            setReverse(false);
            setIndex((prev) => (prev + 1) % words.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, reverse ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, words, typingSpeed, deletingSpeed, pauseDuration]);

    return (
        <span className="inline-block min-w-[4ch] text-left">
            {words[index].substring(0, subIndex)}
            <span className={`ml-1 inline-block h-[0.8em] w-[4px] bg-primary align-middle ${blink ? 'opacity-100' : 'opacity-0'}`}></span>
        </span>
    );
};