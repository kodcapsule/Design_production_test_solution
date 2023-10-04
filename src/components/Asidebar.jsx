function Asidebar({ children, heading, description }) {
  return (
    <aside className="  shadow-xl h-[86vh] px-4 py-2 text-gray-600">
      <div className="top text-left mb-4">
        <h2 className=" text-3xl font-semibold pt-2">{heading}</h2>
        <p className="  mt-2 mb-6 text-base leading-5">{description}</p>
      </div>
      {children}
    </aside>
  );
}

export default Asidebar;
