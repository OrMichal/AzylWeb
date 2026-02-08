interface IPageCard {
  active: boolean;
  children: React.ReactNode;
}

export function PageCard({ children, active }: IPageCard) {
  return(
    <div className={`
        p-1 w-8 justify-center flex flex-col items-center aspect-square rounded-md border
        ${active 
          ? "border-amber-400 bg-amber-400 text-white" 
          : "border-gray-400 text-gray-400 hover:bg-amber-400 hover:text-white hover:border-amber-400 transition-colors"
         }
      `}>
      { children }
    </div>
  );
}
