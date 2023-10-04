function Card() {
  return (
    <article className=" mt-8 w-3/6 h-3/6  rounded-lg  border-solid border-2  border-slate-300  flex flex-col justify-center items-center gap-4 p-4 ">
      <span className=" w-10 h-10 p-12 rounded-full bg-gradient-to-r from-gray-300 to-gray-100 shadow-sm"></span>
      <span className=" w-3/6 px-10 py-4 bg-gradient-to-r from-gray-300 to-gray-100 rounded-sm shadow-sm"></span>
      <span className=" w-3/6 px-10 py-2 bg-gradient-to-r from-gray-300 to-gray-100 rounded-sm shadow-sm"></span>
      <span className=" px-24 py-2 bg-gradient-to-r from-gray-300 to-gray-100 rounded-sm shadow-sm"></span>
      <span className=" px-20 py-2 bg-gradient-to-r from-gray-300 to-gray-100 rounded-sm shadow-sm"></span>
    </article>
  );
}

export default Card;
