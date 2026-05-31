window.addEventListener('scroll',function(){
    let navbar = document.querySelector('navbar');
    if(this.window.scrollY > 20){
        navbar.classList.add('scrolled')
    }
            else{
                navbar.classList.remove('scrolled')
            }
        });
    
        
    

        
    

document.querySelector('#to-top').addEventListener('click',()=>{
    let TopInterval = setInterval(()=>{

         let ArrowTop = document.body.scrollTop > 0 ? document.body : document.documentElement;

         if(ArrowTop.scrollTop > 0){
            ArrowTop.scrollTop = ArrowTop.scrollTop - 50;

         }
         if(ArrowTop.scrollTop < 1){
            clearInterval(TopInterval)
         }
            
         },10)
    },false);
  
    function showscroll(){
        let TopButton = document.getElementById('to-top');
        if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
            TopButton.classList.add('show')
        }else{
            TopButton.classList.remove('show')
        }

        
    }

    window.onscroll = () =>{
        showscroll();
    }


    const menuBtn = document.getElementById('menu-btn')
    const navlinks = document.getElementById('nav-links')
    const menuicon = document.querySelector('i');

    menuBtn.addEventListener('click',(e)=> {
        navlinks.classList.toggle('open')

        const isopen = navlinks.classList.contains('open')
        menuicon.setAttribute('class',isopen ? 'ri-close-line' : 'ri-menu-line')
    })
    