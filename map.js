const fruit = ["apple", "banana"];
// const fruitJuice = ["apple-juice", "banana-juice"];

const fruitjuice = fruit.map((fruit) => {
  return fruit + "-juice";
});
console.log(fruitjuice);

let myArr = [1, 3, 5, 7, 8];
console.log(
  myArr.map(function (number) {
    //must write the argument in the reutrn, "number"
    return (number += 10);
  })
);
