const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let text = '...';
  for (let i = 0; i < arr.length; i++) {
    text += ` ${arr[i]}ºC in ${i + 1} days ...`;
  }
  return text;
};

console.log(printForecast(data2));
