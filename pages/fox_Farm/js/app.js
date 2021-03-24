const arrowRight = document.getElementById("right"),
  arrowLeft = document.getElementById("left");

let sliderPosition = 0;

const changeSliderRight = () => {

      if(sliderPosition === 5) return null

  const productoOld = document.querySelectorAll(".products_row")[
      sliderPosition
    ],
    productNew = document.querySelectorAll(".products_row")[sliderPosition + 1];

  productoOld.classList.add("hiden");
  productoOld.classList.remove("show");

  productNew.classList.add("show");
  productNew.classList.remove("hiden");

  sliderPosition =  sliderPosition + 1

  console.log(sliderPosition)

};

const changeSliderLeft = () => {

      if(sliderPosition === 0) return null

  const productoOld = document.querySelectorAll(".products_row")[sliderPosition],
    productNew = document.querySelectorAll(".products_row")[sliderPosition - 1];

  productoOld.classList.add("hiden");
  productoOld.classList.remove("show");

  productNew.classList.add("show");
  productNew.classList.remove("hiden");

  sliderPosition =  sliderPosition - 1

  console.log(sliderPosition)
};

arrowRight.addEventListener("click", changeSliderRight);


arrowLeft.addEventListener("click", changeSliderLeft);
