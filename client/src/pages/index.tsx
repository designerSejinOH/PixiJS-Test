export default function Page(props) {
  return (
    <>
      <div className="flex flex-row justify-between items-center border border-black bg-blue">
        <h1 className="">Hello World</h1>
        <h1 className="">It's demo</h1>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return { props: { title: "SEJIN OH" } };
}
