let snakearr=[{x:12,y:12}];
let foodobject={x:15,y:15};
let gameboard=document.querySelector(".gameboard");
let speed=6;
let lastpainttime=0;
let direction={x:0,y:0};
let m=0;

function paint(ct){
    window.requestAnimationFrame(paint);
    if((ct-lastpainttime)/1000<(1/speed))
    return;
    lastpainttime=ct;
    gameboard.innerHTML="";
    snakee();
    foodd();
    move();
}
window.requestAnimationFrame(paint);


function snakee()
{ snakearr.forEach((e,i)=>{
    let snake=document.createElement("div");
snake.style.gridRowStart=e.y;
snake.style.gridColumnStart=e.x;
if(i===0)
snake.classList.add("snake");
else
snake.classList.add("snakebody");
gameboard.appendChild(snake);
})

}

function foodd()
{
    let food=document.createElement("div");
food.style.gridRowStart=foodobject.x;
food.style.gridColumnStart=foodobject.y;
food.classList.add("food");
gameboard.appendChild(food);
}


function move()
{   for(let i=snakearr.length-2;i>=0;i--)
    {
        snakearr[i+1]={...snakearr[i]}
    }
    snakearr[0].x=snakearr[0].x-direction.x;
    snakearr[0].y=snakearr[0].y-direction.y;
    if(snakearr[0].x===foodobject.x&&snakearr[0].y===foodobject.y)
    {
        snakearr.push({x:snakearr[0].x,y:snakearr[0].y})
        let number=document.querySelector(".number");
        m+=10;
        number.innerText=`${m}`;
       
    }
}


window.addEventListener("keydown",e=>{
    switch(e.key){
        case"ArrowUp":direction.y=1;
        direction.x=0;
        break;
        case"ArrowDown":direction.y=-1;
        direction.x=0;
        break;
        case"ArrowLeft":direction.x=1;
        direction.y=0;
        break;
        case"ArrowRight":direction.x=-1;
        direction.y=0;
        break;
        default:break;
    }
})
let refresh=document.querySelector(".refresh");
refresh.addEventListener("click",()=>{
    window.location.reload(true);
})

 let up=document.querySelector(".up");
 up.addEventListener("click",()=>{
    direction.y=1;
    direction.x=0;
 })
 let down=document.querySelector(".down");
 down.addEventListener("click",()=>{
    direction.y=-1;
    direction.x=0;
 })
 let left=document.querySelector(".left");
 left.addEventListener("click",()=>{
    direction.x=01;
    direction.y=0;
 })

 let right=document.querySelector(".right");
 right.addEventListener("click",()=>{
    direction.x=-1;
    direction.y=0;
 })





