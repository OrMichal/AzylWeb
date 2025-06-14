
interface headerElementProps {
  children: React.ReactNode
}

export function HeaderWrapper({ children }: headerElementProps) {
  return (
    <header className="flex justify-around p-3">
      { children }
    </header>
  );
}
