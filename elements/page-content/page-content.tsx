interface IPageContent {
  children: React.ReactNode;
}

export function PageContent({ children }: IPageContent) {
  return (
    <section className="flex flex-col items-center w-3/4 gap-3">
      <h2 className="self-start font-medium text-2xl">Obsah stránky</h2>
      <div className="rounded-2xl shadow w-full p-3 font-light flex flex-col gap-2">
        {children}
      </div>
    </section>
  );
}
