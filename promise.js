// const promise = new Promise((resolved, rejected) => {
//   let isSuccess = true;
//   if (isSuccess) {
//     return resolved({
//       name: "arvind",
//       age: 7478364,
//     });
//   }
//   rejected("hguryg");
// }); //pending success/fullfiled/resolved , rejected,

// promise
//   .then((user) => ({...user,salary:2000}))
//   .then((data) => console.log(data))
//   .catch((er) => console.log(er));

// function fetchPosts() {
//   return new Promise((resolve, reject) => {
//     let data;
//     let success = true;
//     data = "arvind";
//     console.log(data);
//     if (success) {
//       resolve(data);
//     } else {
//       reject("posts not fetched");
//     }
//   });
// }
// fetchPosts()
//   .then((posts) => console.log(posts))
//   .catch((err) => console.log(err));



//   const [firstRes,secondRes,thirdRes]=Promise.all(
//     fetchPosts(),
//     gapf(),
//     gfdg()
//   );


// event loop 

