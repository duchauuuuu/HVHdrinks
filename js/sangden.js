document.addEventListener('DOMContentLoaded',function(){
    const toggleswitch=document.getElementById('switch')
    const hero=document.querySelector('.hero')
    const text=document.getElementById('js-text1')
    const text2=document.getElementById('js-text2')
    toggleswitch.addEventListener('change',function(){
        if(toggleswitch.checked){
           hero.style.backgroundColor='black';
           text.style.color='white';
           text2.style.color='white';
        }
        else{
            hero.style.backgroundColor='white';
            text.style.color='black';
            text2.style.color='black';
        }
    })
})



