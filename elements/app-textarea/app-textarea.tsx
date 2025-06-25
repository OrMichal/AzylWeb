"use client";

import { ChangeEvent } from "react";

interface AppTextareaProps {
  value: string;
  onValueChanged: (value: string) => void;
  label: string;
  placeholder: string;
}

export function AppTextarea({
  label,
  value,
  onValueChanged,
  placeholder,
}: AppTextareaProps) {
  return (
    <div className="p-2 flex flex-col gap-3">
      <label>{label}</label>
      <textarea
        className="resize-y border border-gray-300 p-2 rounded-2xl"
        placeholder={placeholder}
        onChange={(d: ChangeEvent<HTMLTextAreaElement>): void =>
          onValueChanged(d.target.value)
        }
        value={value}
      />
    </div>
  );
}
