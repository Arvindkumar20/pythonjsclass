// const f = File.writeFileSync("test.txt", "hello how are you");
// console.log(f)//not working with dom

const fileUpload = document.getElementById("fileUpload");
fileUpload.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;
  console.log(file)
//   const reader = new FileReader();
//   reader.onload = (e) => {
//     // const content = e.target.result;
//     console.log(e.target)
//   posts.innerHTML=e.target.result;
//   };
// const data=  reader.readAsText(file);
// console.log(data)

const reader=new FileReader(file);
// console.log(reader)
// reader.onload=(e)=>{
//     console.log(e.target);
// }

reader.readAsText(file)
// console.log(object)
});
