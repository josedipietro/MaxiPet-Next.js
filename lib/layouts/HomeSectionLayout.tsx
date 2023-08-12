export const HomeSectionLayout = ({ children, style = {} }) => {
  return (
    <section style={style} className="px-8 md:px-16 pt-4 mt-6">
      <article className="px-8 md:px-16 mt-8">{children}</article>
    </section>
  );
};
