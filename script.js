function buttonOne() {

    buttonOneLabel = "Just A Random Button That Does Nothing";
    buttonOneJS = "onClick=\"window.location.href='https://www.youtube.com/watch?v=BjDebmqFRuc&t=6s';\"";
    
    document.getElementById("buttonOne").innerHTML += buttonOneLabel;
    document.getElementById("buttonOne").outerHTML += buttonOneJS;
}