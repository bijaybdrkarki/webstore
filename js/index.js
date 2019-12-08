let dropMenu = document.getElementById("menu");
let filterBtn = document.querySelector(".filter-btn");
// 
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
    let filterBtn = document.querySelector(".filter-btn i").innerHTML;
    if (filterBtn == 'arrow_downward'){
        document.querySelector(".filter-btn i").innerHTML = 'arrow_upward';
    }else{
        document.querySelector(".filter-btn i").innerHTML = 'arrow_downward';
    }
}








filterBtn.addEventListener("click",filterVisible);
dropMenu.addEventListener("click", menuVisible);
