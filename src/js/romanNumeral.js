const romanNumeralConverter = (total) => {
  const charBank = [["M", 1000], ["CM", 900], ["D", 500], ["CD", 400], ["C", 100], ["XC", 90], ["L", 50], ["XL", 40], ["X", 10], ["IX", 9], ["V", 5], ["IV", 4], ["I", 1]];
  const operateOnPairs = (counter, runningTotal, runningString) => {
    if (runningTotal === 0) {
      return runningString;
    }
    else if (charBank[counter][1] <= runningTotal) {
      runningString += charBank[counter][0];
      runningTotal -= charBank[counter][1];
      return operateOnPairs(counter, runningTotal, runningString);
    } else {
      return operateOnPairs(counter + 1, runningTotal, runningString)
    }
  }
  return operateOnPairs(0, total, "");
}