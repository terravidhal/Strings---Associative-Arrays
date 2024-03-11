// Remove all blank spaces from a string
function removeBlanks(str) {
  let result = "";
  for (let char of str) {
    if (char !== " ") {
      result += char;
    }
  }
  return result;
}

// Extract digits from a string and convert them to an integer
function getDigits(str) {
  let result = "";
  for (let char of str) {
    if (!isNaN(Number(char))) {
      result += char;
    }
  }
  return parseInt(result, 10) || 0; // Parse as integer or return 0 if no digits
}

// Create an acronym from a string by capitalizing first letters of words
function acronym(str) {
  let result = "";
  let isWordStart = true;
  for (let char of str.toLowerCase()) {
    if (char.match(/[a-z]/) && isWordStart) {
      result += char.toUpperCase();
      isWordStart = false;
    } else if (char === " ") {
      isWordStart = true;
    }
  }
  return result;
}

// Count non-space characters in a string
function countNonSpaces(str) {
  let count = 0;
  for (let char of str) {
    if (char !== " ") {
      count++;
    }
  }
  return count;
}

// Remove strings shorter than a specified length from an array
function removeShorterStrings(arr, minLength) {
  const result = [];
  for (let str of arr) {
    if (str.length >= minLength) {
      result.push(str);
    }
  }
  return result;
}

// Example Usage
console.log(removeBlanks("  PlayThatFunkyMusic  ")); // PlayThatFunkyMusic
console.log(getDigits("abc8c0d1ngd0j0!8")); // 801008
console.log(acronym(" there's no free lunch - gotta pay yer way.  ")); // TNFL-GPYW
console.log(countNonSpaces("Hello world !")); // 11
console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4)); // ['Good morning', 'sunshine', 'Earth', 'says', 'hello']
console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3)); // ['There', 'bug', 'the', 'system']
