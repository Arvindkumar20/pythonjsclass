const BASE_URL = "https://jsonplaceholder.typicode.com/posts";
let loading = false;

const postsContainer = document.getElementById("posts");
postsContainer.style.display = "flex";
postsContainer.style.alignItems = "center";
postsContainer.style.justifyContent = "center";

postsContainer.margin = "20px auto";
postsContainer.style.flexDirection = "row";
postsContainer.style.flexWrap = "wrap";
postsContainer.style.gap = "50px";
// postsContainer.style.marginTop = "20px";
postsContainer.style.borderRadius = "20px";
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

const showPosts = (posts) => {
  posts?.length > 0
    ? posts?.map((post) => {
        return (postsContainer.innerHTML += `<div style='padding:20px; border:1px solid red;width:370px; height:200px'> <h1>${post.id}</h1>
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        </div>`);
      })
    : (postsContainer.innerHTML = `<h1>Posts are not available</h1>`);
};

const loadPosts = async () => {
  loading = true;
  try {
    const response = await axios.get(BASE_URL);
    console.log(response);
    showPosts(response.data);
  } catch (error) {
    console.log(error);
  } finally {
    loading = true;
  }
};
loadPosts();
