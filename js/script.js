window.addEventListener('load', function myfct(e){
    // animation chargement
    preloader = document.querySelector(".preloader");
    preloader.classList.add("hidePreloader");
    document.body.style.overflow = "visible";
    // collapse navbar
    const navBtn =  document.querySelector('.navbar-toggler');
    const navMenu =  document.querySelector('.navbar-collapse');
    navBtn.onclick = ()=>{
        navMenu.classList.toggle('toggleNav');
    }
    // animation typeEffect
    let app =document.getElementById('typeEffect');
    let typewritter = new Typewriter(app, {
        loop: true
    });
    typewritter.typeString('PhotographX.')
        .pauseFor(9000)
        .pauseFor(9000)
        .deleteAll()
        .typeString('PhotographY.')
        .pauseFor(9000)
        .pauseFor(9000)
        .start();

    let resizeTime;
    window.addEventListener('resize', ()=>  {
        document.body.classList.add('resize-transition-stopper');
        this.clearTimeout(resizeTime);
        resizeTime = this.setTimeout(()=> {
            document.body.classList.remove('resize-transition-stopper');
        },400);
    });
    window.addEventListener('scroll', ()=>{
        let position = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop|| 0;
        const navbar = document.querySelector('.navbar');
        if(position>=800){
            navbar.style.display="block";
        }else{
            navbar.style.display="none";
        }
    })
})
    
    
    
    