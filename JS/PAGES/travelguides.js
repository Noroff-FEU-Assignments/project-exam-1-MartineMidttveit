import fetchPosts from "../fetchPosts.js";
import background from "../createHTML/background.js"
import modalImages from "../modalImages.js"

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

let post;

const loadingIndicator = document.querySelectorAll(".loading-indicator");
loadingIndicator.forEach((loader) => loader.remove()); 

const leftSide = document.querySelector(".left-side");

try {
  post = await fetchPosts(`/${id}?populate=*`);

  const paragraph1 = document.createElement("p");
  paragraph1.setAttribute = ("id", "paragraph1");
  paragraph1.textContent = post.data.attributes.paragraph;

  const contentList = document.createElement("div");
  contentList.classList.add("explore-content");
  contentList.classList.add("flex-column");

  const contentHeadline = document.createElement("h2");
  contentHeadline.textContent = "CONTENT:"

  const uList = document.createElement("ul");

  const listItem1 = document.createElement("li");
  listItem1.classList.add("turquoise");

  const aElement1 = document.createElement("a");
  aElement1.href = "#first";
  aElement1.classList.add("turquoise");
  aElement1.classList.add("li1");
  aElement1.textContent = post.data.attributes.content[0].one;

  const listItem2 = document.createElement("li");
  listItem2.classList.add("turquoise");

  const aElement2 = document.createElement("a");
  aElement2.href = "#second";
  aElement2.classList.add("turquoise");
  aElement2.classList.add("li2");
  aElement2.textContent = post.data.attributes.content[0].two;

  const listItem3 = document.createElement("li");
  listItem3.classList.add("turquoise");

  const aElement3 = document.createElement("a");
  aElement3.href = "#third";
  aElement3.classList.add("turquoise");
  aElement3.classList.add("li3");
  aElement3.textContent = post.data.attributes.content[0].three;

  const listItem4 = document.createElement("li");
  listItem4.classList.add("turquoise");

  const aElement4 = document.createElement("a");
  aElement4.href = "#fourth";
  aElement4.classList.add("turquoise");
  aElement4.classList.add("li4");
  aElement4.textContent = post.data.attributes.content[0].four;

  const listItem5 = document.createElement("li");
  listItem5.classList.add("turquoise");

  const aElement5 = document.createElement("a");
  aElement5.href = "#fifth";
  aElement5.classList.add("turquoise");
  aElement5.classList.add("li5");
  aElement5.textContent = post.data.attributes.content[0].five;

  const listItem6 = document.createElement("li");
  listItem6.classList.add("turquoise");

  const aElement6 = document.createElement("a");
  aElement6.href = "#sixth";
  aElement6.classList.add("turquoise");
  aElement6.classList.add("li6");
  aElement6.textContent = post.data.attributes.content[0].six;

  // TOP RATED 1 // 

  const topRated1 = document.createElement("div");
  topRated1.classList.add("top-rated");
  topRated1.classList.add("flex-column");
  topRated1.setAttribute("id", "first");

  const firstImg = document.createElement("img");
  firstImg.src = post.data.attributes.sectionOneImg.data.attributes.url;
  firstImg.alt = post.data.attributes.sectionOneImg.data.attributes.alternativeText;
  firstImg.classList.add("rounded");
  firstImg.classList.add("modal-image");
  firstImg.classList.add("size");
  firstImg.setAttribute("id", "firstImg");

  const circle = document.createElement("span");
  circle.classList.add("circle");
  circle.classList.add("flex-center");
  circle.textContent = "1";

  const articleInfo = document.createElement("article");
  articleInfo.classList.add("info");
  articleInfo.classList.add("rounded");

  const infoHeadline = document.createElement("h3");
  infoHeadline.classList.add("small-title");
  infoHeadline.setAttribute("id", "li1");
  infoHeadline.textContent = "1. " + post.data.attributes.sectionOne[0].title;

  const paragraph2 = document.createElement("p");
  paragraph2.setAttribute("id", "paragraph2")
  paragraph2.textContent = post.data.attributes.sectionOne[0].descriptionOne;

  const paragraph3 = document.createElement("p");
  paragraph3.setAttribute("id", "paragraph3")
  paragraph3.textContent = post.data.attributes.sectionOne[0].descriptionTwo;

  // TOP RATED 2 // 

  const topRated2 = document.createElement("div");
  topRated2.classList.add("top-rated");
  topRated2.classList.add("flex-column");
  topRated2.setAttribute("id", "second");

  const secondImg = document.createElement("img");
  secondImg.src = post.data.attributes.sectionTwoImg.data.attributes.url;
  secondImg.alt = post.data.attributes.sectionTwoImg.data.attributes.alternativeText;
  secondImg.classList.add("rounded");
  secondImg.classList.add("modal-image");
  secondImg.classList.add("size");
  secondImg.setAttribute("id", "secondImg");

  const circle2 = document.createElement("span");
  circle2.classList.add("circle");
  circle2.classList.add("flex-center");
  circle2.textContent = "2";

  const articleInfo2 = document.createElement("article");
  articleInfo2.classList.add("info");
  articleInfo2.classList.add("rounded");

  const infoHeadline2 = document.createElement("h3");
  infoHeadline2.classList.add("small-title");
  infoHeadline2.setAttribute("id", "li2");
  infoHeadline2.textContent = "2. " + post.data.attributes.sectionTwo[0].title;

  const paragraph4 = document.createElement("p");
  paragraph4.setAttribute("id", "paragraph4")
  paragraph4.textContent = post.data.attributes.sectionTwo[0].descriptionOne;

  const paragraph5 = document.createElement("p");
  paragraph5.setAttribute("id", "paragraph5")
  paragraph5.textContent = post.data.attributes.sectionTwo[0].descriptionTwo;

  // TOP RATED 3 // 

  const topRated3 = document.createElement("div");
  topRated3.classList.add("top-rated");
  topRated3.classList.add("flex-column");
  topRated3.setAttribute("id", "third");

  const thirdImg = document.createElement("img");
  thirdImg.src = post.data.attributes.sectionThreeImg.data.attributes.url;
  thirdImg.alt = post.data.attributes.sectionThreeImg.data.attributes.alternativeText;
  thirdImg.classList.add("rounded");
  thirdImg.classList.add("modal-image");
  thirdImg.classList.add("size");
  thirdImg.setAttribute("id", "thirdImg");

  const circle3 = document.createElement("span");
  circle3.classList.add("circle");
  circle3.classList.add("flex-center");
  circle3.textContent = "3";

  const articleInfo3 = document.createElement("article");
  articleInfo3.classList.add("info");
  articleInfo3.classList.add("rounded");

  const infoHeadline3 = document.createElement("h3");
  infoHeadline3.classList.add("small-title");
  infoHeadline3.setAttribute("id", "li3");
  infoHeadline3.textContent = "3. " + post.data.attributes.sectionThree[0].title;

  const paragraph6 = document.createElement("p");
  paragraph6.setAttribute("id", "paragraph6")
  paragraph6.textContent = post.data.attributes.sectionThree[0].descriptionOne;

  const paragraph7 = document.createElement("p");
  paragraph7.setAttribute("id", "paragraph7")
  paragraph7.textContent = post.data.attributes.sectionThree[0].descriptionTwo;

  // TOP RATED 4 // 

  const topRated4 = document.createElement("div");
  topRated4.classList.add("top-rated");
  topRated4.classList.add("flex-column");
  topRated4.setAttribute("id", "fourth");

  const fourthImg = document.createElement("img");
  fourthImg.src = post.data.attributes.sectionFourImg.data.attributes.url;
  fourthImg.alt = post.data.attributes.sectionFourImg.data.attributes.alternativeText;
  fourthImg.classList.add("rounded");
  fourthImg.classList.add("modal-image");
  fourthImg.classList.add("size");
  fourthImg.setAttribute("id", "fourthImg");

  const circle4 = document.createElement("span");
  circle4.classList.add("circle");
  circle4.classList.add("flex-center");
  circle4.textContent = "4";

  const articleInfo4 = document.createElement("article");
  articleInfo4.classList.add("info");
  articleInfo4.classList.add("rounded");

  const infoHeadline4 = document.createElement("h3");
  infoHeadline4.classList.add("small-title");
  infoHeadline4.setAttribute("id", "li4");
  infoHeadline4.textContent = "4. " + post.data.attributes.sectionFour[0].title;

  const paragraph8 = document.createElement("p");
  paragraph8.setAttribute("id", "paragraph8")
  paragraph8.textContent = post.data.attributes.sectionFour[0].descriptionOne;

  const paragraph9 = document.createElement("p");
  paragraph9.setAttribute("id", "paragraph9")
  paragraph9.textContent = post.data.attributes.sectionFour[0].descriptionTwo;

  // TOP RATED 5 // 

  const topRated5 = document.createElement("div");
  topRated5.classList.add("top-rated");
  topRated5.classList.add("flex-column");
  topRated5.setAttribute("id", "fifth");

  const fifthImg = document.createElement("img");
  fifthImg.src = post.data.attributes.sectionFiveImg.data.attributes.url;
  fifthImg.alt = post.data.attributes.sectionFiveImg.data.attributes.alternativeText;
  fifthImg.classList.add("rounded");
  fifthImg.classList.add("modal-image");
  fifthImg.classList.add("size");
  fifthImg.setAttribute("id", "fifthImg");

  const circle5 = document.createElement("span");
  circle5.classList.add("circle");
  circle5.classList.add("flex-center");
  circle5.textContent = "5";

  const articleInfo5 = document.createElement("article");
  articleInfo5.classList.add("info");
  articleInfo5.classList.add("rounded");

  const infoHeadline5 = document.createElement("h3");
  infoHeadline5.classList.add("small-title");
  infoHeadline5.setAttribute("id", "li5");
  infoHeadline5.textContent = "5. " + post.data.attributes.sectionFive[0].title;

  const paragraph10 = document.createElement("p");
  paragraph10.setAttribute("id", "paragraph10")
  paragraph10.textContent = post.data.attributes.sectionFive[0].descriptionOne;

  const paragraph11 = document.createElement("p");
  paragraph11.setAttribute("id", "paragraph11")
  paragraph11.textContent = post.data.attributes.sectionFive[0].descriptionTwo;

  // TOP RATED 6 // 

  const topRated6 = document.createElement("div");
  topRated6.classList.add("top-rated");
  topRated6.classList.add("flex-column");
  topRated6.setAttribute("id", "sixth");

  const sixthImg = document.createElement("img");
  sixthImg.src = post.data.attributes.sectionSixImg.data.attributes.url;
  sixthImg.alt = post.data.attributes.sectionSixImg.data.attributes.alternativeText;
  sixthImg.classList.add("rounded");
  sixthImg.classList.add("modal-image");
  sixthImg.classList.add("size");
  sixthImg.setAttribute("id", "sixthImg");

  const circle6 = document.createElement("span");
  circle6.classList.add("circle");
  circle6.classList.add("flex-center");
  circle6.textContent = "6";

  const articleInfo6 = document.createElement("article");
  articleInfo6.classList.add("info");
  articleInfo6.classList.add("rounded");

  const infoHeadline6 = document.createElement("h3");
  infoHeadline6.classList.add("small-title");
  infoHeadline6.setAttribute("id", "li6");
  infoHeadline6.textContent = "6. " + post.data.attributes.sectionSix[0].title;

  const paragraph12 = document.createElement("p");
  paragraph12.setAttribute("id", "paragraph12")
  paragraph12.textContent = post.data.attributes.sectionSix[0].descriptionOne;

  const paragraph13 = document.createElement("p");
  paragraph13.setAttribute("id", "paragraph13")
  paragraph13.textContent = post.data.attributes.sectionSix[0].descriptionTwo;

  // APPENDS //

  leftSide.append(paragraph1, contentList, topRated1, topRated2, topRated3, topRated4, topRated5, topRated6)
  contentList.append(contentHeadline, uList)

  listItem1.append(aElement1);
  listItem2.append(aElement2);
  listItem3.append(aElement3);
  listItem4.append(aElement4);
  listItem5.append(aElement5);
  listItem6.append(aElement6);

  uList.append(listItem1, listItem2, listItem3, listItem4, listItem5, listItem6)

  topRated1.append(firstImg, circle, articleInfo)
  articleInfo.append(infoHeadline, paragraph2, paragraph3)

  topRated2.append(secondImg, circle2, articleInfo2)
  articleInfo2.append(infoHeadline2, paragraph4, paragraph5)

  topRated3.append(thirdImg, circle3, articleInfo3)
  articleInfo3.append(infoHeadline3, paragraph6, paragraph7)

  topRated4.append(fourthImg, circle4, articleInfo4)
  articleInfo4.append(infoHeadline4, paragraph8, paragraph9)

  topRated5.append(fifthImg, circle5, articleInfo5)
  articleInfo5.append(infoHeadline5, paragraph10, paragraph11)

  topRated6.append(sixthImg, circle6, articleInfo6)
  articleInfo6.append(infoHeadline6, paragraph12, paragraph13)
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
}

background(post);
modalImages();

document.querySelector(".meta-description").content = post.data.attributes.Meta;

const titleElement = document.querySelector("title");
titleElement.textContent = "TWE " + "|" + " " + post.data.attributes.name;