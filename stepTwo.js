
//function should return true if the sum of any two numbers is equal to 0
/* for each element in the array, commpare it to every element in the array. If the sum of two elements commpared equals 0, return true.
*/

const addToZero = (arr) => {
    arr.forEach((el) => {
        for (let i = 0; i < arr.length; i++){
            const sum = (el + arr[i])
            return sum;
        }

    })    
}

// addToZero([0])
// addToZero([1])
// addToZero([1, 2, 3])
// addToZero([1, 2, -2])

//run time is O(n)




//function should take in a single word and return true if the word only contains unique letters

const hasUniqueLetters = (str) => {
    let unique = "";
    for(let i = 0; i < str.length; i++){
        if(unique.includes(str[i]) === false){
            unique += str[i]
            continue;
        }else{
            return false;
        }
    }
    return true;
}

// console.log(hasUniqueLetters('racoon'))
// console.log(hasUniqueLetters('horse'))

//run time is O(n)





//function shoud return the length of the longest word in an array
/* Iterate through the array. The first string will be pushed to a new array. Each subsequent will be compared to
string in new array. If length of string in new array is shorter than next string in orig array, it will be replaced
by the longer string. Log the length of string in new array.
*/

const findLongestWord = (arr) => {
    let longestWord = '';
    // longestWord = longestWordArr[0];
    arr.forEach((e) => {
        if(e.length > longestWord.length){
            longestWord = e
        }
    })
    return longestWord.length
}

// console.log(findLongestWord(['hi', 'hello', 'hiJoelyHopeYoureDoingWell']));

//run time is O(n)




//function should check if a sentence is a pangram, return true if it is

const letsCheckIfThisSentenceHasEveryLetterInTheEnglishLanguage = (str) => {
    // let splitStr = str.split();
    let alpha = 'abcdefghijklmnopqrstuvwxyz'.split('')
    for (let i = 0; i < alpha.length; i++){
        if (str.indexOf(alpha[i]) < 0){
            return false;
        } 
    }
    return true;
}

console.log(letsCheckIfThisSentenceHasEveryLetterInTheEnglishLanguage('the quick brown fox jumps over the lazy dog'))
console.log(letsCheckIfThisSentenceHasEveryLetterInTheEnglishLanguage('sally sell sea shells'))


//sticking with the theme and also saying this is O(n) run time


