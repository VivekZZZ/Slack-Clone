
const hiddenContent = document.getElementById('hiddenNavbar')

document.addEventListener("DOMContentLoaded",() => {
    window.addEventListener("scroll", ()=>{
        if(window.scrollY > 300){
            hiddenContent.style.display = 'block'
        }else{
            hiddenContent.style.display = 'none';
        }
    });
  });
