const toggler = document.querySelector('.nav-toggler');
const nav = document.querySelector('.nav');


/*toogle navbar*/
toggler.addEventListener('click', ()=>{
    toggler.classList.toggle('active');
    nav.classList.toggle('open');
})
/*cierra navbar cuando click en item*/
document.addEventListener('click', (e)=>{
    //closest devuelve el elemento ascendente mas cercano. "si el closest es '.nav-item'...etc'"
    if (e.target.closest(".nav-item")) {

    toggler.classList.toggle('active');
    nav.classList.toggle('open');
    }
})
/*sticky header*/
window.addEventListener('click', ()=>{
    if (this.pageYOffset > 60) {
        document.querySelector('.header').classList.add('sticky');
        
    }
})

