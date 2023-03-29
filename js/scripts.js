//Count Up By

// const countToNum = document.getElementById("input1");
// const countByNum = document.getElementById("input2");
const countToNum = 30;
const countByNum = 5;
let total =0;
for (let i = 0; i < countToNum; i += countByNum) {
  total += countByNum;
  console.log(total);
}