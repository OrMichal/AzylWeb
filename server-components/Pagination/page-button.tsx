interface IPageButton {
  disabled: boolean;
  children: React.ReactNode;
}

export function PageButton({ children, disabled }: IPageButton) {
  return(
    <div className={`
      select-none text-2xl
      ${disabled 
        ? "text-gray-200" 
        : "text-amber-300 hover:cursor-pointer hover:text-amber-400"
       }
      `}
    >
      { children }
    </div>
  );
}
