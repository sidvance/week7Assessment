
//function should return true if the sum of any two numbers is equal to 0

const addToZero = (nums) => {
    for(let i = 0; i < nums.length; i++){
        if(nums[i] + nums[i] === 0){
            return true;
        }else{
            return false;
        }
    }
}

console.log(addToZero([ ]))
console.log(addToZero([1]))
console.log(addToZero([1, 2, 3]))
console.log(addToZero([1, 2, 3, -2]))

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

hasUniqueLetters('racoon')
hasUniqueLetters('horse')

//run time is O(n)





//function shoud return the length of the longest word in an array

const findLongestWord = (arr) => {
    let largest = 0;
    let word = arr[i]
    for (let i = 0; i < arr.length; i++)
  if (word.length > word){
    largest = word.length;
    return largest;
  }else{
    console.log('wth')
  } }
console.log(findLongestWord['hi', 'hello']);

//run time is O(n)




//function should check if a sentence is a pangram

const letsCheckIfThisSentenceHasEveryLetterInTheEnglishLanguage = (str) => {

}

//sticking with the theme and also saying this is O(n) run time


//I COULD NOT GET ANY OF THESE FUNCTIONING PROPERLY HAHAHA