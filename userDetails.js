const form = document.getElementById(".user-details");
const submit = document.getElementById("submit-form");

const emailValidation = (email) => {
  const regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regEx.test(email);
};

const saveDataToLocalStorage = (data, key) => {
  const localData = getDataToLOcalStorage(key);
  console.log(localData);
  let arr = [];
  if (localData == null) {
    arr = [data];
  } else {
    arr = [...localData, data];
  }

  localStorage.setItem(key, JSON.stringify(arr));

  window.location = "/";
};

const getDataToLOcalStorage = (key) => {
  const data = localStorage.getItem(key);
  return JSON.parse(data);
};

submit.addEventListener("click", (e) => {
  // validateData()
  e.preventDefault();
  const userData = {
    fullName: fullName.value,
    email: email.value,
    address: address.value,
    expiresIn: Date.now(),
  };
  if (!emailValidation(email.value)) {
    alert("please enter valid email");
    return null;
  }
  saveDataToLocalStorage(userData, "userData");
  const data = getDataToLOcalStorage("userData");
  console.log(data);
  fullName.value = "";
  email.value = "";
  address.value = "";
});

const data = getDataToLOcalStorage("userData");

function checkUsersExpiryTime() {
  const data = getDataToLOcalStorage("userData");
  const newData = data.filter(
    (user) => Date.now() - user.expiresIn < 24 * 60 * 60 * 1000,
  );
  localStorage.setItem("userData", JSON.stringify(newData));
}
checkUsersExpiryTime();
