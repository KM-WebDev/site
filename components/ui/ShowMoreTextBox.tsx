"use client";

import { useState } from "react";
import Button from "../base/Button";

interface ShowMoreTextBoxProps {
    children: string;
    limit?: number;
    isOpenOnInit?: boolean;
}
export default function ShowMoreTextBox({
    children,
    limit = 200,
    isOpenOnInit = false,
}: ShowMoreTextBoxProps) {
    const [expanded, setExpanded] = useState<boolean>(isOpenOnInit);
    const isLong = children.length > limit;
    const preview =
        isLong && !expanded
            ? limit === 0
                ? ""
                : children.slice(0, limit) + "..."
            : children;

    return (
        <div className="">
            <span>{preview}</span>
            {isLong && (
                <Button
                    className="text-clr-brand-red px-0"
                    onClick={() => setExpanded((x) => !x)}
                    variant="text"
                    text={expanded ? "pokaż mniej" : "pokaż więcej"}
                />
            )}
        </div>
    );
}
