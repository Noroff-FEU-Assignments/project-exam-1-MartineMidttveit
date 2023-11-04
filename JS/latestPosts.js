const week = document.querySelector(".week");
const arrowLeft = document.querySelector(".arrowLeft");
const arrowRight = document.querySelector(".arrowRight");
const weeklyPosts = document.querySelectorAll(".latestPosts");
const mainContainer = document.querySelector(".all-latest-posts");
const older = document.querySelector(".older");
const newer = document.querySelector(".newer");

let curWeek = 44;

arrowRight.addEventListener("click", (e) => {

    if (curWeek === 42) {
        older.style.visibility = "hidden";
    }
    if (curWeek <= 41) {
        return;
    };
    curWeek--;
    mainContainer.style.transform += "translateX(-37.5%)";
    week.textContent = "WEEK " + curWeek;
    newer.style.visibility = "visible";
  });
  
  arrowLeft.addEventListener("click", (e) => {
    if (curWeek === 43) {
        newer.style.visibility = "hidden";
    }
    if (curWeek >= 44) {
        return;
    };
    curWeek++;
    mainContainer.style.transform += "translateX(37.5%)";
    week.textContent = "WEEK " + curWeek;
    older.style.visibility = "visible";
  });


