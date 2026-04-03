// const f = fs.writeFileSync("test.txt", "hello how are you");
// console.log(f)//not working with dom

// const fileUpload = document.getElementById("fileUpload");
// fileUpload.addEventListener("change", (e) => {
//   const file = e.target.files[0];
//   if (!file) return;

//   const reader = new FileReader();
//   reader.onload = (e) => {
//   posts.innerHTML=e.target.result;
//   };

// });

// document.getElementById("fileUpload").addEventListener("change", async (e) => {
//   const file = e.target.files[0];

//   if (!file) return;
// console.log(file)
//   const content = await file.text(); // simple modern way
//  posts.innerHTML=content;
//   console.log(content);
// });

let currentPage = 1;
let currentPdf = null;

fileUpload.addEventListener("change", async (e) => {
  const file = e.target.files[0];
  if (!file) return;
  if (file.type === "application/pdf") {
    forPdf(file);
  } else if (file.type == "text/html") {
    const content = await file.text(); // simple modern way
    posts.innerHTML = content;
  } else {
    const content = await file.text(); // simple modern way
    posts.innerHTML = content;
  }

  console.log(file);
});

async function forPdf(file) {
  const fileReader = new FileReader();

  fileReader.onload = async function () {
    const typedArray = new Uint8Array(this.result);

    const pdf = await pdfjsLib.getDocument(typedArray).promise;
    currentPdf = pdf;

    console.log("Total Pages:", pdf.numPages);

    currentPage = 1;
    renderPage(currentPdf, currentPage);

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();
      const text = textContent.items.map((item) => item.str).join(" ");
      console.log(`Page ${i}:`, text);
    }
  };

  fileReader.readAsArrayBuffer(file);
}
// Navigation
document.getElementById("next").addEventListener("click", () => {
  if (currentPage < currentPdf.numPages) {
    currentPage++;
    renderPage(currentPdf, currentPage);
  }
});

document.getElementById("prev").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    renderPage(currentPdf, currentPage);
  }
});

async function renderPage(pdf, pageNumber) {
  const page = await pdf.getPage(pageNumber);
  const viewport = page.getViewport({ scale: 1.5 });
  const canvas = document.getElementById("pdfRender");
  const ctx = canvas.getContext("2d");
  canvas.height = viewport.height;
  canvas.width = viewport.width;

  await page.render({
    canvasContext: ctx,
    viewport: viewport,
  }).promise;
}
