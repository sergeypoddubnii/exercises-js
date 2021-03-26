//anagrama
// remove anagrams from array
const arrWithAnagrama = [
  "nap",
  "teachers",
  "cheaters",
  "PAN",
  "ear",
  "era",
  "hectares",
];

const removeAnagrams = (arr) => {
  const map = new Map();
  arr.map((word) => {
    const sortedWord = word.toLowerCase().split("").sort().join("");
    map.set(sortedWord, word);
  });
  return [...map.values()];
};

// console.log(removeAnagrams(arrWithAnagrama));

//==============================================================
// check is words are anagrams

const word1 = "nap";
const word2 = "PA";

const isAnargama = (word1, word2) => {
  if (word1.length !== word2.length) {
    return false;
  }
  return (
    word1.toLowerCase().split("").sort().join("") ===
    word2.toLowerCase().split("").sort().join("")
  );
};

console.log(isAnargama(word1, word2));
