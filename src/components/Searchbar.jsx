/* eslint-disable react/prop-types */
export const SearchBar = ({ closeModal }) => {
  const handleClickInsideModal = (e) => {
    e.stopPropagation();
  };

  const handleSearchFormSubmit = (e) => {
    e.preventDefault();
    closeModal();
  };
  return (
    <div
      onClick={closeModal}
      className="fixed z-10 pt-[100px] left-0 top-0 w-full h-screen overflow-auto bg-[rgba(0,0,0,0.7)]"
    >
      <div
        onClick={handleClickInsideModal}
        className=" bg-slate-200 text-black dark:bg-slate-950 dark:text-white shadow-[0_4px_8px_0_rgba(0,0,0,0.2)] rounded-xl relative m-auto p-20 border border-solid border-[#888] w-[80%]"
      >
        <span
          onClick={closeModal}
          className="absolute top-[10px] right-[20px] text-[34px] cursor-pointer"
        >
          <ion-icon name="close"></ion-icon>
        </span>
        <div>
          <form
            onSubmit={handleSearchFormSubmit}
            className="w-full flex flex-col mx-auto rounded-md p-3"
          >
            <label
              htmlFor="search"
              style={{ position: "absolute", left: "-9999px" }}
            >
              Search
            </label>
            <input
              type="search"
              name="search"
              id="search"
              required
              placeholder="Search Movies And Tv Shows"
              className="searchBar text-black w-full py-[12px] px-[20px] my-[8px] mx-[0] inline-block border border-black rounded"
            />
            <button
              type="submit"
              className=" bg-red-600 text-white py-[14px] px-[30px] font-bold my-[8px] mx-0 border-none rounded cursor-pointer self-end"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
