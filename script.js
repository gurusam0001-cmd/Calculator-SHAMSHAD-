

// let display = document.getElementById("inputBox");
// let buttons = document.querySelectorAll("button");

// let buttonsArray = Array.from(buttons);
// let string = '';

// buttonsArray.forEach((btn) => {
//     btn.addEventListener("click", (e) => {
//         if(e.target.innerHTML ===`AC`){
//             string = '';
//             display.value = string;
//         }else if(e.target.innerHTML ===`DEL`){
//               string = string.substring = string.length-1;
//         }else if
//             (e.target.innerHTML==`=`){
//                 string= eval(string);
//                 display.value= string;
//             }
//         else{
//                     let value = e.target.innerHTML;

//         string += value;
//         display.value = string;

//         }



//     });
// });

let display = document.getElementById("inputBox");
let buttons = document.querySelectorAll('button');

let buttonsArray = Array.from(buttons);
let string = '';

buttonsArray.forEach((btn) => {
   btn.addEventListener("click", (e) => {
      let value = e.target.innerHTML;

      if (value === "AC") {
         string = '';
         display.value = string;

      } else if (value === "DEL") {
         string = string.substring(0, string.length - 1);
         display.value = string;

      } else if (value === "=") {
         string = eval(string);
         display.value = string;

      } else {
         string += value;
         display.value = string;
      }
   });
});