let myName = "Sara";

// function printName(){
//     let myName2 = "Ezgi";
//     console.log(myName, myName2);//will log both

//   function printLastName(){
//     let myLastName = "Radic";
//     console.log(myName, myName2, myLastName);
//   }
//   printLastName();
// }
// //needs to be there to log a answere, or it will not appear
// printName();

// //console.log(myName, myName2);// will log only one(global)

function printName(myName) {
  const myName2 = "Ezgi";
  console.log(myName);
}
printName("Ida");
//it loggs "Ida" because it is being declared as a argument with the
//"printName" which is with the variable in the beginning
