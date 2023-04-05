export const Header = ({ title, info }) => {
  return (
    <div className="w-full fixed py-2 px-4 h-fit border border-black text-black rounded-3xl flex flex-row justify-between items-center">
      <h1 className="text-xl font-medium">{title}</h1>
      <h1 className="text-2xl font-medium">{info}</h1>
    </div>
  );
};
