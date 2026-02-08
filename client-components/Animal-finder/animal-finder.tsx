"use client";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function AnimalFinder({ children }: { children: React.ReactNode }) {
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

  const handleAnimalState = (e: any, param: string, value: string) => {
    if ((e.target as HTMLInputElement).checked) {
      updateParam("animalState", value);
    } else {
      removeParam(param);
    }
  };

  const handleAnimalGender = (e: any, value: string) => {
    if ((e.target as HTMLInputElement).checked) {
      updateParam("animalGender", value);
    } else {
      removeParam("animalGender");
    }
  };

  const page = getParamValue("page") || 1;

  return (
    <div className="flex flex-col gap-5 items-center w-full">
      <section className="flex justify-between w-full p-3">
        <section className="flex gap-3 items-center flex-1">
          <span
            onClick={() => {
              setFilterShown(!filterShown);
            }}
            className="p-1.5 bg-amber-300 rounded-sm text-md hover:cursor-pointer"
          >
            Filtrování
          </span>
        </section>
      </section>
      <section className="flex gap-10 items-start w-full">
        <div className="flex flex-col w-full gap-5">
          {children}
        </div>
      </section>
    </div>
  );
}
