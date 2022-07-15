let sidebar=document.querySelector(".sidebar");
let cross=document.querySelector(".cross");
let hammberg=document.querySelector(".hammberg");
cross.addEventListener("click",()=>{
    sidebar.style.display="none";
    cross.style.display=("none");
    hammberg.style.display="inline";
})
hammberg.addEventListener("click",()=>{
    sidebar.style.display="inline";
    cross.style.display=("inline");
    hammberg.style.display="none";
})

