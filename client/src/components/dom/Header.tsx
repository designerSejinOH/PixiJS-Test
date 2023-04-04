export const Header = ({ title, info }) => {
  return (
    <div className="w-full fixed h-20 border border-black bg-white bg-opacity-50 px-10 rounded-full flex flex-row justify-between items-center">
      <h1 className="text-2xl font-bold">{title}</h1>
      <h1 className="">{info}</h1>
    </div>
  );
};
