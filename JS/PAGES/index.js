import fetchPosts from "../fetchPosts.js";
import smallPost from "../createHTML/smallPost.js";
import featuredPost from "../createHTML/featuredPost.js";
import changeWord from "../changeWord.js";

const loadingIndicator = document.querySelectorAll(".loading-indicator");

const allPosts = document.querySelector(".all-posts-container");
const postsContainer = document.querySelector(".all-latest-posts");
const latestPrevBtn = document.querySelector(".latest-arrow-left");
const latestNextBtn = document.querySelector(".latest-arrow-right");
const featuredContainer = document.querySelector(".featured-travelguide");

let posts;

try {
  const postsData = await fetchPosts("?populate=postImg");
  posts = postsData.data;

  posts.sort((a, b) => {
    return new Date(b.attributes.date) - new Date(a.attributes.date);
  });
  
  posts.forEach((post) => postsContainer.appendChild(smallPost(post)));
  
  const items = document.querySelectorAll(".post");
  const itemCount = items.length;
  const displayCount = 3;
  let index = 0;
  
  function showItems() {
    items.forEach((item, idx) => {
      if (idx >= index && idx < index + displayCount) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }
  
  function nextSlide() {
    if (index < itemCount - displayCount) {
      index++;
    }
    showItems();
  }
  
  function prevSlide() {
    if (index > 0) {
      index--;
    }
    showItems();
  }
  
  latestPrevBtn.addEventListener("click", prevSlide);
  latestNextBtn.addEventListener("click", nextSlide);
  
  showItems();
  
  const featuredPost1 = posts.find(post => post.attributes.name == "Top 6 in Seychelles")
  const featuredPost2 = posts.find(post => post.attributes.name == "Top 6 while in Beijing")
  const featuredPost3 = posts.find(post => post.attributes.name == "Top 6 while in Seville")
  
  const allFeaturedPosts = [featuredPost1, featuredPost2, featuredPost3]
  
  allFeaturedPosts.forEach((data) => featuredContainer.appendChild(featuredPost(data)));
  
  const dotContainers = document.querySelectorAll('.dot-btn');
  const dots = document.querySelectorAll('.dot')
  const featuredPosts = featuredContainer.querySelectorAll(".travelguide")
  featuredPosts[0].classList.add("active-travelguide");
  featuredPosts[1].style.display = "none"
  featuredPosts[2].style.display = "none"
  
  dotContainers.forEach((dotContainer, index) => {
  
    dotContainer.addEventListener('click', (e) => {
      dots.forEach(dot => {
          dot.classList.remove("active-dot")})
          dotContainer.querySelector(".dot").classList.add("active-dot")
  
          featuredPosts.forEach((post, i) => {
           if (index === i){ 
            post.style.display = "flex"
            post.classList.add("active-travelguide")
          
          }
          else  {
            post.classList.remove("active-travelguide")
            post.style.display = "none"
          } 
        })
    })
  })
} catch (error) {
  const container = document.createElement("div");
  container.textContent = error;
  container.classList.add("errorMessage");
  container.classList.add("flex-center");

  const errorIcon = document.createElement("i");
  errorIcon.classList.add("fa-solid");
  errorIcon.classList.add("fa-triangle-exclamation");

  container.append(errorIcon);
  allPosts.append(container);
  featuredContainer.append(container.cloneNode(true));
  throw new Error("Error to fetch posts: " + error)
} finally {
  loadingIndicator.forEach((loader) => loader.remove()); 
  document.querySelector(".all-latest-posts.loading").classList.remove("loading");
}

changeWord();
