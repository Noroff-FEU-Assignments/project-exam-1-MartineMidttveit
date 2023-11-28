import fetchPosts from "../fetchPosts.js";
import background from "../createHTML/background.js";
import modalImages from "../modalImages.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

let post;

const loadingIndicator = document.querySelectorAll(".loading-indicator");

const leftSide = document.querySelector(".left-side");

try {
  post = await fetchPosts(`/${id}?populate=*`);

  const paragraph1 = document.createElement("p");
  paragraph1.setAttribute("id", "paragraph1");
  paragraph1.textContent = post.data.attributes.paragraph;

  const exploreContent = document.createElement("div");
  exploreContent.classList.add("explore-content");
  exploreContent.classList.add("flex-column");

  const imageGrid = document.createElement("div");
  imageGrid.classList.add("image-grid");

  const firstImg = document.createElement("img");
  firstImg.classList.add("rounded");
  firstImg.classList.add("size");
  firstImg.classList.add("modal-image");
  firstImg.classList.add("firstImg");
  firstImg.src = post.data.attributes.sectionOneImg.data.attributes.url;
  firstImg.alt = post.data.attributes.sectionOneImg.data.attributes.alternativeText;

  const secondImg = document.createElement("img");
  secondImg.classList.add("rounded");
  secondImg.classList.add("size");
  secondImg.classList.add("modal-image");
  secondImg.classList.add("secondImg");
  secondImg.src = post.data.attributes.sectionTwoImg.data.attributes.url;
  secondImg.alt = post.data.attributes.sectionTwoImg.data.attributes.alternativeText

  const textContainer = document.createElement("article");

  const paragraph2 = document.createElement("p");
  paragraph2.setAttribute("id", "paragraph2");
  paragraph2.textContent = post.data.attributes.sectionOne[0].descriptionOne;

  exploreContent.append(imageGrid);
  imageGrid.append(firstImg, secondImg);
  textContainer.append(paragraph2);
  leftSide.append(paragraph1, exploreContent, textContainer);

  document.querySelector(".meta-description").content = post.data.attributes.Meta;

  const titleElement = document.querySelector("title");
  titleElement.textContent = "TWE " + "|" + " " + post.data.attributes.name;
} catch (error) {
  const container = document.createElement("div");
  container.textContent = error;
  container.classList.add("errorMessage");
  container.classList.add("flex-center");

  const errorIcon = document.createElement("i");
  errorIcon.classList.add("fa-solid");
  errorIcon.classList.add("fa-triangle-exclamation");

  container.append(errorIcon);
  
  leftSide.append(container);
  throw new Error("Error to fetch posts: " + error)
} finally {
  loadingIndicator.forEach((loader) => loader.remove()); 
}

background(post);
modalImages();
