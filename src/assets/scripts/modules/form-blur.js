
const container = document.querySelector('.comment__section');
const sectionEl = document.querySelector('.contact__me-form');
const blurEl = document.createElement('.b-works-form__blur');

let drawBlur = function () {
  const width = sectionEl.offsetWidth;
  const height = sectionEl.offsetHeight;
  const left = container.offsetLeft;
  const bottom = height - (container.offsetTop + container.offsetHeight);

  blurEl.style.width = width + "px";
  blurEl.style.height = height + "px";
  blurEl.style.left = `-${left}px`;
  blurEl.style.bottom = `-${bottom}px`;
};
