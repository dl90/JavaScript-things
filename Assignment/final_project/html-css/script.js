/**
 * @author Don (dl90)
 */

const homepage = "/"
const beforeLink = "/bNXE0HIDrrmixWb6-before";
const afterLink = "/oTIu5mmWd4f3Hb0z-after";
const tagURL = "/B0CRC9zlpfvWo55T-tags";

const submitButton = document.querySelector(".form");
const backButton = document.querySelector(".back-button");

const showImages = document.querySelector(".impage-insert");
const imageAnalysis = document.querySelector(".impage-analysis");

if (backButton !== null) {
  backButton.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.replace(homepage);
  // window.history.back();
  })
}

if (submitButton !== null) {
  submitButton.addEventListener("submit", () => {
  })
}

if (showImages !== null) {
  showImages.addEventListener("click", () => {
    const injector = document.querySelector(".img-container");
    injector.innerHTML = "";

    const beforeImg = document.createElement("img");
    beforeImg.setAttribute("class", "image-before");
    beforeImg.setAttribute("src", beforeLink);
    injector.appendChild(beforeImg);

    const afterImg = document.createElement("img");
    afterImg.setAttribute("class", "image-after");
    afterImg.setAttribute("src", afterLink);
    injector.appendChild(afterImg);
  })
}

if (imageAnalysis !== null) {
  imageAnalysis.addEventListener("click", () => {

    const analysis = document.querySelector(".analysis");
    analysis.innerHTML = "";

    const imageTagContainer = document.createElement("ul");
    imageTagContainer.setAttribute("class", "image-tag-container");
    analysis.appendChild(imageTagContainer);

    // fetchFromServer();

    try {
      fetch(tagURL , { method: 'GET' })
        .then(data => data.json()
        .then(arr => {
          if (arr.length > 0) {
            for(ele of arr) {
              if(imageTagContainer !== null) {
                const imageTag = document.createElement("li");
                imageTag.setAttribute("class", "image-tag");
                imageTagContainer.appendChild(imageTag);

                const textNode = document.createTextNode(ele);
                imageTag.appendChild(textNode);
              }
            }
          } else {
            analysis.textContent = "No Tags Present";
          }
        }))
    } catch(error) {
      console.log("Loading Error!!!", error.message)
    }

  })
}

// function fetchFromServer() {
//   try {
//     fetch(tagURL , { method: 'GET' })
//       .then(data => data.json()
//       .then(arr => {
//         console.log(arr);
//         loop(arr);
//       }))
//   } catch(error) {
//     console.log("Loading Error!!!", error.message)
//   }
// }

// function loop(arr) {
//   const imageTagContainer = document.querySelector("image-tag-container");
//   const analysis = document.querySelector(".analysis");

//   if (arr.length > 0) {
//     for(ele of arr) {
//       if(imageTagContainer !== null) {
//         const imageTag = document.createElement("li");
//         imageTag.setAttribute("class", "image-tag");
//         imageTagContainer.appendChild(imageTag);

//         const textNode = document.createTextNode(ele);
//         console.log(textNode);
//         imageTag.appendChild(textNode);
//       }
//     }
//   } else {
//     analysis.textContent = "No Tags Present";
//   }
// }