import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

const SearchFilterComponent = () => {
  // State to store the user's search term
  const [searchTerm, setSearchTerm] = useState("");
  // State to control the visibility of additional items
  const [showMore, setShowMore] = useState(false);

  // List of items to be filtered
  const items = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Filter items based on the search term (case-insensitive)
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Determine the items to display (initially 5, show more if the button is clicked)
  const itemsToShow = showMore ? filteredItems : filteredItems.slice(0, 5);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="max-w-md w-full p-6 bg-white rounded-2xl shadow-lg border border-gray-300">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Search Filter
        </h2>

        <div className="relative mb-6">
          <CiSearch
            size={24}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-3 pl-10 text-gray-800 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent placeholder-gray-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <ul className="space-y-3">
          {itemsToShow.length > 0 ? (
            itemsToShow.map((item, index) => (
              <li
                key={index}
                className="p-3 bg-purple-100 rounded-lg text-gray-700 font-medium hover:bg-purple-200 transition-colors"
              >
                {item}
              </li>
            ))
          ) : (
            <li className="text-gray-500 text-center">No items found</li>
          )}
        </ul>

        {filteredItems.length > 5 && (
          <button
            className="mt-6 w-full py-2 flex items-center justify-center bg-pink-500 text-white font-semibold rounded-full hover:bg-pink-600 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "See Less" : "See More"}
            {showMore ? (
              <FaChevronUp className="ml-2" />
            ) : (
              <FaChevronDown className="ml-2" />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchFilterComponent;
