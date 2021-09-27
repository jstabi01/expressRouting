function validate(nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let valToNum = Number(nums[i]);

    if (Number.isNaN(valToNum)) {
      return new Error(`'${nums[i]}' at index ${i} is not a number`);
    }

    result.push(valToNum);
  }
  return result;
}

function mean(arr) {
  let rollingAverage = 0;
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    rollingAverage = rollingAverage + arr[i];
  }
  return rollingAverage / arr.length;
}

function median(arr) {
  const sort = arr.slice().sort((a, b) => a - b);
  const mid = Math.floor(sort.length / 2);

  if (sort.length % 2 === 0) {
    return (sort[mid - 1] + sort[mid]) / 2;
  }

  return sort[mid];
}

function mode(arr) {
  if (arr.filter((x, index) => arr.indexOf(x) == index).length == arr.length) return arr;
  else
    return mode(
      arr
        .sort((x, index) => x - index)
        .map((x, index) => (arr.indexOf(x) != index ? x : null))
        .filter((x) => x != null)
    );
}

module.exports = {
  mode,
  mean,
  median,
  validate,
};
