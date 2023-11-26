// const studentMaker = (name, GPA) => {
//     return {
//         name: name,
//         GPA:GPA,
//         calculateHonors(){
//             if (GPA< 3.5) {
//                 return "no honors";
//             }elseif (GPA < 3.8){
//                 return "cum laude";
//             }elseif (GPA < 4.0){
//                 return "magna cum";
//             }else{
//                 return "summa cum laude";
//             }
//         }
//     }
// }

const studentMaker = (name, GPA) => {
  return {
    name: name,
    GPA: GPA,
    calculateHonors() {
      if (GPA < 3.5) {
        return "no honors";
      }
      if (GPA < 3.8) {
        return "cum laude";
      }
      if (GPA < 4.0) {
        return "magna cum laude";
      }
      return "summa cum laude";
    },
  };
};
console.log(calculateHonors(3.6));
