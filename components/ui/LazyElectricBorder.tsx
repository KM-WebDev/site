"use client";

import dynamic from "next/dynamic";

export const LazyElectricBorder = dynamic(
    () => import("../../third-party/react-bits/ElectricBorder"),
    {
        ssr: false, // 🚀 disables server-side rendering
    }
);
