// function palindrome(s){
//     let n = s.length;
//     let i = 0;
//     let j = n-1;

//     while(i < j){
//         if(s[i] !== s[j]) return false;
//         i++;
//         j--;
//     }
//     return true;

// }

// console.log(palindrome("abcd"));
// console.log(palindrome("abbbbbba"));

console.log(process.argv);

const str = process.argv[2];

const isPalindrome = (str) => {
    return str.split("").reverse().join("") == str;
};

console.log(isPalindrome(str));

console.log("asdkfj");
