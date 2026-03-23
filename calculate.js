const inc = document.getElementById("inc");
const dec = document.getElementById("dec");
const res = document.getElementById("res");

console.log(res);

inc.addEventListener("click", () => {
  res.value = Number(res.value) + 1;
  console.log(res.value);
});

dec.addEventListener("click", () => {
  if (res.value <= 0) {
    return;
  }
  res.value -= 1;
  console.log(res.value);
});

// data types
// {
//   Number;
//   String;
//   Boolean;
//   undefined;
//   null;

//   Symbol;
//   BigInt;
// }
// {
//   Array
//   Object
//   function
// }

// const arr=[1,2,3,4,5,6];
// console.log("data type of array : ",typeof arr);

// const fun=()=>{}
// console.log(fun());
// console.log("data type of fun : ",typeof fun)

// const user={
//   name:'ajiuh',
//   age:8584
// }

// console.log("data type of user : ",typeof user);
// let user;
// let student=null;

const arr = [1, 2, 3, 4, 5, 67];

// arr.push(3)
// arr.pop()
// arr.shift();
// arr.unshift(10);

// const sliced=arr.slice(2,5);
// console.log(sliced);
// console.log(arr);

const users = [
  {
    name: "djh",
    dob: "08/01/2010",
  },
  {
    name: "jiojnioty",
    dob: "08/02/2020",
  },
  {
    name: "jiojnioty",
    dob: "08/02/2020",
  },
  {
    name: "jiojnioty",
    dob: "08/02/2020",
  },
  {
    name: "jiojnioty",
    dob: "08/02/2020",
  },

  {
    name: "jiojnioty",
    dob: "08/02/2020",
  },
  {
    name: "jiojnioty",
    dob: "02/02/2020",
  },
];

// const newArray = users.filter((user) => user.dob.split("/")[0] == "08");
// // console.log(newArray)
// const eligibleUsers=newArray.slice(0,4);
// const applyedOffer = eligibleUsers.map((user, index) => {
//   return {
//     ...user,
//     discount: "300$",
//   };//
// });
// console.log(applyedOffer);

// console.log(arr.includes(4));
console.log(arr.includes(4));
// every
// some
// find
// revers;
// values;
// console.log(arr.reverse())
const user={
  name:"iuht",
  phone:65463475784857
}
// console.log(user.keys())
