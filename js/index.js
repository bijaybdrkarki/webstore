let dropMenu = document.getElementById("menu");
let filterBtn = document.querySelector(".filter-btn");
let seeMore = document.querySelectorAll(".extra-info");




function menuVisible()
{
    document.getElementById("search").classList.toggle("visible");
    document.getElementById("cart").classList.toggle("invisible");
    // document.getElementById("logoPlace").classList.toggle("invisible");
    document.getElementById("mainmenu").classList.toggle("visible");
    let menuValue= document.getElementById("menu").innerHTML;
    if (menuValue == 'menu')
    {
        document.getElementById("menu").innerHTML = 'clear';
    }
    else if (menuValue=='clear')
    {
        document.getElementById("menu").innerHTML = 'menu';
    }
    
}
function filterVisible(){
    event.preventDefault();
    document.querySelector(".filter-options").classList.toggle("visible");
    document.querySelector(".filter-btn").classList.toggle("bckgrnd-color");
    let filterBtn = document.querySelector(".filter-btn i").innerHTML;
    if (filterBtn == 'arrow_downward'){
        document.querySelector(".filter-btn i").innerHTML = 'arrow_upward';
    }else{
        document.querySelector(".filter-btn i").innerHTML = 'arrow_downward';
    }
}

seeMore.foreach(item => {
    item.addEventListener("click", event =>{
        event.preventDefault();
        
    })
});









filterBtn.addEventListener("click",filterVisible);
dropMenu.addEventListener("click", menuVisible);
