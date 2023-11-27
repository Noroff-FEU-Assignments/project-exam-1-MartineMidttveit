export default function smallPost(data) {
    const container = document.createElement("a");
    container.classList.add("post");
    container.classList.add("size");
    container.classList.add("rounded");
  
    let postType;
  
    if (data.attributes.type == "ATTRACTIONS") {
      postType = "ATTRACTIONS";
    } else if (data.attributes.type == "TRAVELGUIDES") {
      postType = "TRAVELGUIDES";
    } else if (data.attributes.type == "GENERAL") {
      postType = "GENERAL";
    }
    container.href = `/HTML/${postType}.html?id=${data.id}`;

    const figcaption = document.createElement("figcaption");
    figcaption.classList.add("post-details");

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

    const subtitle = document.createElement("h3");
    subtitle.classList.add("small-title");
    subtitle.classList.add("turquoise");
    subtitle.textContent = data.attributes.type + ", " + data.attributes.continent;

    const figure = document.createElement("figure");
    figure.classList.add("rounded");
    figure.classList.add("size");

    const postImg = document.createElement("img");
    postImg.classList.add("size");
    postImg.classList.add("rounded");
    postImg.src = data.attributes.postImg.data.attributes.url;

    const bottomDescription = document.createElement("div");
    bottomDescription.classList.add("blogTitle");

    const title = document.createElement("h4");
    title.classList.add("blog-title");
    title.textContent = data.attributes.name;

    const readMore = document.createElement("a");
    readMore.classList.add("border-button");
    readMore.textContent = "READ MORE";
  
    container.append(figcaption, postImg, bottomDescription);
    figcaption.append(dateOne, date, subtitle);
    bottomDescription.append(title, readMore);

    return container;
  }
