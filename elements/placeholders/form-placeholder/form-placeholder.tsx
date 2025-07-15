export function FormPlaceholder() {
  return (
    <div className="w-full p-2 flex flex-col gap-4 items-center animate-pulse bg-gray-600 shadow rounded-2xl">
      <div className="flex justify-between w-full">
        <div className="flex flex-col w-full">
          <div className="p-4 flex gap-3 flex-col items-start w-full">
            <div className="h-5 w-1/2 rounded-full bg-gray-400"></div>
            <div className="h-10 w-full rounded-2xl bg-gray-400"></div>
          </div>
          <div className="p-4 flex flex-col gap-3 items-start w-full">
            <div className="h-5 w-1/2 rounded-full bg-gray-400"></div>
            <div className="h-10 w-full rounded-2xl bg-gray-400"></div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="p-4 flex flex-col gap-3 items-start w-full">
            <div className="h-5 w-1/2 rounded-full bg-gray-400"></div>
            <div className="h-10 w-full rounded-2xl bg-gray-400"></div>
          </div>
          <div className="p-4 flex flex-col gap-3 items-start w-full">
            <div className="h-5 w-1/2 rounded-full bg-gray-400"></div>
            <div className="h-10 w-full rounded-2xl bg-gray-400"></div>
          </div>
        </div>
      </div>
      <div className="p-4 flex flex-col gap-3 items-start w-full">
        <div className="h-5 w-1/2 rounded-full bg-gray-400"></div>
        <div className="h-10 w-full rounded-2xl bg-gray-400"></div>
      </div>
      <div className="w-1/4 h-12 rounded-full bg-gray-700"></div>
    </div>
  );
}
