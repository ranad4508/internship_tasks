function countSmallerElements(nums) {
  const n = nums.length;
  const counts = new Array(n).fill(0); // Initialize counts array with zeros

  // Iterate over each element in the array
  for (let i = 0; i < n; i++) {
    let count = 0;

    // Compare nums[i] with each element to its right
    for (let j = i + 1; j < n; j++) {
      if (nums[j] < nums[i]) {
        count++;
      }
    }

    // Update the counts array
    counts[i] = count;
  }

  return counts;
}

// Example usage:
const nums = [5, 2, 6, 1];
console.log(countSmallerElements(nums));
