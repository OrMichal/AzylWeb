import { AppLink } from "@/elements/app-link/app-link";
import { AnimalsFlex } from "../animals-flex/animals-flex";
import { AnimalStateEnum } from "@/enums/animalState";

export async function AnimalsShowcase() {
  return (
    <div className="p-5 flex gap-6 flex-col items-center self-start w-full">
      <h2 className="text-3xl font-medium">
        Prohlédněte si naše zvířátka k adopci{" "}
      </h2>
      <AnimalsFlex state={AnimalStateEnum.Adoption} />
      <AppLink label="Zobrazit více" href="/animals" />
    </div>
  );
}
