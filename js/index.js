let dropMenu = document.getElementById("menu");
let filterBtn = document.querySelector(".filter-btn");
let seeMore = document.querySelectorAll(".extra-info");
let favBtn = document.querySelectorAll(".fav-color");
let plusBtn = document.querySelectorAll(".plusbutton");
let minusBtn = document.querySelectorAll(".minusbutton");

function menuVisible() /* show menu on click in mobile version */
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
function filterVisible() /* show filter options on click in mobile version */
{
    event.preventDefault();
   console.log("test");
    document.querySelector(".filter-options").classList.toggle("visible");
    document.querySelector(".filter-btn").classList.toggle("bckgrnd-color");
    let filterBtn = document.querySelector(".filter-btn i").innerHTML;
    if (filterBtn == 'arrow_downward'){
        document.querySelector(".filter-btn i").innerHTML = 'arrow_upward';
    }else{
        document.querySelector(".filter-btn i").innerHTML = 'arrow_downward';
    }
}

function showMore(event) /* show product more info onclick in all version */
{
    event.preventDefault();
    event.target.parentElement.children[3].classList.toggle("invisible");
    if(event.target.parentElement.children[1].innerText == 'See more'){
        event.target.parentElement.children[1].innerText = 'Read less'
    }else{
        event.target.parentElement.children[1].innerText = 'See more';
    }
}
function favbtnclick(event) /* check or uncheck fav button on click in all version */
{
    event.preventDefault();
   if(event.target.innerHTML == "favorite"){
    event.target.innerHTML = "favorite_border";
   }else{
    event.target.innerHTML = "favorite";
   }
}
function plusPrice(event) /* Increase quantity by 1 onclick  */
{
    let price = parseFloat(event.path[4].children[1].children[1].value).toFixed(2);
    let qnt = (parseFloat(event.target.parentElement.children[1].innerHTML));
    qnt++;
    event.target.parentElement.children[1].innerHTML= qnt;
    let total= qnt * price;
    event.target.parentElement.children[3].innerHTML = `$ ${total.toFixed(2)}`;
}

function minusPrice(event) /* decrease quantity by 1 onclick  */
{
    let price = parseFloat(event.path[4].children[1].children[1].value).toFixed(2);
    let qnt = (parseInt(event.target.parentElement.children[1].innerHTML));
    if (qnt > 0){
        qnt--;
    }else{
        qnt = 0;
    }
    event.target.parentElement.children[1].innerHTML= qnt;
    let total= qnt * price;
    event.target.parentElement.children[3].innerHTML = `$ ${total.toFixed(2)}`;
}


minusBtn.forEach(btn => btn.addEventListener("click", minusPrice));
plusBtn.forEach(btn => btn.addEventListener("click", plusPrice));
favBtn.forEach(btn => btn.addEventListener("click", favbtnclick));
seeMore.forEach(item => item.addEventListener("click", showMore));
filterBtn.addEventListener("click",filterVisible);
dropMenu.addEventListener("click", menuVisible);
