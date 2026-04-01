// try {
//   console.log(a);
// } catch (error) {
// //   throw new Error(error.message);// error.name,error.message,error.stack
// console.log(error.stack);
// } finally {
//   console.log("excuted");
// }
// // tdz //Temporal dead zone //not created becouse get undefined value
// var a = 67894;


// if( Error){
//     console.log("errro")
// }
// // TDZ
// console.log(b)//refrence error

// let b;

// console.log(sayHelloWithArrowFunction());

// function declation //allowed hoasting
function sayHello() {
  return "hello";
}

// function expression ////not allowed hoasting
const sayHelloAgain = function () {
  return "hello again";
};

// arrow function // not allowed hoasting
const sayHelloWithArrowFunction = () => "hello with arrow function";



// clouser 

 function outer(){
let bankBalance;
let pincode;
function inner(){
   return bankBalance=10000;

}
return inner();

}

// console.log(outer());
// console.log(outer());
// console.log(outer());
// console.log(outer());


function useState(initialValue){
let state=initialValue;

function setState(value){
    return state+=value;
}
    return [state,setState];
}

const [state,setState]=useState(2);






