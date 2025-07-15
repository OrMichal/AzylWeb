interface IAppOptionProps
  extends React.OptionHTMLAttributes<HTMLOptionElement> {
  children: React.ReactNode;
}

export function AppOption({ children, className }: IAppOptionProps) {
  return <option className={`${className} p-1`}>{children}</option>;
}
