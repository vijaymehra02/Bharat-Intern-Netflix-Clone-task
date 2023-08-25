
let accordian = document.querySelectorAll(".accordian")

accordian.forEach((item)=>{

    let  tital_bar = item.querySelector(".tital-bar") 
    let  content = item.querySelector(".content")
    console.log('hello')
    tital_bar.addEventListener('click',()=>{

        accordian.forEach((pointe)=>{

            if(item != pointe){
                let k=pointe.querySelector(".content")
                k.classList.remove('active')

                let r = pointe.querySelector('.r')
                r.classList.remove('rotate')

                k.style.maxHeight = null;

           

            } else{
                let k=pointe.querySelector(".content")
                k.classList.toggle('active');

                let r=pointe.querySelector('.r')
                r.classList.toggle('rotate')

                if(k.classList.contains('active')){
                    k.style.maxHeight=k.scrollHeight + 'px' 
                }else{
                    k.style.maxHeight = null;
                }
            } 
        })
    }) 

    console.log("enf")
})