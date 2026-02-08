"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { useRouter, useSearchParams } from "next/navigation";

export interface IAnimalGridFilters { 
  animalType?: string; 
  state: string; 
}

export function AnimalsGridFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const state = searchParams.get("state") ?? "";
  const animalType = searchParams.get("animalType") ?? "";

  function animalState(s: string): string {
    switch(s) {
      case "quarantine":
          return "quarantine"
        break;
      case "foundHome":
          return "našel domov";
        break;
      case "lookingForHome":
          return "hledá domov";
        break;
      case "leftUs":
          return "opustil nás";
        break;
    }

    return "";
  }

  function updateParam(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    params.delete("page");

    router.push(`?${params.toString()}`);
  }

  return (
    <div className="flex flex-wrap gap-4 w-full items-center p-4 rounded-xl">
      <div className="rounded-lg p-2 aspect-square flex items-center justify-center border-amber-300 border">
        <FontAwesomeIcon
          className="text-amber-300 text-lg"
          icon={faFilter}
        />
      </div>

      <select
        value={animalType}
        onChange={(e) => updateParam("animalType", e.target.value)}
        className="border border-amber-300 rounded-lg px-4 py-2 outline-none"
      >
        <option value="">Všechna zvířátka</option>
        <option value="pes">Pes</option>
        <option value="kočka">Kočka</option>
      </select>

      <select
        value={state}
        onChange={(e) => updateParam("state", e.target.value)}
        className="border border-amber-300 rounded-lg px-4 py-2 outline-none"
      >
        <option value="">Všechna</option>
        <option value="quarantine">Karanténa</option>
        <option value="foundHome">Našli domov</option>
        <option value="lookingForHome">Hledají domov</option>
        <option value="leftUs">Opustila nás</option>
      </select>
    </div>
  );
}
