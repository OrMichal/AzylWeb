import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { InputHTMLAttributes } from "react";

interface IAppFormCredentialProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon: any;
}

export function AppFormCredential({
  label,
  icon,
  className,
  onChange,
  placeholder,
  required,
  type,
  name,
}: IAppFormCredentialProps) {
  return (
    <div className="flex flex-col items-start gap-2 w-full">
      <label htmlFor={name}>{label}</label>
      <div className="flex items-center gap-4 rounded-2xl shadow p-3 w-full">
        <FontAwesomeIcon icon={icon} />
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className={`w-full outline-none text-xl ${className}`}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
