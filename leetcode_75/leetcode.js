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

