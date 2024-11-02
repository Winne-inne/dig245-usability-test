
/* javascript */

let form= document.querySelector(".myForm")

form.addEventListener("submit", function(e){
  e.preventDefault()
  let q1 = document.querySelector("#q1")
  let a1 = q1.value -1
  let q2 = document.querySelector("#q2")
  let a2 = q2.value -5
  let q3 = document.querySelector("#q3")
  let a3 = q3.value -1
  let q4 = document.querySelector("#q4")
  let a4 = q4.value -5
  let q5 = document.querySelector("#q5")
  let a5 = q5.value -1
  let q6 = document.querySelector("#q6")
  let a6 = q6.value -5
  let q7 = document.querySelector("#q7")
  let a7 = q7.value -1
  let q8 = document.querySelector("#q8")
  let a8 = q8.value -5
  let q9 = document.querySelector("#q9")
  let a9 = q9.value -1
  let q10 = document.querySelector("#q10")
  let a10 = q10.value -5
  let total = (a1+a2+a3+a4+a5+a6+a7+a8+a9+a10)*2.5
  console.log(total)
  document.getElementById("score").textContent="Score: " + total
  
  

})

