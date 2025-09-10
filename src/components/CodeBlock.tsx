import React, { useState } from "react";
import { Clipboard, Check } from "lucide-react";

interface CodeBlockProps {
  children: React.ReactNode;
  className?: string;
}

export default function CodeBlock({ children, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const language = className?.replace("language-", "") || "text";
  const code = String(children).trim();
  const lines = code.split("\n");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <div className="relative my-8 border border-slate-700 rounded-lg overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center bg-slate-800 text-slate-200 px-4 py-2 text-xs font-mono">
        <span className="uppercase">{language}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 text-xs hover:text-cyan-400 transition"
        >
          {copied ? (
            <>
              <Check size={14} /> Copied
            </>
          ) : (
            <>
              <Clipboard size={14} /> Copy
            </>
          )}
        </button>
      </div>

      {/* Code with line numbers */}
      <pre className="bg-slate-900 text-slate-100 text-sm p-4 overflow-x-auto">
        <code className={`grid grid-cols-[auto_1fr] gap-4 ${className}`}>
          {lines.map((line, i) => (
            <React.Fragment key={i}>
              <span className="text-slate-600 select-none">{i + 1}</span>
              <span>{line || " "}</span>
            </React.Fragment>
          ))}
        </code>
      </pre>
    </div>
  );
}