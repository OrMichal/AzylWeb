"use client";

interface AppTextInputProps {
  value: string;
  label: string;
  onValueChanged: (value: string) => void;
  placeholder: string;
  type: string;
}

export function AppTextInput({
  value,
  label,
  onValueChanged,
  placeholder,
  type,
}: AppTextInputProps) {
  return (
    <div className="flex flex-col gap-2 p-2 w-full">
      <label className="font-bold text-lg">{label}</label>
      <input
        className="font-light border rounded-full w-full p-1 pl-3 pr-3 border-gray-300"
        type={type}
        onChange={(e) => onValueChanged(e.target.value)}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
}
