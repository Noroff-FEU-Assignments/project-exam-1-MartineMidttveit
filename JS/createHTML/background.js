export default function background(post) {

    const background = document.querySelector(".background");
    background.alt = post.data.attributes.background.data.attributes.alternativeText;
    background.style.background = `url(${post.data.attributes.background.data.attributes.url}) no-repeat`;
    background.style.backgroundSize = "cover";

    const arrowSelection = document.createElement("div");
    arrowSelection.classList.add("arrow-selection");

    const arrows = document.createElement("a");
    arrows.classList.add("arrows");
    arrows.href = `/HTML/allposts.html`;

    const arrowLeft = document.createElement("button");
    arrowLeft.classList.add("arrow-left");
    arrowLeft.classList.add("flex-center");

    const chevron = document.createElement("i");
    chevron.classList.add("fa-solid");
    chevron.classList.add("fa-chevron-left");

    const backToPosts = document.createElement("p");
    backToPosts.textContent = "BACK TO ALL POSTS";

    const topSection = document.createElement("div");
    topSection.classList.add("top-section");
    topSection.classList.add("flex-space");

    const postImg = document.createElement("img");
    postImg.src = post.data.attributes.postImg.data.attributes.url;
    postImg.alt = post.data.attributes.postImg.data.attributes.alternativeText;
    postImg.classList.add("rounded");
    postImg.classList.add("modal-image");
    postImg.setAttribute("id", "postImg");

    const postText = document.createElement("div");
    postText.classList.add("post-text");

    const headlines = document.createElement("div");
    headlines.classList.add("headlines");
    headlines.classList.add("flex-space");

    const headlinesContainer = document.createElement("div");

    const continent = document.createElement("h2");
    continent.classList.add("turquoise")
    continent.classList.add("small-title")
    continent.setAttribute("id", "typeContinent");
    continent.textContent = post.data.attributes.type + ", " + post.data.attributes.continent;

    const blogTitle = document.createElement("h1");
    blogTitle.classList.add("medium-title");
    blogTitle.setAttribute("id", "blogTitle");
    blogTitle.textContent = post.data.attributes.name;

    const date = document.createElement("span");
    date.classList.add("date");
    date.textContent = "Published: " + post.data.attributes.date;

    const blogText = document.createElement("p");
    blogText.classList.add("blogText");
    blogText.textContent = post.data.attributes.intro;

    arrows.append(arrowLeft, backToPosts);
    arrowSelection.append(arrows);
    arrowLeft.append(chevron)
    headlinesContainer.append(continent, blogTitle);
    headlines.append(headlinesContainer, date)
    postText.append(headlines, blogText)
    topSection.append(postImg, postText)
    background.append(arrowSelection, topSection)
}

