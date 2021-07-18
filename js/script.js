window.addEventListener('load', function myfct(e){
    
    preloader = document.querySelector(".preloader");
    preloader.classList.add("hidePreloader");
    document.body.style.overflow = "visible";
    
    const navBtn =  document.querySelector('.navbar-toggler');
    const navMenu =  document.querySelector('.navbar-collapse');
    navBtn.onclick = ()=>{
        navMenu.classList.toggle('toggleNav');
    }
})
    
    
    
    