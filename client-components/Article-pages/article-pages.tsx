"use client";
import { AppButton } from "@/elements/app-button/app-button";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export function ArticlePages() {
  const params = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const page = Number.parseInt(params.get("page") || "1");
  const morePages: boolean = page > 1;

  const switchPage = (state: number) => {
    const pars = new URLSearchParams(params.toString());
    pars.set("page", (page + state).toString());

    router.push(pathname + "?" + pars.toString());
  };

  return (
    <section className="flex justify-between w-full">
      <div className={`${!morePages ? "invisible" : ""}`}>
        <AppButton label="předchozí stránka" onClick={() => switchPage(-1)} />
      </div>
      <AppButton label="další stránka" onClick={() => switchPage(1)} />
    </section>
  );
}
