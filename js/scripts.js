//Count Up By

// Business Logic
function countUpBy(countByNum, countToNum)  {
  let total =0;
  let resultsArray = [];
  const p = document.getElementById("results");
  for (let i = 0; i < countToNum; i += countByNum) {
    total += countByNum;
    console.log(total);
    resultsArray.push(total);
    console.log(resultsArray);
  }
  const resultsString = resultsArray.join(" ");
  console.log(resultsString);
  p.innerText = resultsString;
  
}

// UI Logic
function handleFormSubmission(event) {
  event.preventDefault();
  const input1Num = parseInt(document.getElementById("input1").value);
  const input2Num = parseInt(document.getElementById("input2").value);
  countUpBy(input2Num, input1Num);
  //document.getElementById("results").innerText = total
}

window.addEventListener("load", function()  {
  document.getElementById("user-form").addEventListener("submit", handleFormSubmission);
});