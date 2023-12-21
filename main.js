const palindrom = function (day, month) {
  let fulldate = day.toString() + month.toString();
  let result = reversedNum(fulldate).toString();
  if (result === fulldate) {
    console.log(fulldate);
  }
};

const reversedNum = function (num) {
  return (
    parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num)
  );
};

const parser = function () {
  for (let i = 1; i <= 30; i++) {
    palindrom(i, 12);
  }
};
parser();
