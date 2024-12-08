console.log("it started")
// let boxes = document.getElementsByClassName("container")
let boxes = document.querySelector(".container").children
let boxes2 = document.querySelector(".container2").children
let boxes3 = document.querySelector(".container3").children
let boxes4 = document.querySelector(".container4").children


function random_color(){
    let r = Math.ceil(Math.random()*255);
    let g = Math.ceil(Math.random()*255);
    let b = Math.ceil(Math.random()*255);
    // console.log(`rgb(${r} ${g} ${b})` )
    return `rgb(${r} ${g} ${b})`

}
// console.log(boxes)
console.log(boxes2)
Array.from(boxes).forEach(e=>{
    // console.log(e)
    e.style.backgroundColor = random_color();
})
Array.from(boxes2).forEach(e=>{
    console.log(e)
    e.style.backgroundColor = random_color();
})
Array.from(boxes3).forEach(e=>{
    console.log(e)
    e.style.backgroundColor = random_color();
})
Array.from(boxes4).forEach(e=>{
    console.log(e)
    e.style.backgroundColor = random_color();
})
