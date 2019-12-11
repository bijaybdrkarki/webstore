// All data
const allproducts = [
  {
    id : 1,
    name : `Winter Jackets`,
    image : `img/jackets.jpg`,
    description : `Here is a shot of this product that might entice a user to click and add it to their cart.`,
    extra: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil nobis dolorem ea aliquid, aspernatur non commodi deserunt dolorum atque a incidunt, pariatur ipsa, accusantium temporibus. Corporis asperiores tenetur deserunt nisi?`,
    markedPrice: 150.00,
    discountedPrice : 100.00,
    quantityStock : 10,
    category : `clothes`,
    rating: 3,
    size: ['XS', 'S' , 'M', 'L', 'XL'],
    color: ['Black', 'White', 'Grey', 'Red', 'Blue']
  },
  {
    id : 2,
    name : `Summer Jacket`,
    image : `img/windproof.jpg`,
    description : `Here is a shot of this product that might entice a user to click and add it to their cart.`,
    extra: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil nobis dolorem ea aliquid, aspernatur non commodi deserunt dolorum atque a incidunt, pariatur ipsa, accusantium temporibus. Corporis asperiores tenetur deserunt nisi?`,
    markedPrice: 80.00,
    discountedPrice : 69.00,
    quantityStock : 5,
    category : `clothes`,
    rating: 4.4,
    size: ['XS', 'S' , 'M', 'L', 'XL'],
    color: ['Black', 'White', 'Grey', 'Red', 'Blue']
  },
  {
      id : 3,
      name : `Tshirt-Lazy`,
      image : `img/lazy-tshirt.jpg`,
      description : `Here is a shot of this product that might entice a user to click and add it to their cart.`,
      extra: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil nobis dolorem ea aliquid, aspernatur non commodi deserunt dolorum atque a incidunt, pariatur ipsa, accusantium temporibus. Corporis asperiores tenetur deserunt nisi?`,
      markedPrice: 18.00,
      discountedPrice : 12.00,
      quantityStock : 5,
      category : `clothes`,
      rating: 5,
      size: ['XS', 'S' , 'M', 'L', 'XL'],
      color: ['Black', 'White', 'Grey', 'Red', 'Blue']
  },
  {
    id : 4,
    name : `Tshirt`,
    image : `img/tshirt.jpg`,
    description : `Here is a shot of this product that might entice a user to click and add it to their cart.`,
    extra: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil nobis dolorem ea aliquid, aspernatur non commodi deserunt dolorum atque a incidunt, pariatur ipsa, accusantium temporibus. Corporis asperiores tenetur deserunt nisi?`,
    markedPrice: 13.75,
    discountedPrice : 10.00,
    quantityStock : 5,
    category : `clothes`,
    rating: 3,
    size: ['XS', 'S' , 'M', 'L', 'XL'],
    color: ['Black', 'White', 'Grey', 'Red', 'Blue']
  },
  {
    id : 5,
    name : `Full-sleve Shirt`,
    image : `img/mens-plain-shirts.jpg`,
    description : `Here is a shot of this product that might entice a user to click and add it to their cart.`,
    extra: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil nobis dolorem ea aliquid, aspernatur non commodi deserunt dolorum atque a incidunt, pariatur ipsa, accusantium temporibus. Corporis asperiores tenetur deserunt nisi?`,
    markedPrice: 25.00,
    discountedPrice : 15.00,
    quantityStock : 5,
    category : `clothes`,
    rating: 2.5,
    size: ['XS', 'S' , 'M', 'L', 'XL'],
    color: ['Black', 'White', 'Grey', 'Red', 'Blue']
  },
];
function getRatingAsString(rating)
{
  let star='<div>';
  for(let i=1 ; i<= rating; i++)
  {
     star += '<span class="material-icons">star</span>';
  }
  if (rating !== Math.ceil(rating)){
    star+= '<span class="material-icons">star_half</span>';
  }
  star+='</div>';
  return star;
}

function getProductsAsString(product)
{
    return `<article class="product">
    <header>
      <img src="${product.image}" alt="Product Image">
    </header>
    <div class="name-price">
      <h3>${product.name}</h3>
      <data value="39"><del>$ ${product.markedPrice}</del> <ins>$ ${product.discountedPrice}</ins></data>
    </div>
    <div class="see-more">
      <p>${product.description}</p>
      <a href="#" class="extra-info">See more</a><br>
      <span class="invisible">${product.extra}</span>
    </div>

    <form>
      <fieldset class="prod-color">
        <legend>Colours</legend>
        <ul>
          <li><label><input type="radio" name="colour" value="r"> <span>Red</span></label></li>
          <li><label><input type="radio" name="colour" value="w"> <span>White</span></label></li>
          <li><label><input type="radio" name="colour" value="bl"> <span>Blue</span></label></li>
          <li><label><input type="radio" name="colour" value="bk"> <span>Black</span></label></li>
          <li><label><input type="radio" name="colour" value="g"> <span>Grey</span></label></li>
        </ul>
      </fieldset>

      <fieldset class="prod-size">
        <legend>Sizes</legend>
        <ol>
          <li><label><input type="radio" name="size" value="xs"> <span>xs</span></label></li>
          <li><label><input type="radio" name="size" value="s"> <span>S</span></label></li>
          <li><label><input type="radio" name="size" value="m"> <span>M</span></label></li>
          <li><label><input type="radio" name="size" value="l"> <span>L</span></label></li>
          <li><label><input type="radio" name="size" value="xl"> <span>XL</span></label></li>
        </ol>
      </fieldset>

      <footer class="prod-footer">
        <dl>
          <dt>Rating</dt>
          <dd>${product.rating}</dd>
          ${getRatingAsString(product.rating)}
          <button type="button" class="fav but"><span class="material-icons fav-color">favorite_border</span></button>
        </dl>
        <div class="changeQuantity">
          <form>
            <input class="minusbutton" type="button" value="-">        
            <div class="quantity">0</div>
            <input class="plusbutton" type="button" value="+">
            <p class="total-price">$ 0.00</p>        
          </form>
        </div>
        <button type="button" class="add-to-cart"><span class="material-icons">add_shopping_cart</span> Add to Cart</button>
        
      </footer>
      
    </form>
  </article>`
}

function renderProductsFromArray(array)
{
  document.getElementById("products").innerHTML = array.map(getProductsAsString).join('\n');
  let seeMore = document.querySelectorAll(".extra-info");
  let favBtn = document.querySelectorAll(".fav-color");
  let plusBtn = document.querySelectorAll(".plusbutton");
  let minusBtn = document.querySelectorAll(".minusbutton");

  minusBtn.forEach(btn => btn.addEventListener("click", minusPrice));
  plusBtn.forEach(btn => btn.addEventListener("click", plusPrice));
  favBtn.forEach(btn => btn.addEventListener("click", favbtnclick));
  seeMore.forEach(item => item.addEventListener("click", showMore));

}

function sortTheProducts() /* sort the array according to sorting selected */
{
 let sortby = document.getElementById("sort").value;
 const sortedArray = allproducts.slice();
 if (sortby == 'price-high')
 {
    sortedArray.sort((a,b) => b.discountedPrice - a.discountedPrice);
 }
 else if (sortby == 'price-low')
 {
  sortedArray.sort((a,b) => a.discountedPrice - b.discountedPrice);
 }
 else if (sortby == 'AtoZ')
 {
  sortedArray.sort((a,b) => a.name.localeCompare(b.name));
 }
 else if (sortby == 'ZtoA')
 {
  sortedArray.sort((a,b) => b.name.localeCompare(a.name));
 }
 renderProductsFromArray(sortedArray) ;
}
// function categoriesBy
function menuVisible() /* show menu on click in mobile version */
{
    document.getElementById("search").classList.toggle("visible");
    document.getElementById("cart").classList.toggle("invisible");
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
    let price = parseFloat(event.path[4].children[1].children[1].children[1].innerHTML.split(" ")[1]).toFixed(2);
    let qnt = (parseFloat(event.target.parentElement.children[1].innerHTML));
    qnt++;
    event.target.parentElement.children[1].innerHTML= qnt;
    let total= qnt * price;
    event.target.parentElement.children[3].innerHTML = `$ ${total.toFixed(2)}`;
}

function minusPrice(event) /* decrease quantity by 1 onclick  */
{ 
  let price = parseFloat(event.path[4].children[1].children[1].children[1].innerHTML.split(" ")[1]).toFixed(2);
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

window.addEventListener("load", ()=> {
    renderProductsFromArray(allproducts);  
    let dropMenu = document.getElementById("menu");
    let filterBtn = document.querySelector(".filter-btn");
    let sort = document.getElementById("sort");
    
    
    
    sort.addEventListener("change", sortTheProducts);
    filterBtn.addEventListener("click",filterVisible);
    dropMenu.addEventListener("click", menuVisible);
});

