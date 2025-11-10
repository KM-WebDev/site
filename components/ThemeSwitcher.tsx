"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { CgScreen } from "react-icons/cg";

import { cn } from "@/lib/utils";

const options = ["light", "system", "dark"];
const icons = [
    <MdOutlineLightMode className="text-lg" />,
    <CgScreen className="text-lg" />,
    <MdOutlineDarkMode className="text-lg" />,
];

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="bg-clr-bg-extra-dark flex items-center gap-2 rounded-full p-1">
            {options.map((opt, i) => {
                const isActive = opt === theme;

                return (
                    <button
                        key={opt}
                        type="button"
                        onClick={() => setTheme(opt)}
                        className={cn(
                            `rounded-full px-2 py-2 text-sm capitalize transition`,
                            "hover:bg-sky-500 hover:text-white",
                            `${isActive ? "bg-sky-500 text-white shadow" : "opacity-60"}`
                        )}
                    >
                        {icons[i]}
                    </button>
                );
            })}
        </div>
    );
}
