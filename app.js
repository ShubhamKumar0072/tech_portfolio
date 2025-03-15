//Logical Operations For Cards When it s Clicked


let cards = document.querySelectorAll(".proCards");
for(let i=0;i<cards.length;i++){
   cards[i].addEventListener("click", function (){
      if(cards[i].classList.contains("proCards")){
         let url = cards[i].children[0].src;
         let grad = window.getComputedStyle(cards[i]).backgroundImage;
         console.log(grad);
         cards[i].classList.remove("proCards");
         cards[i].classList.add("activeCard");
         cards[i].style.backgroundImage = `url("${url}")`;
         checkScroll();
         const onClickOutside = (element, callback) => {
            document.addEventListener('click', e => {
            if (!element.contains(e.target)) callback();
            });
         };
   
         onClickOutside(cards[i], () => {
            cards[i].classList.add("proCards");
            cards[i].classList.remove("activeCard");
            checkScroll();
            cards[i].style.backgroundImage = grad;
         });
      }
   });
   if(cards[i].classList.contains("activeCard")){
      check = true;
   }
}

function checkScroll(){
   let check = false;
   for(let i=0;i<cards.length;i++){
      if(cards[i].classList.contains("activeCard")){
         check = true;
      }
   }
   if(check){
      disableScroll();
   }else{
      enableScroll();
   }
}

function disableScroll() {
   document.body.classList.
   add("stop-scrolling");
}

function enableScroll() {
   document.body.classList
   .remove("stop-scrolling");
}


