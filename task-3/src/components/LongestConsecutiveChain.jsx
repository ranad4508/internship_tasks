import React, { useState } from "react";

const LongestConsecutiveChain = () => {
  // State to store the array of numbers entered by the user
  const [numbers, setNumbers] = useState([]);

  // State to store the length of the longest consecutive chain
  const [chainLength, setChainLength] = useState(0);

  // Function to find the longest consecutive chain in an array of numbers
  const findLongestConsecutiveChain = (nums) => {
    if (nums.length === 0) {
      return 0;
    }

    const numsSet = new Set(nums);
    let longestChain = 0;

    for (let num of numsSet) {
      if (!numsSet.has(num - 1)) {
        let currentNum = num;
        let currentChain = 1;

        while (numsSet.has(currentNum + 1)) {
          currentNum += 1;
          currentChain += 1;
        }

        longestChain = Math.max(longestChain, currentChain);
      }
    }

    return longestChain;
  };

  const handleInputChange = (e) => {
    const inputArray = e.target.value.split(",").map(Number);
    setNumbers(inputArray);
    setChainLength(findLongestConsecutiveChain(inputArray));
  };
  /*
  <==========   Time Complexity   ===========>

  Converting Array to Set: O(n)

  The conversion of the array to a Set takes O(n) time, where n is the number of elements in the array.
  This is because inserting each element into the Set involves a constant-time operation for each element.
  
  Finding Longest Consecutive Chain: O(n)

  The function iterates through each element in the Set (which has at most n elements).
   For each element, it performs a linear scan to count consecutive numbers.



   <==========   Space Complexity   ===========>

    Storage for Set: O(n)
    The Set stores up to n unique numbers. Therefore, the space complexity for the Set is O(n).

    Other Variables: O(1)
    The function uses a constant amount of additional space for variables like longestChain, currentNum, and currentChain. 
    This additional space is O(1).
  */

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-gradient-to-r from-blue-400 to-purple-500 shadow-lg rounded-xl border border-gray-300">
      <h2 className="text-3xl font-bold mb-6 text-white">
        Find Longest Consecutive Chain
      </h2>

      <input
        type="text"
        placeholder="Enter numbers separated by commas"
        className="w-full p-4 mb-6 border border-gray-300 rounded-lg bg-white shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300 ease-in-out"
        onChange={handleInputChange}
      />

      <p className="text-2xl font-semibold text-white">
        <span className="font-bold text-yellow-200">
          Longest Consecutive Chain Length:
        </span>{" "}
        {chainLength}
      </p>
    </div>
  );
};

export default LongestConsecutiveChain;
