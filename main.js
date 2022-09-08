const navMenuItems = document.getElementById("nav-menu-items");   //Get Nav Menu to add class mobile-active
const parentDiv = document.getElementById("parent"); //Get Parent div for overflow hidden

//Mobile-Menu
toggleMobile = () => {
    navMenuItems.classList.toggle("mobile-active");
    parentDiv.classList.toggle("overflow-hidden");
     
}

const bars = document.getElementById("bars").children;  //For Bars SVG Animation Hero Section
const dots = document.getElementById("dots").children;  //For Dots SVG Animation Hero Section

//Hero Page Dot Animation
for(let i = 0; i < dots.length; i++){
    if(i > 0){  //if its not the first element, apply the timeout delay
        setTimeout(() => {
            dots[i].classList.toggle("inflate-dots")    //add inflate-bars class to current element in index, which will initiate css animation
        }, 120 * i);    //the higher the index, the longer the delay
    } else {
        dots[i].classList.toggle("inflate-dots")    //if current element is first in loop, apply class without setTimeout/delay
    }
    
}

//Hero Page Bar Animation
for(let i = 0; i < bars.length; i++){
    if(i > 0){  //if its not the first element, apply the timeout delay
        setTimeout(() => {
            bars[i].classList.toggle("inflate-bars")    //add inflate-bars class to current element in index, which will initiate css animation
        }, 120 * i);    //the higher the index, the longer the delay
    } else {
        bars[i].classList.toggle("inflate-bars")    //if current element is first in loop, apply class without setTimeout/delay
    }
    
}






