function changeSizeOfCircle() {
    let circle = document.querySelector("div");
    let newSize = parseInt(Math.random() * 500);
    
    circle.style.width = newSize + "px";
    circle.style.height = newSize + "px";
    circle.style["font-size"] = (newSize / 100) + "em";
    circle.innerHTML=newSize;
   
    let red = parseInt(Math.random() * 256);
    let green = parseInt(Math.random() * 256);
    let blue = parseInt(Math.random() * 256);

    circle.style["background-color"] = "rgb(" + red + ", " + green + ", " + blue + ")";
    circle.style["border-color"] = "rgb(" + red + ", " + green + ", " + blue + ")";
}
