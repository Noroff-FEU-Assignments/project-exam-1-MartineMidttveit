
export default function featuredPost(data) {
    const container = document.createElement("a");
    container.classList.add("travelguide");
    container.classList.add("rounded");
    console.log(data)
    container.href = `/HTML/TRAVELGUIDES.html?id=${data.id}`; 

    const postImgFigure = document.createElement("figure");
    postImgFigure.classList.add("rounded");
    postImgFigure.classList.add("travelguideImg");

    const postImg = document.createElement("img");
    postImg.src = data.attributes.postImg.data.attributes.url;
    postImg.classList.add("size");
    postImg.classList.add("rounded");

    const postDetails = document.createElement("div");
    postDetails.classList.add("post-details");

    const dateObject = new Date(data.attributes.date);
    const day = dateObject.getDate();
    const formattedDay = day < 10 ? "0" + day + "." : day + ".";

    const dateOne = document.createElement("span");
    dateOne.classList.add("day");
    dateOne.textContent = formattedDay;

    const date = document.createElement("span");
    date.classList.add("date");
    const month = dateObject.toLocaleString('default', { month: 'long' });
    const year = dateObject.getFullYear();
    date.textContent = month + " " + year;

    const postCategory = document.createElement("h3");
    postCategory.classList.add("small-title");
    postCategory.classList.add("turquoise");
    postCategory.textContent = data.attributes.type + ", " + data.attributes.continent;

    const mainText = document.createElement("div");
    mainText.classList.add("flex-column");
    mainText.classList.add("mainText");

    const postTitle = document.createElement("h4");
    postTitle.classList.add("blog-title");
    postTitle.textContent = data.attributes.name;

    const paragraph = document.createElement("p");
    const introText = data.attributes.intro
    const number = 420;
    
    if (data.attributes.intro.length > number) {
        paragraph.textContent = introText.slice(0, number) + "..."}
    else paragraph.textContent = data.attributes.intro;

    const readMore = document.createElement("a");
    readMore.classList.add("border-button");
    readMore.textContent = "READ MORE";

    postImgFigure.append(postImg);
    mainText.append(postDetails, postTitle, paragraph, readMore);
    postDetails.append(dateOne, date, postCategory);
    container.append(postImgFigure, mainText);

    return container;
}

const loadingIndicator = document.querySelector(".loading-indicator");
loadingIndicator.remove();

