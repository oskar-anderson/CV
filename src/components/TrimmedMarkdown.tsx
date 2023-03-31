import Markdown from "markdown-to-jsx";
import { ReactNode } from "react";

export interface Props {
    children: string;
}

export default function TrimmedMarkdown(model: Props) {
    return (
        <Markdown>{ (model.children as string).split("\n").map(l => l.trim()).join('\n') }</Markdown>
    );
}