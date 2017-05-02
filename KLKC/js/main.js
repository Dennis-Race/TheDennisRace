// dropdown toggle menu for smaller screens

function toggleMenu(x){
    var panel = document.getElementById(x), navarrow = document.getElementById("dropdown"), maxH="auto";
    if(panel.style.height == maxH){
        panel.style.height = "0px";
        
    } else {
        panel.style.height = maxH;
        
    }
}