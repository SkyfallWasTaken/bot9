import React, { useState, useEffect } from "react";
import "./Typing.css"; // Make sure to import the CSS file

function Typing({ text, typingSpeed = 108, deletingSpeed = 50 }) {
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const handleTyping = () => {
            if (!isDeleting) {
                if (displayText.length < text[index].length) {
                    setDisplayText((prev) => prev + text[index].charAt(prev.length));
                } else {
                    setIsDeleting(true);
                }
            } else {
                if (displayText.length > 0) {
                    setDisplayText((prev) => prev.slice(0, prev.length - 1));
                } else {
                    setIsDeleting(false);
                    setIndex((prev) => (prev + 1) % text.length);
                }
            }
        };

        const timeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, index, text, typingSpeed, deletingSpeed]);

    return (
        <div className="typing-container">
            <div className="name">Naga Chaitanya</div>
            <div className="typing-effect">
                {displayText}
                <span className="caret"></span>
            </div>
        </div>
    );
}

export default Typing;