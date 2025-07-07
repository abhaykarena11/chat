import useSearch from "../../statemanage/useSearch";
import { IoSearch } from "react-icons/io5";

export default function Search() {
  const { searchText, setSearchText } = useSearch();
  return (
    <div className="px-6 mb-4">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none"></div>
        <input
          type="text"
          className="modern-input w-full pl-12 pr-4"
          placeholder="Search users..."
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
        />
      </div>
    </div>
  );
}
