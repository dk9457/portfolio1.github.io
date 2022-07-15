let box=Array.from(document.getElementsByClassName("box"));
let k=1;
let won=document.querySelector(".won");
box.forEach((e)=>
{ let info=document.getElementById("info");
  e.addEventListener("click",()=>
  {  
    let boxtext= e.getElementsByClassName("boxtext");
    if(k)
    {
      boxtext[0].innerHTML="x";
      info.innerText="turn for O";
      k=1-k;
    }
    else
    {
      boxtext[0].innerHTML="o";
      info.innerText="turn for X";
      k=1-k;
    }
     checkwin();
  })
    
})
let reset=document.getElementById("reset");
reset.addEventListener("click",()=>
{let info=document.getElementById("info");
let immg=document.getElementById("immg");
  let boxtext=Array.from(document.getElementsByClassName("boxtext"));
  boxtext.forEach((e)=>
  {
    e.innerHTML="";
    info.innerText="turn for X";
    immg.classList.add("imgg");
    won.style.opacity=0;
    k=1;
  })
})


const checkwin=()=>
{
  let win=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
  ]
   let boxtext=Array.from(document.getElementsByClassName("boxtext"));
   let immg=document.getElementById("immg");
   let i=0;
   let j=0;
   for(i=0;i<=7;i++)
   {     j=0;
     if(boxtext[win[i][j]].innerHTML===boxtext[win[i][j+1]].innerHTML && boxtext[win[i][j+1]].innerHTML===boxtext[win[i][j+2]].innerHTML && boxtext[win[i][j+2]].innerHTML !="")
          { immg.classList.remove("imgg");
          won.style.opacity=1;
        }
   }
  }



   

 







