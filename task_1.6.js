/* Task 1.6 (app code)
UIDs (unique identifiers) are ubiquotous. They are used in most modern
 databases and. therefore, in most modern web-services (in both backend
     and frontend sides).

Write a function uid to generate unique identifiers. The function takes
 an alphabet(*) string, a numeric 
ID length and returns a string. (*) here and below by "alphabet" we mean 
a string of allowed characters.
 */

function uid(alphabet, n) {
    const arr = alphabet.split(''); 
    let uid = [];
    for (let i = 0; i < n; i++){   
        const randomLetter =arr[Math.floor(Math.random() * alphabet.length)];
        uid.push(randomLetter);
    } 
    return uid.join('');
}
  
  uid("ab", 1) // One of: "a", "b"
  uid("ab", 2) // One of: "aa", "ab", "ba", "bb"
  uid("ab", 3) // One of: "aaa", "aab", "aba" ...
  
  uid("abc", 1) // One of: "a", "b", "c"
  uid("abc", 2) // One of: "aa", "ab", "ac", "ba", "bb", "bc", "ca", "cb", "cc"
  uid("abc", 3) // One of: "aaa", "aab", "aac" ...