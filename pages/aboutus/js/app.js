const arrowRight = document.getElementById("right"),
  arrowLeft = document.getElementById("left"),
  sec_workWithUs = document.querySelector('.sec_workWithUs .body');

let sliderPosition = 0;

const changeSliderRight = () => {

      if(sliderPosition === 5) return null

  const productoOld = document.querySelectorAll(".review_row")[
      sliderPosition
    ],
    productNew = document.querySelectorAll(".review_row")[sliderPosition + 1];

  productoOld.classList.add("hiden");
  productoOld.classList.remove("show");

  productNew.classList.add("show");
  productNew.classList.remove("hiden");

  sliderPosition =  sliderPosition + 1

  console.log(sliderPosition)

};

const changeSliderLeft = () => {

      if(sliderPosition === 0) return null

  const productoOld = document.querySelectorAll(".review_row")[sliderPosition],
    productNew = document.querySelectorAll(".review_row")[sliderPosition - 1];

  productoOld.classList.add("hiden");
  productoOld.classList.remove("show");

  productNew.classList.add("show");
  productNew.classList.remove("hiden");

  sliderPosition =  sliderPosition - 1

  console.log(sliderPosition)
};

arrowRight.addEventListener("click", changeSliderRight);


arrowLeft.addEventListener("click", changeSliderLeft);


sec_workWithUs.addEventListener('click', e => {


  if(document.querySelector('.sec_workWithUs .show')){

    document.querySelector('.sec_workWithUs .show').classList.toggle('hiden')
    document.querySelector('.sec_workWithUs .show').classList.toggle('show')

    document.querySelector('.fa-angle-down').classList.toggle('fa-chevron-right')
    document.querySelector('.fa-angle-down').classList.toggle('fa-angle-down')

  }else if(e.target.classList.contains('sub_title')) {

    e.target.parentElement.children[1].classList.toggle('hiden')
    e.target.parentElement.children[1].classList.toggle('show')

    e.target.children[0].classList.toggle('fa-chevron-right')
    e.target.children[0].classList.toggle('fa-angle-down')

  }else if(e.target.classList.contains('fas')) {
 
    e.target.parentElement.parentElement.children[1].classList.toggle('hiden')
    e.target.parentElement.parentElement.children[1].classList.toggle('show')

    e.target.classList.toggle('fa-chevron-right')
    e.target.classList.toggle('fa-angle-down')

  }


})





