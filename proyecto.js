//Botones redes sociales

function facebook() {
    location.replace("https://www.facebook.com/")
  }

  function twitter() {
    location.replace("https://twitter.com/")
  }

  function linkedin() {
    location.replace("https://www.linkedin.com/")
  }

// Scroll up

let caja=document.getElementById("button-up");
caja.addEventListener("click",function(){
    document.documentElement.scrollTop=0;
})

window.addEventListener("scroll",function(){
    if (document.documentElement.scrollTop > 0) {
        caja.style.display="flex"
    } else {
        caja.style.display="none"
    }
})
