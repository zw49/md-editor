"use client";
import { FormEventHandler, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function DocumentEditor() {
  const [text, setText] = useState(
    "# Heading\n## Subheading\nThis is a paragraph with **bold text**."
  );
  const handleChange: React.UIEventHandler<HTMLDivElement> = (e) => {
    setText((e.target as HTMLDivElement).innerHTML);
  };

  return (
    <div
      contentEditable="true"
      onInput={handleChange}
      className="h-full w-full border-none outline-none"
    >
      <ReactMarkdown>{text}</ReactMarkdown>
    </div>
  );
}
