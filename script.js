function toggleMode(){
    const html =document.documentElement
    html.classList.tooggle("light")

    const img= document.querySelector("#profile img")


    if(html.classList.contains("light")){
        img.setAttribute("src", "./assets/Light.jpg")
        
    } else{
        img.setAttribute("src", "./assets/avatar.jpg")
    }

}