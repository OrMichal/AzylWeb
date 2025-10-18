"use client";
import { AppOption } from "@/elements/app-option/app-option";
import { AppSelect } from "@/elements/app-select/app-select";
import { AppSummary } from "@/elements/app-summary/app-summary";
import {
  faTableCellsLarge,
  faTableList,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function AnimalFinder({ children }: { children: React.ReactNode }) {
  const [gridActive, setGridActive] = useState(true);
  const [filterShown, setFilterShown] = useState(true);
  const searchParams = useSearchParams();
  const router = useRouter();

  const removeParam = (param: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete(param);
    router.push(`?${params.toString()}`);
  };

  const updateParam = (param: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (params.get(param) == null) {
      params.append(param, value);
    }

    params.set(param, value);
    router.push(`?${params.toString()}`);
  };

  const addParam = (param: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.append(param, value);
    router.push(`?${params.toString()}`);
  };

  const getParamValue = (param: string): string | null => {
    const params = new URLSearchParams(searchParams.toString());
    return params.get(param);
  };

  const handleAnimalState = (e: MouseEvent, param: string, value: string) => {
    if ((e.target as HTMLInputElement).checked) {
      updateParam("animalState", value);
    } else {
      removeParam(param);
    }
  };

  const handleAnimalGender = (e: MouseEvent, value: string) => {
    if ((e.target as HTMLInputElement).checked) {
      updateParam("animalGender", value);
    } else {
      removeParam("animalGender");
    }
  };

  return (
    <div className="flex flex-col gap-5 items-center w-full">
      <section className="flex justify-between w-full p-3">
        <section className="flex gap-3 items-center flex-1">
          <FontAwesomeIcon
            icon={faTableCellsLarge}
            className={`${gridActive ? "black" : "text-gray-500"} text-3xl hover:cursor-pointer`}
            onClick={() => {
              setGridActive(!gridActive);
            }}
          />
          <FontAwesomeIcon
            icon={faTableList}
            className={`${!gridActive ? "black" : "text-gray-500"} text-3xl hover:cursor-pointer`}
            onClick={() => {
              setGridActive(!gridActive);
            }}
          />
          <span
            onClick={() => {
              setFilterShown(!filterShown);
            }}
            className="p-1.5 bg-amber-300 rounded-sm text-sm hover:cursor-pointer"
          >
            Filtrování
          </span>
        </section>
        <section className="flex gap-10 flex-4 items-center">
          <div className="flex gap-2 items-center">
            <span>Třídit:</span>
            <AppSelect>
              <AppOption>datum nálezu: nejnovější</AppOption>
              <AppOption>datum nálezu: nejstarší</AppOption>
              <AppOption>jméno: od A do Z</AppOption>
              <AppOption>jméno: od Z do A</AppOption>
              <AppOption>věk: nejmladší</AppOption>
              <AppOption>věk: nejstarší</AppOption>
            </AppSelect>
          </div>
        </section>
      </section>
      <section className="flex gap-10 items-start w-full">
        {filterShown && (
          <aside className="flex flex-col items-center flex-1">
            <AppSummary title="kategorie">
              <section className="flex flex-col items-start">
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    checked={getParamValue("animalState") == "quarantine"}
                    onClick={(e) =>
                      handleAnimalState(e, "animalState", "quarantine")
                    }
                  />
                  <span className="font-light">karanténa</span>
                </div>
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    checked={getParamValue("animalState") == "lookingForHome"}
                    onClick={(e) =>
                      handleAnimalState(e, "animalState", "lookingForHome")
                    }
                  />
                  <span className="font-light">hledají domov</span>
                </div>
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    checked={getParamValue("animalState") == "foundHome"}
                    onClick={(e) =>
                      handleAnimalState(e, "animalState", "foundHome")
                    }
                  />
                  <span className="font-light">našla domov</span>
                </div>
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    checked={getParamValue("animalState") == "leftUs"}
                    onClick={(e) =>
                      handleAnimalState(e, "animalState", "leftUs")
                    }
                  />
                  <span className="font-light">opustila nás</span>
                </div>
              </section>
            </AppSummary>
            <AppSummary title="pohlaví">
              <section className="flex flex-col items-start">
                <div className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    checked={getParamValue("animalGender") == "male"}
                    onClick={(e) => handleAnimalGender(e, "male")}
                  />
                  <span>sameček</span>
                </div>
                <div className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    checked={getParamValue("animalGender") == "female"}
                    onClick={(e) => handleAnimalGender(e, "female")}
                  />
                  <span>samička</span>
                </div>
              </section>
            </AppSummary>
          </aside>
        )}
        <div>{children}</div>
      </section>
    </div>
  );
}
