// while
// for
// do while
const usersArray = [
  {
    name: "jhfou",
    age: 764,
  },
  {
    name: "yeeg",
    age: 54,
  },
];
const num = [1, 2, 3, 4, 5, 6, 7];

const newUsers = usersArray.forEach((user) => {
  return (user.salary = 67445);
}); //
// console.log("newUsers : ", newUsers);
// console.log("old users array : ", usersArray);
const newUsers2 = usersArray.map((user) => ({ ...user, email: "67445" })); //
// console.log("newUsers2 : ", newUsers2);

// for(let user in usersArray){
//     delete usersArray[0]
//     console.log(usersArray[user]);
// }

// for array
// for (let user of usersArray) {
//   //   delete user;
//   console.log(user);
// }

const userObj = {
  name: "yeeg fhru8ro  ",
  name2: "yeeg fhru8ro  ",
  age: 54,
};

// for(let user of userObj){
//     console.log(user)
// }.  not for object

// for (let userKey in userObj) {
// if(  userObj[userKey]==54){
//     userObj[userKey]=18;
// }
//   console.log(userKey + " : "+userObj[userKey]);

// }

// const keys=Object.keys(userObj);
// keys[0]="fullName";
// console.log(keys);
// userObj.fisrtName=userObj.name.split(" ")[0];
// userObj.lastName=userObj.name.split(" ")[userObj.name.split(" ").length-1];
// const [fisrtName,middleName,lastName]=userObj.name.split(" ");
// delete userObj.name;
// userObj.fisrtName=fisrtName;
// userObj.middleName=middleName;
// userObj.lastName=lastName||middleName;
// console.log(userObj)

// Object.seal(userObj); //allow changes but not add new fileds
// Object.freeze(userObj);//nothing allowed
// userObj.name = "Raj";
// userObj.salary = 38347;
// delete userObj.name;
// console.log(userObj);

// console.log(Object.keys(userObj));
// console.log(Object.values(userObj));
// const newsUserData = Object.entries(userObj);

// newsUserData.forEach((user) => {
//   console.log(user[0]);
// });

// if (Object.hasOwn(userObj, "name")) {
//   userObj.salary = 100000;
//   userObj.name = "salaried";
// } else {
//   console.log("nothing changed");
// }

// userObj.salary ? (userObj.salary = 10000) : console.log("nothing");
// userObj.name ? (userObj.name = "RAj") : console.log("nothing");




console.log(userObj);
