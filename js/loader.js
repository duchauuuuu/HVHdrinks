window.addEventListener("load",() =>{
    const loader=document.querySelector(".loader")
    const showLoaderButton = document.getElementById("showloader")
    loader.classList.add("loader-hidden")
    showLoaderButton.addEventListener("click", () => {
        loader.classList.remove("loader-hidden")
        setTimeout(() => {
            loader.classList.add("loader-hidden");
        }, 1000); 
    })
    
    loader.addEventListener("transitionend",() => {
            document.body.removeChild("loader")
    })
   
})