let dropMenu = document.getElementById("menu");

// 
function menuVisible()
{
    document.getElementById("search").classList.toggle("visible");
    document.getElementById("cart").classList.toggle("invisible");
    document.getElementById("logoPlace").classList.toggle("invisible");
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
dropMenu.addEventListener("click", menuVisible);
