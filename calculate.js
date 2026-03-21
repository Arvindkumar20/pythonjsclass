const inc = document.getElementById("inc");
const dec = document.getElementById("dec");
const res = document.getElementById("res");

console.log(res);

  inc.addEventListener("click", () => {
    res.value =Number(res.value) +1;
    console.log(res.value)
  });



  dec.addEventListener("click", () => {
    if(res.value<=0){
        return;
    }
    res.value -= 1;
    console.log(res.value)
  });

