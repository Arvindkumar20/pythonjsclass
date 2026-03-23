const usersContainer = document.getElementById("container");
usersContainer.style.display="flex";
usersContainer.style.gap="20px";
usersContainer.style.marginTop="20px";
usersContainer.style.borderRadius="20px";

const createTag = (name, style) => {
  const tag = document.createElement(name);
  //   styling
  tag.style.color = style?.color;
  tag.style.border = style?.border;
  tag.style.background = style?.background;
  tag.style.padding = style?.padding;
  tag.style.margin = style?.margin;
  tag.style.borderRadius = style?.borderRadius;
  return tag;
};

const createUser = (name, dob = "00/00/0000", phone = "000000....", email) => {
  const user = createTag("div", { border: "2px solid red" ,padding:"20px 20px",borderRadius:"20px"});
  console.log(user);
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
  usersContainer.appendChild(user);
};

// createUser("arvind")

const pa = ["arvind", "abhay", "arohi"];

pa.map((user) => createUser(user));
