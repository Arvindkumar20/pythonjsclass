const promise = new Promise((resolved, rejected) => {
  let isSuccess = true;
  if (isSuccess) {
    return resolved({
      name: "arvind",
      age: 7478364,
    });
  }
  rejected("hguryg");
}); //pending success/fullfiled/resolved , rejected,

promise
  .then((user) => ({...user,salary:2000}))
  .then((data) => console.log(data))
  .catch((er) => console.log(er));

  


