// const slideShowElements = document
// .querySelectorAll(".slideshow_element");

// let countElements=1;
// setInterval(()=>
// {
//     countElements++;

//     let currentElement = document.querySelector(".current");
//     currentElement.classList.remove("current");

//     if(countElements>slideShowElements.length){
//         countElements=1;
//         slideShowElements[0].classList.add("current");
//     }
//     else currentElement.nextElementSibling.classList.add("current");
// },2000);

//practice
let slideShowElements = document.querySelectorAll(".slideshow_element");
let count=1;
setInterval(()=>{
    count++;
    let currentElement = document.querySelector(".current");
    currentElement.classList.remove("current");

    if(count>slideShowElements.length)
    {
        count=1;
        slideShowElements[0].classList.add("current");
    }
    else currentElement.nextElementSibling.classList.add("current");
},2000)