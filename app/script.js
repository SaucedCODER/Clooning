// hide the freaking nav bar

const hidir = document.querySelector('#header');


let lastScrollTop = 0;

// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   let st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   if (st > lastScrollTop){
      // downscroll code
      console.log("downscroll",st);
     

     if (st >= 93  ) {
      console.log("height faced");
    hidir.classList.add("move-up")
     } else {
      console.log("not");
      
     }
   } else {
      // upscroll code
      console.log("upscroll",st);
      hidir.classList.remove("move-up")

   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);

//opening/closing navigation
const burger = document.querySelector('#burger');
const nav = document.querySelector('nav');

burger.addEventListener('click', () => {
  nav.classList.toggle("visible")
  if(burger.classList.contains("fa-bars")){
    burger.classList.remove("fa-bars");
    burger.classList.add("fa-xmark");
  }else if(burger.classList.contains("fa-xmark")){
    burger.classList.remove("fa-xmark");
    burger.classList.add("fa-bars");
  }

})

