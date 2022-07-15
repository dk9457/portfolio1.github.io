//let audioelement = new Audio("song/1.mp3");
//audioelement.play();
let k=1;
let index=0;
let song = [
{ songname: "bahut aayi gayi yaade magar", time: "5:25",audioo:"song/1.mp3"},
{ songname: "humko to jan se pyari hai", time: "1:55",audioo:"song/2.mp3" },
{ songname: "kya khub lagti ho badi sun", time: "1:57",audioo:"song/3.mp3" },
{ songname: "musafir hu main yara n ghar", time: "2:55",audioo:"song/4.mp3" },
{ songname: "teri yaad bahot aane lagi hai", time: "3:25",audioo:"song/5.mp3" },
{ songname: "chnda sitare bindiya tumhari", time: "1:24",audioo:"song/6.mp3" },
{ songname: "jab tum aa jate ho samne jab", time: "1:46",audioo:"song/7.mp3" },
{ songname: "masum chehre ki kya bat humko", time: "3:46",audioo:"song/8.mp3" },
{ songname: "ye pal jane kyon aate hain ye", time: "1:22" ,audioo:"song/9.mp3"},
{ songname: "yashomati maiya se bole nandlala ", time: "1:32" ,audioo:"song/10.mp3"}
]
console.log(song[0].audioo);
let ssong=Array.from(document.getElementsByClassName("ssong"));
ssong.forEach((e,i)=>{
    e.querySelector("p").innerText=song[i].songname;
    e.querySelector(".ttime").innerText=song[i].time;
})
 
let plb=Array.from(document.getElementsByClassName("plb"));
const playall=()=>{
    plb.forEach((e,i)=>{
        e.classList.remove("fa-pause-circle");
        e.classList.add("fa-play-circle");
    })
}
let masterplay=document.getElementById("masterplay");
let audioelement=new Audio("songg/1.mp3");



plb.forEach((e,i)=>{ 
   e.addEventListener("click",(ee)=>{
    audioelement.pause();
        index=parseInt(ee.target.id);
      audioelement.src=`songg/${index}.mp3`; 
        if(k){playall();
            masterplay.classList.add("fa-play-circle");
            audioelement.play();
            ee.target.classList.remove("fa-play-circle");
            ee.target.classList.add("fa-pause-circle");
            k=1-k;
        }
            else
            {  playall();
                masterplay.classList.add("fa-play-circle")
                ee.target.classList.remove("fa-pause-circle");
                ee.target.classList.add("fa-play-circle");
                audioelement.pause();
            k=1-k;
            }
        
    
    })
})


masterplay.addEventListener("click",(ee)=>{
    if(k){
    audioelement.play();
    playall();
    masterplay.classList.remove("fa-play-circle");
    masterplay.classList.add("fa-pause-circle");
    k=1-k;
    }
    else{
    audioelement.pause();
    playall();
    masterplay.classList.remove("fa-pause-circle");
    masterplay.classList.add("fa-play-circle");
    k=1-k;
    }
})
let next=document.getElementById("next");
next.addEventListener("click",(e)=>{
    playall();
    masterplay.classList.remove("fa-play-circle");
    masterplay.classList.add("fa-pause-circle");
    index++;
    if(index>10)
    index=0;
    audioelement.src=`songg/${index}.mp3`
    audioelement.play();
})
let previous=document.getElementById("previous");
previous.addEventListener("click",(e)=>{
    playall();
    masterplay.classList.remove("fa-play-circle");
    masterplay.classList.add("fa-pause-circle");
    index--;
    if(index<1)
    index=10;
    audioelement.src=`songg/${index}.mp3`
    audioelement.play();
})

let mmyprogressbar=document.querySelector(".mmyprogressbar");

audioelement.addEventListener(("timeupdate"),()=>
{
let progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
mmyprogressbar.value=progress;
});
mmyprogressbar.addEventListener(("click"),()=>
{ 
    audioelement.currentTime=(mmyprogressbar.value*audioelement.duration)/100;
    
});



    
 





      
