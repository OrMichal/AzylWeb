interface IFlexBoxPlaceholderProps {
  vertical: boolean;
}

export function FlexBoxPlaceholder({ vertical }: IFlexBoxPlaceholderProps) {
  return (
    <div
      className={`flex ${vertical ? "flex-col" : ""} gap-4 items-center animate-pulse w-full`}
    >
      <div className="bg-gray-400 w-full h-20 rounded-2xl"></div>
      <div className="bg-gray-400 w-full h-20 rounded-2xl"></div>
      <div className="bg-gray-400 w-full h-20 rounded-2xl"></div>
    </div>
  );
}
