const RIGHT_ARROW_BTN = document.querySelector(".right-arrow");
const LEFT_ARROW_BTN = document.querySelector(".left-arrow");
RIGHT_ARROW_BTN.addEventListener("click", forwardHandler);
LEFT_ARROW_BTN.addEventListener("click", backwardHandler);

const BACKGROUND_FIGURE = document.querySelector("#figure");

const PICTURE1 = document.getElementById("picture1");
const PICTURE2 = document.getElementById("picture2");
const PICTURE3 = document.getElementById("picture3");

function forwardHandler() {
  if (PICTURE1.checked === true) {
    BACKGROUND_FIGURE.style.backgroundImage = "url('./billeder/spring2.jpg')";
    PICTURE1.checked = false;
    PICTURE2.checked = true;
    PICTURE3.checked = false;
    LEFT_ARROW_BTN.classList = "arrow-show";
  } else if (PICTURE2.checked === true) {
    BACKGROUND_FIGURE.style.backgroundImage = "url('./billeder/spring3.jpg')";
    PICTURE1.checked = false;
    PICTURE2.checked = false;
    PICTURE3.checked = true;
    RIGHT_ARROW_BTN.classList = "arrow-hidden";
    LEFT_ARROW_BTN.classList = "arrow-show";
  } else if (PICTURE3.checked === true) {
    BACKGROUND_FIGURE.style.backgroundImage = "url('./billeder/spring1.jpeg')";
    PICTURE1.checked = true;
    PICTURE2.checked = false;
    PICTURE3.checked = false;
    LEFT_ARROW_BTN.classList = "arrow-hidden";
  }
}

function backwardHandler() {
  if (PICTURE1.checked === true) {
    BACKGROUND_FIGURE.style.backgroundImage = "url('./billeder/spring3.jpg')";
    PICTURE1.checked = false;
    PICTURE2.checked = false;
    PICTURE3.checked = true;
    RIGHT_ARROW_BTN.classList = "arrow-hidden";
  } else if (PICTURE2.checked === true) {
    BACKGROUND_FIGURE.style.backgroundImage = "url('./billeder/spring1.jpeg')";
    PICTURE1.checked = true;
    PICTURE2.checked = false;
    PICTURE3.checked = false;
    RIGHT_ARROW_BTN.classList = "arrow-show";
    LEFT_ARROW_BTN.classList = "arrow-hidden";
  } else if (PICTURE3.checked === true) {
    BACKGROUND_FIGURE.style.backgroundImage = "url('./billeder/spring2.jpg')";
    PICTURE1.checked = false;
    PICTURE2.checked = true;
    PICTURE3.checked = false;
    RIGHT_ARROW_BTN.classList = "arrow-show";
  }
}
