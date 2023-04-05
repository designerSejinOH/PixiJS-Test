export const Header = ({ title, info }) => {
  return (
    <div className="w-full fixed py-2 px-4 h-fit border border-white text-white rounded-full flex flex-row justify-between items-center">
      <h1 className="text-2xl font-light">{title}</h1>
      <h1 className="text-2xl font-medium">{info}</h1>
    </div>
  );
};
