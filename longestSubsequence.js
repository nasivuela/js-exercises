function find(str, startInd, letter) {
  for (let i = startInd; i < str.length; i++) {
    if (letter === str[i]) {
      return i;
    }
  }
}

function longestSubsequence(strA, strB) {
  if (!strA || !strB) {
    return 0;
  }

  // [[ind, count, str, finished], [..]]
  const matches = [];
  let counter = 0;

  for (let i = 0; i < strB.length; i++) {
    // first step
    const letter = strB[i];
    for (let j = 0; j < matches.length; j++) {
      const [ind, count, str, finished] = matches[j];
      const newInd = find(strA, ind, letter);
      if (Number.isInteger(newInd) && !finished) {
        const newCount = count + 1;
        if (newCount > counter) {
          counter = newCount;
        }
        matches[j] = [newInd + 1, newCount, str + letter];
      } else {
        matches[j][3] = true;
      }
    }

    // second step
    const firstInd = find(strA, 0, letter);
    if (Number.isInteger(firstInd) && counter < strB.length - i) {
      matches.push([firstInd, 1, letter]);
    }
  }
  console.log(counter);

  return counter;
}

const a = 'asdfhcuasdfasdgpdgfhdgj';
const b = 'asdfasdahjcussgp';

console.log(longestSubsequence(a, b));
