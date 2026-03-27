const usersContainer = document.getElementById("container");
usersContainer.style.display = "flex";
usersContainer.style.flexDirection = "row";
usersContainer.style.flexWrap = "wrap";
usersContainer.style.gap = "20px";
usersContainer.style.marginTop = "20px";
usersContainer.style.borderRadius = "20px";
// create tag function
const createTag = (name, style) => {
  const tag = document.createElement(name);
  //   styling
  tag.style.color = style?.color;
  tag.style.border = style?.border;
  tag.style.background = style?.background;
  tag.style.padding = style?.padding;
  tag.style.margin = style?.margin;
  tag.style.width = style?.width;
  tag.style.height = style?.height;
  tag.style.borderRadius = style?.borderRadius;
  tag.style.display = style?.display;
  tag.style.alighItems = style?.alighItems;
  tag.style.justifyContent = style?.justifyContent;
  return tag;
};
let localUserData = JSON.parse(localStorage.getItem("userData"));

function deleteUser(email) {
  const newUsers = localUserData.filter((user) => user.email !== email);

  localStorage.setItem("userData", JSON.stringify(newUsers));
  window.location = "/";
}

// user card function
const createUser = (
  name,
  dob = "00/00/0000",
  phone = "000000....",
  email = "useremail@gmail.com",
  image = "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg",
) => {
  const user = createTag("div", {
    border: "2px solid red",
    padding: "20px 20px",
    borderRadius: "20px",
    width: "250px",
  });
  // user image container
  const imageParent = createTag("div", {
    display: "flex",
    alighItems: "center",
    justifyContent: "center",
    margin: "0px auto",
  });
  // user image
  const imageStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
  };

  const img = createTag("img", imageStyle);
  img.src = image;
  imageParent.appendChild(img);
  user.appendChild(imageParent);
  // user name
  const userName = createTag("h1", { color: "red" });
  userName.innerText = "Name : " + name;
  user.append(userName);

  // user dob
  const userDob = createTag("h2", { color: "green" });
  userDob.innerText = "DOB : " + dob;
  user.appendChild(userDob);

  //   user phone
  const userPhone = createTag("h2");
  userPhone.innerText = "Phone No : " + phone;
  user.appendChild(userPhone);
  //   user phone
  const userEmail = createTag("h3");
  userEmail.innerText = "Email : " + email;
  user.appendChild(userEmail);

  // delete user
  const deleteBtn = createTag("div", { borderRadius: "5px" });
  deleteBtn.innerHTML = `<button onClick="deleteUser('${email}')" style="padding:5px 10px;border:1px solid gray;borderRadius:10px;background:red;color:white;cursor:pointer">Delete</button>`;
  user.appendChild(deleteBtn);
  usersContainer.appendChild(user);
};

// createUser("arvind")

// const pa = ["arvind kjerfhw frr fjrg rtg ", "abhay", "arohi"];
function loadUsers(users) {
  users.map((user) => {
    const { fullName, email, phone, image, dob } = user;
    createUser(fullName, dob, phone, email, image);
  });
}

loadUsers(localUserData);
