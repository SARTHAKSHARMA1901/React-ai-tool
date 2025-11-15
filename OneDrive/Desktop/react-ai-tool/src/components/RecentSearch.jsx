import Delete from "../assets/delete.png";
import DeleteLight from "../assets/delete-light.png";

const RecentSearch = ({
  clearHistory,
  recentHistory,
  setSelectedHistory,
  darkMode,
}) => {
  return (
    <>
      <div className="col-span-1 dark:bg-zinc-700 bg-gray-100 h-screen text-center">
        <h1 className="text-xl dark:text-white text-zinc-700 pt-3 ">
          <span> Recent Search</span>
          <button onClick={clearHistory} className="cursor-pointer">
            <img
              src={darkMode == "dark" ? Delete : DeleteLight}
              height={20}
              width={20}
            />
          </button>
        </h1>

        <ul className="text-left overflow-auto  m-5">
          {recentHistory?.length > 0 &&
            recentHistory.map((i, index) => (
              <li
                className=" pl-5 dark:text-zinc-400 text-zinc-700 cursor-pointer hover:bg-zinc-600 hover:text-zinc-200 truncate "
                key={`his-${index}`}
                onClick={() => setSelectedHistory(i)}
              >
                {i}
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default RecentSearch;
