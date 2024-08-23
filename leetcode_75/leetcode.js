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

// -------------------------------------------------------------------------------------------------
// 443. String Compression

// Use 2 Pointers and a counter variable to solve this.
// In our logic below, we will be overwriting characters in the input array, but we will not however,
// be actually compressing the input array. Instead we will be giving the illusion of compressing it,
// and then returning the length of that illusion.

// EXAMPLE:
// For input array: ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
// After our code iterates and overwrites the input array, it will look like:
// ["a","b","1","2","b","b","b","b","b","b","b","b","b"]
// Notice that we didn't actually compress the input string but we will be returning
// the pointer 'write' because it stops at the '2' which will be the length of the illusional
// compression we made in the original input array.


var compress = function(chars) {
    // This will read the current element we are iterating over.
    // Starts at 1 b/c the first letter is always included in compression
    let read = 1
    // This will be used as the position for compressed characters to be written
    // Starts at 0 which is our first index.
    let write = 0
    // Keeps track of our character count.
    // Starts at 1 because the first character is already a length of 1.
    let count = 1

    // iterate over our input array (chars) using our already declared read pointer.
    for (read; read < chars.length; read++) {

      // If the letter now is the same as the one before...
      if (chars[read] === chars[read-1]) {
        // Increase the count
        count++
      } else {
        // else we've reached a different letter and need to compress.
        // chars @ position write becomes the last letter before the newly encountered letter.
        chars[write] = chars[read - 1]
        // increase position of write.
        write++

        // This logic handles breaking up double digit counts.
        // If count is bigger than 1...
        if (count > 1) {
          // stringify count and store it in a variable.
          const countStr = count.toString()
          // Iterate over the string variable...
          for (let i = 0; i < countStr.length; i++) {
            // At each index of the string, add it to our compressed string in the write position.
            chars[write] = countStr[i]
            // Increase the position of write.
            write++
          }
        }

        // Then reset the count to 1 for the next set of letters
        count = 1
      }
    }

    // This logic is the same as above but we have to write it seperately for the last character.
    chars[write] = chars[read-1]
    write++
    if (count > 1) {
      const countStr = count.toString()
      for (let i = 0; i < countStr.length; i++) {
        chars[write] = countStr[i]
        write++
      }
    }

    // return the length of the newly compressed string.
    // The position of write should equal the length.
    console.log(chars, ' this is chars')
    return write
  };

  // -------------------------------------------------------------------------------------------------
  //334. Increasing Triplet Subsequence
  var increasingTriplet = function(nums) {
    // Create 2 variables first and second and equal them to infinity.
    let first = Infinity
    let second = Infinity

    //Use a for loop to iterate through the array nums
    for (let num of nums) {
        // if the num is less or equal to variable 'first'...
        if (num <= first) {
            // set variable first to num
            first = num
        // if it's greater than first but less than or equal to second
        } else if (num <= second) {
            // set 'second' to num
            second = num
        // if num is both greater than first and second then we have found a valid triplet
        } else {
            return true
        }
    }

    // If we reach the end of the array but don't return true then return false
    return false
  }

// -------------------------------------------------------------------------------------------------
// 392. Is Subsequence
var isSubsequence = function(s, t) {
    let subsequenceLength = s.length
    let subIndex = 0

    for (let i=0;i<t.length;i++) {
        let letter = t[i]

        if (letter == s[subIndex]) {
            subsequenceLength--
            subIndex++
        }
    }

    return subsequenceLength <= 0
};
