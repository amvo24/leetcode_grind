// Two Sum

var twoSum = function(nums, target) {
    // Create an empty hashmap
    let hash = {}

    // For loop will iterate over every integer
    for (let i=0; i < nums.length; i++) {
        // Calculate the difference of every integer and target
        let complement = target - nums[i]
        // If the integer we are currently iterated on is
        // already in the hash then we've already found the first number
        // that adds up with our current number to equal the target
        if (nums[i] in hash) {
            // So we return the index of the first number we had found
            // and the index of the number we are currently iterated on.
            return [hash[nums[i]], i]
        // Else if the first conditional wasn't met...
        } else {
        // we create and store a new k/v pair in our hash with the
        // "complement" as the key and it's index as the value.
            hash[complement] = i
        }
    }
};


