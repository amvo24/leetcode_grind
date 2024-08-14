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
