import BooksGrid from "./BooksGrid";

export const DiscoverPage: React.FC = () => {
  return (
    <div className="p-2 flex flex-col gap-7 h-full overflow-y-scroll">
      <h1>Reader App</h1>
      <BooksGrid />
    </div>
  );
};
