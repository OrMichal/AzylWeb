
interface headerElementProps {
  children: React.ReactNode
}

export function HeaderWrapper({ children }: headerElementProps) {
  return (
    <header className="p-3 bg-amber-100 flex flex-col items-center">
      <div className="flex justify-between w-350 items-center">
        { children }
      </div>
    </header>
  );
}
