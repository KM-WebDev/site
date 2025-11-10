"use client";

import Form from "next/form";
import { useState } from "react";

interface FormProps {
    callback: (formData: FormData) => void | Promise<void>;
}

export default function FlexibleForm({ callback }: FormProps) {
    return (
        <Form action={callback} className="h-20">
            <TextInput />
        </Form>
    );
}

export function TextInput() {
    const [value, setValue] = useState("");

    return (
        <input
            type="text"
            className=""
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    );
}
