import { createTag } from "./createTag.js";

export const createUser = (
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
    width:"250px"
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
  usersContainer.appendChild(user);
};