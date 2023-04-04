export const Header = ({ title, info }) => {
  return (
    <div className="w-[95vw] my-2 fixed py-2 px-4 h-fit text-white bg-white bg-opacity-50 rounded-full flex flex-row justify-between items-center">
      <h1 className="text-2xl font-light">{title}</h1>
      <h1 className="text-2xl font-bold">{info}</h1>
    </div>
  );
};
