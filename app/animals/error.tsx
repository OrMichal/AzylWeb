"use client";
import { AppButton } from "@/elements/app-button/app-button";
import { IPageError } from "@/interfaces/page-error/page-error";
import { faWarning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AnimalsError({ error, reset }: IPageError) {
  return (
    <div className="flex flex-col items-center gap-10 relative p-9">
      <FontAwesomeIcon icon={faWarning} color="red" className="scale-300" />
      <div className="flex flex-col items-center gap-4">
        <span className="font-medium text-3xl">
          Nastala chyba při načítání zvířátek:
        </span>
        <span className="ml-4 font-light h-40 text-red-500">
          {error.message}
        </span>
        <span className="mt-20">
          Zkuste znovu načíst stránku, nebo nás kontaktujte na emailu:
          daisyazyl.support@daisy.cz
        </span>
        <AppButton onClick={reset} label="zkusit znovu" />
      </div>
    </div>
  );
}
