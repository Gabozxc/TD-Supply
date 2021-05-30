(() => {
  const sec_categories = document.querySelector(".sec_categories");

  const showProduct = (e) => {
    if (e.target.classList.contains("controller")) {
      const id = e.target.getAttribute("id"),
        query = `.products_row.${id}`;

      document.querySelector(".active").classList.remove("active");
      e.target.classList.toggle("active");

      document.querySelector(".show").classList.remove("show");

      document.querySelector(query).classList.add("show");
    }
  };



  sec_categories.addEventListener("click", showProduct);

  
})();

