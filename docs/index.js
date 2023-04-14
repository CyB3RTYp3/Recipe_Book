const burger=document.querySelector('#burger');
const menu=document.querySelector('#menu');
const load=document.querySelector('#load');
const popular=document.querySelector('#popular')
const change=document.querySelector('#change');

burger.addEventListener("click",()=>{
    if(menu.classList.contains('hidden')){
         menu.classList.remove('hidden');
    }else{
        menu.classList.add('hidden');
    }
})

load.addEventListener("click",()=>{
    if(popular.classList.contains('hidden')){
         popular.classList.remove('hidden');
         change.innerHTML="Show less";
    }else{
        popular.classList.add('hidden');
        change.innerHTML="Show less";
    }
})



