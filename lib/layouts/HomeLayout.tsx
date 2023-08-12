export const HomeLayout = ({ children }) => {
  return (
    <main className="bg-background-100 min-h-screen min-w-screen flex flex-col">
      {children}
    </main>
  );
};
