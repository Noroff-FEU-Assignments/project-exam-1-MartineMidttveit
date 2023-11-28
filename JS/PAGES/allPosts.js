import fetchPosts from "../fetchPosts.js";
import smallPost from "../createHTML/smallPost.js";

const postGrid = document.querySelector(".post-grid");
const viewMore = document.querySelector(".viewMore");
const sortBy = document.querySelector("#sortBy");

const loadingIndicator = document.querySelector(".loading-indicator");

try {
  const  posts = await fetchPosts("?populate=postImg");
  posts.data.sort((a,b) => new Date(b.attributes.date) - new Date(a.attributes.date))

  posts.data.map((post, i) => {
    const currentPost = smallPost(post);
    if (i <= 8) postGrid.append(currentPost);
  })

// VIEW MORE BUTTON

  let currPage = 1;
  let filteredAndSortedPosts = posts.data;
  
  viewMore.addEventListener('click', () => {
    const fromIndex = currPage * 9;
    const toIndex = fromIndex + 9;
  
    for (let i = fromIndex; i < filteredAndSortedPosts.length && i < toIndex; i++) {
      postGrid.append(smallPost(filteredAndSortedPosts[i]));
    }
  
    currPage++;
  
    if (toIndex >= filteredAndSortedPosts.length) {
      viewMore.style.display = "none";
    }
  });

// SORT BY

  sortBy.addEventListener("change", (e) => {
    const selectedYear = e.target.value;
  
    filteredAndSortedPosts = posts.data.filter((post) => {
      const postYear = new Date(post.attributes.date).getFullYear().toString();
      return selectedYear === "sortingOption" ? true : postYear === selectedYear;
    });
  
    postGrid.innerHTML = "";
    filteredAndSortedPosts.slice(0, 9).forEach((post) => {
      postGrid.appendChild(smallPost(post));
    });
  
    currPage = 1;
    viewMore.style.display = filteredAndSortedPosts.length <= 9 ? "none" : "block";
  });

  // FILTER

  const generalPosts = posts.data.filter(post => {
      if(post.attributes.type === "GENERAL") return post;
  })

  const attractions = posts.data.filter(post => {
      if(post.attributes.type === "ATTRACTIONS") return post;
  })

  const travelGuides = posts.data.filter(post => {
      if(post.attributes.type === "TRAVELGUIDES") return post;
  })

  const generalBtn = document.querySelector("#general");
  const attractionsBtn = document.querySelector("#attractions");
  const travelGuidesBtn = document.querySelector("#travelGuides");
  const allPostsBtn = document.querySelector("#allPosts");

  const filterBtns = [generalBtn, attractionsBtn, travelGuidesBtn, allPostsBtn];

  filterBtns.forEach((filterBtn) => {
    filterBtn.addEventListener('click', (e) => {
      postGrid.textContent = "";
  
      filterBtns.forEach(btn => btn.classList.remove("active-category"));
      filterBtn.classList.add("active-category");
  
      if (e.target.textContent === "GENERAL") {
        filteredAndSortedPosts = generalPosts;
      } else if (e.target.textContent === "ATTRACTIONS") {
        filteredAndSortedPosts = attractions;
      } else if (e.target.textContent === "TRAVEL GUIDES") {
        filteredAndSortedPosts = travelGuides;
      } else {
        filteredAndSortedPosts = posts.data;
      }
  
      filteredAndSortedPosts.slice(0, 9).forEach((post) => {
        postGrid.appendChild(smallPost(post));
      });
  
      currPage = 1;
      viewMore.style.display = filteredAndSortedPosts.length <= 9 ? "none" : "block";
    });
  });

  // HERO

  const africaPosts = posts.data.filter(post => {
      if(post.attributes.continent === "Africa") return post;
  })

  const subtitle = document.querySelector("#type");
  const blogTitle = document.querySelector("#blogTitle");
  const allImages = document.querySelector(".all-images");

  for (let i = 0; i < 7; i++ ) {
      const heroPost = document.createElement("a");
      heroPost.classList.add("hero-posts");
      heroPost.href = `/HTML/${africaPosts[i].attributes.type}.html?id=${africaPosts[i].id}`;

      const heroImage = document.createElement("img");
      heroImage.dataset.title = blogTitle.textContent = africaPosts[i].attributes.name;
      heroImage.dataset.subtitle = subtitle.textContent = africaPosts[i].attributes.type + ", " + africaPosts[i].attributes.continent;
      heroImage.classList.add("hero-image");
      heroImage.classList.add("rounded");
      heroImage.classList.add(`img-${i + 1}`)
      
      heroImage.src = africaPosts[i].attributes.postImg.data.attributes.url;
      heroPost.append(heroImage);
      allImages.appendChild(heroPost)
  }

  // BUTTONS HERO

  const imageContainer = document.querySelector(".all-images");
  const images = document.querySelectorAll(".hero-image");
  const arrowLeft = document.querySelector(".arrow-left");
  const arrowRight = document.querySelector(".arrow-right");

  subtitle.textContent = africaPosts[0].attributes.type + ", " + africaPosts[0].attributes.continent;
  blogTitle.textContent = africaPosts[0].attributes.name;

  images.forEach((img, i) => {
    img.value = i + 1;
  });

  const nextImage = function () {
    images.forEach((img) => {
      img.classList.remove(`img-${img.value}`);

      if (img.value === 1) {
        img.value = 7;
      } else img.value--;

      if (img.value === 1) {
          subtitle.textContent = img.dataset.subtitle;
          blogTitle.textContent = img.dataset.title;
      }
      img.classList.add(`img-${img.value}`);
    });
  };

  const prevImage = function () {
    images.forEach((img) => {
      img.classList.remove(`img-${img.value}`);

      if (img.value === images.length) {
        img.value = 1;
      } else {
        img.style.display = "inline";
        img.value++;
      }
      if (img.value === 1) {
          subtitle.textContent = img.dataset.subtitle;
          blogTitle.textContent = img.dataset.title;
      }
      img.classList.add(`img-${img.value}`);
    });
  };
  arrowRight.addEventListener("click", nextImage);
  arrowLeft.addEventListener("click", prevImage);

} catch (error) {
  const container = document.createElement("div");
  container.textContent = error;
  container.classList.add("errorMessage");
  container.classList.add("flex-center");

  const errorIcon = document.createElement("i");
  errorIcon.classList.add("fa-solid");
  errorIcon.classList.add("fa-triangle-exclamation");

  container.append(errorIcon);
  postGrid.append(container);
  throw new Error("Error to fetch posts: " + error)
} finally {
  postGrid.classList.remove("loading")
  loadingIndicator.remove();
}