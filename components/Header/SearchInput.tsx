export const SearchInput = () => {
  return (
    <form className="w-full my-4 md:w-6/12 px-16 h-12 ">
      <input
        placeholder="Buscador"
        className="font-header placeholder:text-secondary-300 border-secondary-200 rounded-lg w-full  focus:border-primary-300 focus:shadow-md focus:ring-primary-300"
        type="search"
      />
    </form>
  );
};
