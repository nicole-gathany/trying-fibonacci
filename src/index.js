//fibonacci
function sumFibs(num) {
  let arr = [];
  var prevNumber = 0;
  var currNumber = 1;
  var result = 0;
  while (currNumber <= num) {
    if (currNumber % 2 !== 0) {
      result += currNumber;
    }

    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
  }

  return result;
}

console.log(sumFibs(4));
console.log(sumFibs(100));

sumFibs(1); //should return a number.
// sumFibs(1000) //should return 1785.
// sumFibs(4000000) //should return 4613732.
sumFibs(4); //should return 5.
// sumFibs(75024) //should return 60696.
// sumFibs(75025) //should return 135721.

//1+1 = 2
//1+1+3 = 5
//1+1+3+5 = 10
//1+1+3+5+13=23
//1+1+3+5+13+21=44
