const textbox = document.querySelector(".ta");
const totalCount = document.querySelector(".totalchar")
const remainingcount = document.querySelector(".remainingchar")


textbox.addEventListener("keydown",()=>{
    totalCount.innerText = textbox.value.length;
    remainingcount.innerText = textbox.getAttribute("maxlength") - textbox.value.length;
  
})


