"use client";
import { FormEventHandler, useState } from "react";
import Markdown from "react-markdown";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./ui/resizable";
import { Textarea } from "./ui/textarea";
import {
  TypographyBlockquote,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyInlineCode,
  TypographyP,
  TypographyTD,
  TypographyTH,
  TypographyTR,
  TypographyUL,
} from "./ui/typography";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupTextarea,
} from "./ui/input-group";
import { Code, CopyIcon, FileText, RefreshCwIcon } from "lucide-react";
import remarkGfm from "remark-gfm";

interface DocumentEditorProps {
  id: string | null;
  content: { title: string; content: string };
  onChange: ({ content, title }: { content: string; title: string }) => void;
}

export default function DocumentEditor({
  id,
  content,
  onChange,
}: DocumentEditorProps) {
  const handleChange = (e: any) => {
    console.log(e.target.value);
    onChange({ content: e.target.value, title: content.title });
  };

  // const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
  //   if (e.key === 'Enter') {
  //     e.preventDefault();
  //     document.execCommand('insertHTML', false, '<br>');
  //   }
  // };

  return (
    <div className="flex">
      <ResizablePanelGroup direction="horizontal" className="min-h-screen">
        <ResizablePanel>
          <InputGroup className="rounded-none border-none shadow-none min-h-screen">
            <InputGroupTextarea
              id="textarea-code-32"
              placeholder={`# Heading\n**bold**\n*italics*`}
              className="min-h-max resize-none border-none rounded-none"
              onChange={handleChange}
              value={content.content}
            />
            <InputGroupAddon align="block-end" className="border-t">
              <InputGroupText>{content.content.length} Words</InputGroupText>
            </InputGroupAddon>
            <InputGroupAddon align="block-start" className="border-b">
              <InputGroupText className="font-mono font-medium">
                <FileText className="h-4 w-4 mt-1 text-muted-foreground flex-shrink-0" />
                {content.title || "untitled.md"}
              </InputGroupText>
              <InputGroupButton className="ml-auto" size="icon-xs">
                <RefreshCwIcon />
              </InputGroupButton>
              <InputGroupButton variant="ghost" size="icon-xs">
                <CopyIcon />
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
          {/* <Textarea
            onChange={handleChange}
            className="min-h-screen resize-none border-none rounded-none leading-7 [&:not(:first-child)]:mt-6"
          /> */}
          {/* <div
            contentEditable="true"
            onInput={handleChange}
            className="min-h-max p-5 w-full border-red outline-none"
          /> */}
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>
          <div className="h-full w-full p-5">
            <Markdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ node, children, ...props }) => (
                  <TypographyH1>{children}</TypographyH1>
                ),
                h2: ({ node, children, ...props }) => (
                  <TypographyH2>{children}</TypographyH2>
                ),
                h3: ({ node, children, ...props }) => (
                  <TypographyH3>{children}</TypographyH3>
                ),
                h4: ({ node, children, ...props }) => (
                  <TypographyH4>{children}</TypographyH4>
                ),
                p: ({ node, children, ...props }) => (
                  <TypographyP>{children}</TypographyP>
                ),
                code: ({ node, children, ...props }) => (
                  <TypographyInlineCode>{children}</TypographyInlineCode>
                ),
                th: ({ node, children, ...props }) => (
                  <TypographyTH>{children}</TypographyTH>
                ),
                tr: ({ node, children, ...props }) => (
                  <TypographyTR>{children}</TypographyTR>
                ),
                td: ({ node, children, ...props }) => (
                  <TypographyTD>{children}</TypographyTD>
                ),
                blockquote: ({ node, children, ...props }) => (
                  <TypographyBlockquote>{children}</TypographyBlockquote>
                ),
                ul: ({ node, children, ...props }) => (
                  <TypographyUL>{children}</TypographyUL>
                ),
              }}
            >
              {content.content}
            </Markdown>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
