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
window.addEventListener('scroll', ()=>{
    
        //document.querySelector('.header').classList.add('sticky');
        document.querySelector('.header').classList.toggle('sticky', window.scrollY > 400);
        
    
})

/*filter menu*/

const menuTabs = document.querySelector('.menu-tabs');
const menuTabItems = document.querySelectorAll('.menu-tab-item');
const menuTabContent = document.querySelectorAll('.menu-tab-content');

menuTabs.addEventListener('click', (e)=>{
    if (e.target.classList.contains('menu-tab-item') && !e.target.classList.contains('active')) {
        const target = e.target.getAttribute('data-target');
        console.log(target);
        //quita clase activo al menu
        menuTabItems.forEach(item =>{
            item.classList.remove('active')
        })
        //añade clase activo al elemento clickeado
        e.target.classList.add('active');
       
        menuTabContent.forEach(item=>{
            if (item.classList.contains(target)) {
                item.classList.add('active')
            }else{
                item.classList.remove('active')
            }
        })
        
    }
})

