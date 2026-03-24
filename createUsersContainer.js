const usersContainer = document.getElementById("container");
usersContainer.style.display = "flex";
usersContainer.style.flexDirection = "row";
usersContainer.style.flexWrap="wrap"
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

// createUser("arvind")

// const pa = ["arvind kjerfhw frr fjrg rtg ", "abhay", "arohi"];
const pa = [
  {
    name: "Arvind",
    dob: "00/00/0000",
    email: "arvind@gmil.com",
    phone: "837458878572433",
    image:
      "https://img.freepik.com/free-photo/courage-man-jump-through-gap-hill-business-concept-idea_1323-262.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    name: "Abhay",
    dob: "01/01/1001",
    email: "abhay@gmil.com",
    phone: "37486457847475",
    image:
      "https://images.ctfassets.net/hrltx12pl8hq/5596z2BCR9KmT1KeRBrOQa/4070fd4e2f1a13f71c2c46afeb18e41c/shutterstock_451077043-hero1.jpg?fit=fill&w=600&h=400",
  },
  {
    name: "Arohi",
    dob: "02/02/2002",
    email: "arohi@gmil.com",
    phone: "643856439764",
    image:
      "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg",
  },
  {
    name: "Arohi",
    dob: "02/02/2002",
    email: "arohi@gmil.com",
    phone: "643856439764",
    image:
      "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg",
  },
  {
    name: "Arohi",
    dob: "02/02/2002",
    email: "arohi@gmil.com",
    phone: "643856439764",
    image:
      "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg",
  },
  {
    name: "Arohi",
    dob: "02/02/2002",
    email: "arohi@gmil.com",
    phone: "643856439764",
    image:
      "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg",
  },
  {
    name: "Arohi",
    dob: "02/02/2002",
    email: "arohi@gmil.com",
    phone: "643856439764",
    image:
      "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg",
  },
  {
    name: "Arohi",
    dob: "02/02/2002",
    email: "arohi@gmil.com",
    phone: "643856439764",
    image:
      "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg",
  },
];

pa.map((user) => {
  const { name, email, phone, image, dob } = user;
  createUser(name, dob, phone, email, image);
});
