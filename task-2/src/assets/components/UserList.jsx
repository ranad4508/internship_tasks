import React, { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message || "An unexpected error occurred");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="text-center text-blue-600" aria-live="polite">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600" aria-live="assertive">
        {error}
      </div>
    );
  }

  const usersToShow = showMore ? users : users.slice(0, 5);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="max-w-md w-full p-6 bg-white rounded-2xl shadow-lg border border-gray-300">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          User List
        </h2>

        <ul className="space-y-3">
          {usersToShow.map((user) => (
            <li
              key={user.id}
              className="p-3 bg-purple-100 rounded-lg text-gray-700 font-medium hover:bg-purple-200 transition-colors"
            >
              {user.name}
            </li>
          ))}
        </ul>

        {users.length > 5 && (
          <button
            className="mt-6 w-full py-2 flex items-center justify-center bg-pink-500 text-white font-semibold rounded-full hover:bg-pink-600 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
            onClick={() => setShowMore(!showMore)}
            aria-expanded={showMore}
            aria-controls="user-list"
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

export default UserList;
