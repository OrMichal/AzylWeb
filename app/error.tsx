"use client";
import { IPageError } from "@/interfaces/page-error/page-error";

export default function AppError({ error, reset }: IPageError) {
  return(
    <div className="w-full">
      Error
    </div>
  );
}
