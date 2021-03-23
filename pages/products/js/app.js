(() => {
  const sec_categories = document.querySelector(".filter_quanty .inputs");

  const showProduct = (e) => {

    if (e.target.classList.contains("controller")) {

      const elementActive = document.querySelector(".filter_quanty .active")


      elementActive.classList.remove("active");


      e.target.classList.add("active");

    }


  };



  sec_categories.addEventListener("click", showProduct);

  
})();