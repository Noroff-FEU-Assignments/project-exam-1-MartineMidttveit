import fetchPosts from "../fetchPosts.js";
import background from "../createHTML/background.js";
import modalImages from "../modalImages.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
let post;

const loadingIndicator = document.querySelectorAll(".loading-indicator");
loadingIndicator.forEach((loader) => loader.remove()); 

const leftSide = document.querySelector(".left-side");
const moreInfo = document.querySelector(".moreInfo");

try {
  post = await fetchPosts(`/${id}?populate=*`);

  const paragraph1 = document.createElement("p");
  paragraph1.setAttribute("id", "paragraph1");
  paragraph1.textContent = post.data.attributes.paragraph;

  const exploreContent = document.createElement("div");
  exploreContent.classList.add("explore-content");
  exploreContent.classList.add("flex-column");

  const firstImg = document.createElement("img");
  firstImg.classList.add("rounded");
  firstImg.classList.add("size");
  firstImg.classList.add("modal-image");
  firstImg.classList.add("img-1");
  firstImg.src = post.data.attributes.sectionTwoImg.data.attributes.url;
  firstImg.alt = post.data.attributes.sectionTwoImg.data.attributes.alternativeText;

  const article1 = document.createElement("article");

  const subtitle1 = document.createElement("h2");
  subtitle1.classList.add("small-title");
  subtitle1.classList.add("turquoise");
  subtitle1.setAttribute("id", "subtitle1");
  subtitle1.textContent = post.data.attributes.sectionOne[0].subtitle;

  const subtitle2 = document.createElement("h3");
  subtitle2.classList.add("blog-title");
  subtitle2.setAttribute("id", "subtitle2");
  subtitle2.textContent = post.data.attributes.sectionOne[0].title;

  const paragraph2 = document.createElement("p");
  paragraph2.setAttribute("id", "paragraph2");
  paragraph2.textContent = post.data.attributes.sectionOne[0].descriptionOne;

  const imageGrid = document.createElement("div");
  imageGrid.classList.add("image-grid");

  const image1 = document.createElement("img");
  image1.classList.add("rounded");
  image1.classList.add("size");
  image1.classList.add("modal-image");
  image1.classList.add("firstImg");
  image1.src = post.data.attributes.sectionTwoImg.data.attributes.url;
  image1.alt = post.data.attributes.sectionTwoImg.data.attributes.alternativeText;

  const image2 = document.createElement("img");
  image2.classList.add("rounded");
  image2.classList.add("size");
  image2.classList.add("modal-image");
  image2.classList.add("secondImg");
  image2.src = post.data.attributes.sectionThreeImg.data.attributes.url;
  image2.alt = post.data.attributes.sectionThreeImg.data.attributes.alternativeText;

  const image3 = document.createElement("img");
  image3.classList.add("rounded");
  image3.classList.add("size");
  image3.classList.add("modal-image");
  image3.classList.add("thirdImg");
  image3.src = post.data.attributes.sectionFourImg.data.attributes.url;
  image3.alt = post.data.attributes.sectionFourImg.data.attributes.alternativeText;

  const article2 = document.createElement("article");
  article2.classList.add("bottom-text");

  const paragraph3 = document.createElement("p");
  paragraph3.setAttribute("id", "paragraph3");
  paragraph3.textContent = post.data.attributes.sectionTwo[0].descriptionOne;

  const subtitle3 = document.createElement("h2");
  subtitle3.classList.add("small-title");
  subtitle3.classList.add("turquoise");
  subtitle3.setAttribute("id", "subtitle3")
  subtitle3.textContent = post.data.attributes.sectionThree[0].subtitle;

  const subtitle4 = document.createElement("h3");
  subtitle4.classList.add("blog-title");
  subtitle4.setAttribute("id", "subtitle4");
  subtitle4.textContent = post.data.attributes.sectionThree[0].title;

  const paragraph4 = document.createElement("p");
  paragraph4.setAttribute("id", "paragraph4");
  paragraph4.textContent = post.data.attributes.sectionThree[0].descriptionOne;

  imageGrid.append(image1, image2, image3);
  exploreContent.append(article1, imageGrid, article2)
  article1.append(subtitle1, subtitle2, paragraph2)
  article2.append(paragraph3, subtitle3, subtitle4, paragraph4)
  leftSide.append(paragraph1, exploreContent);

  // MORE INFO //

  const infoHeadline = document.createElement("h2");
  infoHeadline.classList.add("small-title");
  infoHeadline.classList.add("turquoise");
  infoHeadline.textContent = "MORE INFORMATION";

  const infoTitle = document.createElement("h3");
  infoTitle.classList.add("medium-title");
  infoTitle.setAttribute("id", "infoTitle");
  infoTitle.textContent = post.data.attributes.attractionsInfo[0].title;

  const infoGrid = document.createElement("div");
  infoGrid.classList.add("info-grid");

  // INFO 1

  const information1 = document.createElement("div");
  information1.classList.add("information");

  const location = document.createElement("div");
  location.classList.add("info-title");

  const locationDot = document.createElement("i");
  locationDot.classList.add("fa-solid")
  locationDot.classList.add("fa-location-dot")
  locationDot.classList.add("turquoise");

  const locationText = document.createElement("h4");
  locationText.textContent = post.data.attributes.attractionsInfo[0].location;

  const locate = document.createElement("span");
  locate.setAttribute("id", "location");

  const locText = document.createElement("p");
  locText.setAttribute("id", "locationText");
  locText.textContent = post.data.attributes.attractionsInfo[0].locationText;

  // INFO 2 

  const information2 = document.createElement("div");
  information2.classList.add("information");

  const rating = document.createElement("div");
  rating.classList.add("info-title");

  const ratingIcon = document.createElement("i");
  ratingIcon.classList.add("fa-solid")
  ratingIcon.classList.add("fa-heart")
  ratingIcon.classList.add("turquoise");

  const myRating = document.createElement("h4");
  myRating.textContent = "MY RATING: " + post.data.attributes.attractionsInfo[0].myRating;

  const rated = document.createElement("span");
  rated.setAttribute("id", "rating");

  const ratingText = document.createElement("p");
  ratingText.setAttribute("id", "myRating");
  ratingText.textContent = post.data.attributes.attractionsInfo[0].myRatingText;

  // INFO 3

  const information3 = document.createElement("div");
  information3.classList.add("information");

  const estTime = document.createElement("div");
  estTime.classList.add("info-title");

  const timeIcon = document.createElement("i");
  timeIcon.classList.add("fa-solid")
  timeIcon.classList.add("fa-clock")
  timeIcon.classList.add("turquoise");

  const estTimeHeadline = document.createElement("h4");
  estTimeHeadline.textContent = "ESTIMATED TIME: " + post.data.attributes.attractionsInfo[0].estTime;

  const estimated = document.createElement("span");
  estimated.setAttribute("id", "time");

  const estTimeText = document.createElement("p");
  estTimeText.setAttribute("id", "timeText");
  estTimeText.textContent = post.data.attributes.attractionsInfo[0].estTimeText;

  // INFO 4

  const information4 = document.createElement("div");
  information4.classList.add("information");
  information4.classList.add("priceAge");
  information4.classList.add("flex-column");

  const price = document.createElement("div");
  price.classList.add("info-title");

  const priceIcon = document.createElement("i");
  priceIcon.classList.add("fa-solid")
  priceIcon.classList.add("fa-tag")
  priceIcon.classList.add("turquoise");

  const priceRange = document.createElement("h4");
  priceRange.textContent = "PRICE RANGE: " + post.data.attributes.attractionsInfo[0].priceRange;

  const prices = document.createElement("span");
  prices.setAttribute("id", "price");

  const ageLimit = document.createElement("div");
  ageLimit.classList.add("info-title");

  const ageIcon = document.createElement("i");
  ageIcon.classList.add("fa-solid")
  ageIcon.classList.add("fa-circle-exclamation")
  ageIcon.classList.add("turquoise");

  const ageLimitation = document.createElement("h4");
  ageLimitation.textContent = "AGE LIMIT: " + post.data.attributes.attractionsInfo[0].ageLimit;

  const ages = document.createElement("span");
  ages.setAttribute("id", "ageLimit");

  // APPENDS

  locationText.append(locate);
  myRating.append(rated);
  estTimeHeadline.append(estimated);
  priceRange.append(prices);
  ageLimitation.append(ages);

  infoGrid.append(information1, information2, information3, information4);
  moreInfo.append(infoHeadline, infoTitle, infoGrid);

  information1.append(location, locText);
  location.append(locationDot, locationText);

  information2.append(rating, ratingText);
  rating.append(ratingIcon, myRating);

  information3.append(estTime, estTimeText);
  estTime.append(timeIcon, estTimeHeadline);

  information4.append(price, ageLimit);
  price.append(priceIcon, priceRange);
  ageLimit.append(ageIcon, ageLimitation);

} catch (error) {
  leftSide.textContent = error;
  moreInfo.textContent = error;
  throw new Error("Error to fetch posts: " + error)
}

document.querySelector(".meta-description").content = post.data.attributes.Meta;

const titleElement = document.querySelector("title");
titleElement.textContent = "TWE " + "|" + " " + post.data.attributes.name;

background(post);
modalImages();
