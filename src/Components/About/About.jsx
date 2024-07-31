import React, { useState } from "react";
import './About.css'; // Assuming you have some CSS file for styling

function About() {
    const text1 = "Textutils gives you a way to analyze your text quickly and efficiently. It lets you count words, count characters, or estimate the reading time required. It has both light and dark mode for better compatibility.";
    const text2 = "TextUtils is a free character counter tool that provides instant character count and word count statistics for a given text. TextUtils reports the number of words and characters. Thus, it is suitable for writing text with word/character limits.";
    const text3 = "This word counter software works in any web browser such as Chrome, Firefox, Internet Explorer, Safari, Opera, etc.";

    const [content, setContent] = useState("");

    return (
        <>
            <div className="about">
                <h2>About App</h2>
                <div className="aboutContent">
                   
                   <div className="Btns">
                        <button onClick={() => setContent(text1)}>
                            Analyze your text
                        </button>
        
                        <button onClick={() => setContent(text2)}>
                            Free to use
                        </button>
                    
                        <button onClick={() => setContent(text3)}>
                            Browser Compatible
                        </button>
                    </div>
                    <div className="content">
                        <p>{content}</p>
                    </div>
                </div>
                
            </div>
        </>
    );
}

export default About;
