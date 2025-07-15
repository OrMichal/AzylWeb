import { GridPlaceholder } from "@/elements/placeholders/grid-placeholder/grid-placeholder";

export default function AnimalsLoading() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full h-20 rounded-xl animate-pulse bg-gray-700"></div>
      <GridPlaceholder />
    </div>
  );
}
