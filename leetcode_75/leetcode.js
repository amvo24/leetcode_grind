// 1431. Kids With the Greatest Number of Candies
var kidsWithCandies = function(candies, extraCandies) {

    let maxCandies = 0
    for (let candy of candies) {
        maxCandies = Math.max(candy, maxCandies)
    }

    let resultArray = []
    for (let candy of candies) {
       let sumCandies = candy + extraCandies

       if (sumCandies >= maxCandies) {
        resultArray.push(true)
       } else {
        resultArray.push(false)
       }
    }

    return resultArray
};

// -----------------------------------------------------------------------------
// 345. Reverse Vowels of a String

var reverseVowels = function(s) {

    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let vowelsFound = []

    for (let letter of s) {
        if (vowels.includes(letter)) {
            vowelsFound.unshift(letter)

        }
    }

    let result = ''
    for (let letter of s) {
        if (!vowels.includes(letter)) {
            result += letter
        } else {
           let vowel = vowelsFound.shift()
           result += vowel
        }
    }

    return result


};

// -----------------------------------------------------------------------------
// 1768. Merge Strings Alternately

var mergeAlternately = function(word1, word2) {
    // create an empty string
    let result = ''

    for (let i=0; i < Math.max(word1.length, word2.length); i++) {
        if (i < word1.length) result += word1[i]
        if (i < word2.length) result += word2[i]
    }

    return result
};

// -----------------------------------------------------------------------------
// 1071. Greatest Common Divisor of Strings

// THIS ONE IS CONFUSING AS HECK. Use MODULO.
var gcdOfStrings = function(str1, str2) {
    // handle the base case
    if (str1 + str2 !== str2 + str1) return '';
    let a = str1.length
    let b = str2.length

    // loop (divide) until you find the
    // highest common factor (length of string)
    // like we did in maths
    while (b) {
        let temp = b
        b = a % b
        a = temp
    }
    return str1.substring(0, a)
}
// -----------------------------------------------------------------------------
//151. Reverse Words in a String
var reverseWords = function(s) {
    let result = []
    let stringSplit = s.split(' ').reverse()
    // console.log("THIS IS STRING SPLIT ", stringSplit)

    for (let el of stringSplit) {
        if (el != "") {
            result.push(el)
        }
    }
    return result.join(' ')
};

// -----------------------------------------------------------------------------

// 238. Product of Array Except Self
var productExceptSelf = function(nums) {
    // We create an empty result array to store our products except self.
    // This output array does not affect the space complexity of our analysis.
    let result = []


    // Our prefix represents the product of every number to the left of nums[i].
    // We equal it to 1 because there is nothing prior to the first index nums[i].
    let prefix = 1
    // For prefix, we iterate normally towards the right.
    for (let i=0;i<nums.length;i++) {
    // Here we say that results[ @ 'i'] will equal the prefix
    // This is how, in a way, we are sort of pushing the prefix into the result array.
    // It's just accessing the index in result array and equaling it to our prefix
    result[i] = prefix


    // After we place the prefix number in it's correct index, we have to multiply it
    // by the nums[i].
    // Think about it this way, as we are gradually iterating to the right, we have to 'pick up'
    // and multiply the current number to the prefix so that it can be the correct prefix for
    // the next number that we iterate to.
    prefix *= nums[i]
    }


    // At this point our result array should have every index filled with the prefix calculation
    // of nums[i]. Now we get the postfix.
    // Postfix is equal to 1 because there nothing after this current element.
    let postfix = 1
    // Iterate backwards to calculate the postfix.
    // postfix is the product of all elements after nums[i] and not including it.
    // so index equals the last element, loop needs to stop at or before the first index. index-- to
    // decrease and go backwards.
    for (let i = nums.length-1; i >= 0;i--) {
    // Multiply the postfix by the prefix which already happens to be stored in result[i].
    // After they are multiplied, result[i] should now have the product of all numbers except nums[i].
    result[i] *= postfix
    // Then we multiply postfix with the nums[i] to make sure we have the updated
    // postfix calculation for the next number in the backwards loop.
    // It's just like we did for prefix, we are 'picking up' this nums[i] to be multiplied to our
    // current prefix.
    postfix *= nums[i]
    }
    // Then we return the result/output array that we made.
    // And remember this array is not included in our space complexity analysis thus
    // achieving O(1) space complexity.
    return result
    };

    // -----------------------------------------------------------------------------
// 605. Can Place Flowers
// stategy: Check 3 plots at every iteration (left, present, right)
var canPlaceFlowers = function(flowerbed, n) {
    //iterate over the flowerbed
    for (let i=0;i < flowerbed.length;i++) {
        // create our left and right pointers
        let left, right

        // if left point is at the starting index
        if (i === 0) {
            // assume the left plot AKA out of bounds plot to be true
            left = true
        } else {
            // else if the left pointer is inbounds and the left index is 0 then
            // this should result in true
            left = flowerbed[i-1] === 0
        }

        // same as the above left pointer logic but this time if right pointer is out of bounds
        // at the end of the flowerbed
        if (i === flowerbed.length-1) {
            right = true
        } else {
            right = flowerbed[i + 1] === 0
        }

        // Check if all 3 plots result in 0 AKA empty plots
        if (left && right && flowerbed[i] === 0) {
            // if so then plant the flower
            flowerbed[i] = 1
            // decrement the flowers we have to plant
            n -= 1
        }

    }

    return n <= 0
}
