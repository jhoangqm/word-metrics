import { useState } from "react";
import Warning from "./Warning";

export default function TextArea({ text, setText }) {
  const [warningText, setWarningText] = useState("");

  const dangerousPatterns = [
    {
      pattern: /<script.*?>.*?<\/script>/gi,
      message: "Script tags are not allowed!",
    },
    {
      pattern: /javascript:/gi,
      message: "JavaScript protocol is not allowed!",
    },
    {
      pattern: /on\w+="[^"]*"/gi,
      message: "HTML event handlers are not allowed!",
    },
    {
      pattern: /<iframe.*?>.*?<\/iframe>/gi,
      message: "IFrames are not allowed!",
    },
    {
      pattern: /<style.*?>.*?<\/style>/gi,
      message: "Style tags are not allowed!",
    },
    { pattern: /<link.*?>/gi, message: "Link tags are not allowed!" },
    { pattern: /<meta.*?>/gi, message: "Meta tags are not allowed!" },
    {
      pattern: /<object.*?>.*?<\/object>/gi,
      message: "Object tags are not allowed!",
    },
    {
      pattern: /<embed.*?>.*?<\/embed>/gi,
      message: "Embed tags are not allowed!",
    },
    {
      pattern: /data:text\/html/gi,
      message: "HTML data URLs are not allowed!",
    },
    {
      pattern: /&#[xX]?[0-9a-fA-F]+;/g,
      message: "HTML entities are not allowed!",
    },
  ];

  const handleChange = (e) => {
    let newText = e.target.value;
    let warning = "";

    // Check for dangerous patterns
    for (const { pattern, message } of dangerousPatterns) {
      if (pattern.test(newText)) {
        warning = message;
        newText = newText.replace(pattern, "");
        break; // Show only one warning at a time
      } else {
        warning = "";
      }
    }

    // Additional length check
    if (newText.length > 10000) {
      warning = "Text too long! Maximum 10,000 characters allowed.";
      newText = newText.substring(0, 10000);
    }

    // Update state
    setWarningText(warning);
    setText(newText);
  };

  return (
    <div className="textarea">
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Enter your text here.."
        spellCheck="false"
        maxLength={10000}
      />
      {warningText && <Warning warningText={warningText} />}
    </div>
  );
}
