// switch
const days = {
  0: "sunday",
  1: "monday",
  2: "tuesday",
  3: "wednesday",
  4: "thursday",
  5: "friday",
  6: "satureday",
};
const easyWay = (num) => {
  if (num > 6) {
    return "please enter valida day number";
  }
  return days[num];
};

// const returnDay = (num) => {
//   switch (num) {
//     case 0:
//       return "sunday";
//     case 1:
//       return "monday";
//     case 2:
//       return "tuesday";
//     case 3:
//       return "wednesDay";
//     case 4:
//       return "thursday";
//     case 5:
//       return "friday";
//     case 6:
//       return "satureDay";

//     default:
//       return "please enter valida day number";
//   }
// };

// console.log(easyWay(1));



