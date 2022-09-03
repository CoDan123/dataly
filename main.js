
const bars = document.getElementById("bars").children;  //For Bars SVG Animation Hero Section
const dots = document.getElementById("dots").children;  //For Dots SVG Animation Hero Section

for(let i = 0; i < dots.length; i++){
    if(i > 0){  //if its not the first element, apply the timeout delay
        setTimeout(() => {
            dots[i].classList.toggle("inflate-dots")    //add inflate-bars class to current element in index, which will initiate css animation
        }, 100 * i);    //the higher the index, the longer the delay
    } else {
        dots[i].classList.toggle("inflate-dots")    //if current element is first in loop, apply class without setTimeout/delay
    }
    
}

for(let i = 0; i < bars.length; i++){
    if(i > 0){  //if its not the first element, apply the timeout delay
        setTimeout(() => {
            bars[i].classList.toggle("inflate-bars")    //add inflate-bars class to current element in index, which will initiate css animation
        }, 100 * i);    //the higher the index, the longer the delay
    } else {
        bars[i].classList.toggle("inflate-bars")    //if current element is first in loop, apply class without setTimeout/delay
    }
    
}




