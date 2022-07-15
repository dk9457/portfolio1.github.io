let audioelement=new Audio("song/1.mp3");
audioelement.play();
let masterplay=document.getElementById("masterplay");
let myprogressbar=document.getElementById("myprogressbar");
masterplay.addEventListener("click", ()=>{
    
if(audioelement.paused)
{
    audioelement.play();
    masterplay.classList.remove("fa-play-circle");
    masterplay.classList.add("fa-pause-circle");
}
else{
    audioelement.pause();
    masterplay.classList.remove("fa-pause-circle");
    masterplay.classList.add("fa-play-circle");
}});
audioelement.addEventListener(("timeupdate"),()=>
{
let progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
myprogressbar.value=progress;
});
myprogressbar.addEventListener(("click"),()=>
{ 
    audioelement.currentTime=(myprogressbar.value*audioelement.duration)/100;
    
});

let songs=[
{songname:"tumse dur rah",filepath:"song/1.mp3",coverpath:"cover/1.jpg"},
{songname:"hum juda  gaye",filepath:"song/2.mp3",coverpath:"cover/2.jpg"},
{songname:"pyar me dil to",filepath:"song/3.mp3",coverpath:"cover/3.jpg"},
{songname:"bala ji se wo ",filepath:"song/4.mp3",coverpath:"cover/4.jpg"},
{songname:"ram siya ram",filepath:"song/5.mp3",coverpath:"cover/5.jpg"},
{songname:"inko bhjo sukh",filepath:"song/6.mp3",coverpath:"cover/6.jpg"},
{songname:"jay sri ram",filepath:"song/7.mp3",coverpath:"cover/7.jpg"},
{songname:"jay hanuman jay",filepath:"song/8.mp3",coverpath:"cover/8.jpg"},]

let songitem=Array.from(document.getElementsByClassName("songitem"));
songitem.forEach((e,i)=>
{
let img=e.getElementsByTagName("img");
img[0].src=songs[i].coverpath;
let span=e.getElementsByTagName("span");
span[0].innerText=songs[i].songname;
});

let playy=Array.from(document.getElementsByClassName("playy"));

const playyall=()=>{playy.forEach((ee)=>
{
 ee.classList.remove("fa-pause-circle");
 ee.classList.add("fa-play-circle");
})};

playy.forEach((element,i)=>
{
  element.addEventListener("click",(e)=>
  {
      if(audioelement.paused)
      {playyall();
    e.target.classList.remove("fa-play-circle");
    e.target.classList.add("fa-pause-circle");
    audioelement.play();
      }
      else{
        e.target.classList.remove("fa-pause-circle");
        e.target.classList.add("fa-play-circle");
        audioelement.pause();

      }
    
  });
});



