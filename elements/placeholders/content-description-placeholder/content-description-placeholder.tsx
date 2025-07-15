export function ContentDescriptionPlaceholder() {
  return (
    <div className="w-full flex gap-3 items-start p-3 rounded-3xl animate-pulse ">
      <h3 className="text-2xl font-light"></h3>
      <div className="p-4 font-extralight h-60 w-80 bg-gray-400 rounded-3xl"></div>
      <div className="flex flex-col gap-6 relative p-4 w-full">
        <div className="w-full h-5 rounded-2xl bg-gray-400"></div>
        <div className="w-full h-5 rounded-2xl bg-gray-400"></div>
        <div className="w-full h-5 rounded-2xl bg-gray-400"></div>
        <div className="w-full h-5 rounded-2xl bg-gray-400"></div>
        <div className="w-full h-5 rounded-2xl bg-gray-400"></div>
      </div>
    </div>
  );
}
