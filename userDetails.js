const form = document.getElementById(".user-details");
const submit = document.getElementById("submit-form");
const userName = document.getElementById("fullName");

const saveDataToLocalStorage = (data, key) => {
  localStorage.setItem(key, JSON.stringify(data));
};
const getDataToLOcalStorage = (key) => {
  const data = localStorage.getItem(key);
  return JSON.parse(data);
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const userData = {
    fullName: fullName.value,
    email: email.value,
    address: address.value,
  };
  saveDataToLocalStorage(userData, "userData");
  const data = getDataToLOcalStorage("userData");
  console.log(data);
  showName.innerText = data.fullName;
  showEmail.innerText = data.email;
  showAddress.innerText = data.address;
  fullName.value = "";
  email.value = "";
  address.value = "";
});

const data = getDataToLOcalStorage("userData");
  console.log(data);
  showName.innerText = data.fullName;
  showEmail.innerText = data.email;
  showAddress.innerText = data.address;
