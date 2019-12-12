
const allproducts = // All products data
[ 
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
  {
    id : 6,
    name : `Men-Causal`,
    image : `img/men-casual.jpg`,
    description : `Here is a shot of this product that might entice a user to click and add it to their cart.`,
    extra: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil nobis dolorem ea aliquid, aspernatur non commodi deserunt dolorum atque a incidunt, pariatur ipsa, accusantium temporibus. Corporis asperiores tenetur deserunt nisi?`,
    markedPrice: 22.00,
    discountedPrice : 15.00,
    quantityStock : 5,
    category : `shoes`,
    rating: 3.5,
    size: ['XS', 'S' , 'M', 'L', 'XL'],
    color: ['Black', 'White', 'Grey', 'Red', 'Blue']
  },
  {
    id : 7,
    name : `Leather-shoes`,
    image : `img/Leather-Men-Shoes.jpg`,
    description : `Here is a shot of this product that might entice a user to click and add it to their cart.`,
    extra: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil nobis dolorem ea aliquid, aspernatur non commodi deserunt dolorum atque a incidunt, pariatur ipsa, accusantium temporibus. Corporis asperiores tenetur deserunt nisi?`,
    markedPrice: 52.00,
    discountedPrice : 35.00,
    quantityStock : 5,
    category : `shoes`,
    rating: 4,
    size: ['XS', 'S' , 'M', 'L', 'XL'],
    color: ['Black', 'White', 'Grey', 'Red', 'Blue']
  },
  {
    id : 8,
    name : `Light Footwear`,
    image : `img/Light-Male-Footwear.jpg`,
    description : `Here is a shot of this product that might entice a user to click and add it to their cart.`,
    extra: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil nobis dolorem ea aliquid, aspernatur non commodi deserunt dolorum atque a incidunt, pariatur ipsa, accusantium temporibus. Corporis asperiores tenetur deserunt nisi?`,
    markedPrice: 65.00,
    discountedPrice : 55.00,
    quantityStock : 13,
    category : `shoes`,
    rating: 4.5,
    size: ['XS', 'S' , 'M', 'L', 'XL'],
    color: ['Black', 'White', 'Grey', 'Red', 'Blue']
  },
  {
    id : 9,
    name : `Sneakers-Men`,
    image : `img/Sneakers-Men-Shoes.jpg`,
    description : `Here is a shot of this product that might entice a user to click and add it to their cart.`,
    extra: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil nobis dolorem ea aliquid, aspernatur non commodi deserunt dolorum atque a incidunt, pariatur ipsa, accusantium temporibus. Corporis asperiores tenetur deserunt nisi?`,
    markedPrice: 165.00,
    discountedPrice : 145.00,
    quantityStock : 25,
    category : `shoes`,
    rating: 5,
    size: ['XS', 'S' , 'M', 'L', 'XL'],
    color: ['Black', 'White', 'Grey', 'Red', 'Blue']
  },
  {
    id : 10,
    name : `Spring Summer`,
    image : `img/Spring-Summer-Men-Shoes.jpg`,
    description : `Here is a shot of this product that might entice a user to click and add it to their cart.`,
    extra: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil nobis dolorem ea aliquid, aspernatur non commodi deserunt dolorum atque a incidunt, pariatur ipsa, accusantium temporibus. Corporis asperiores tenetur deserunt nisi?`,
    markedPrice: 100.00,
    discountedPrice : 75.00,
    quantityStock : 20,
    category : `shoes`,
    rating: 5,
    size: ['XS', 'S' , 'M', 'L', 'XL'],
    color: ['Black', 'White', 'Grey', 'Red', 'Blue']
  },
  {
    id : 11,
    name : `Brigada`,
    image : `img/brigada.jpg`,
    description : `Here is a shot of this product that might entice a user to click and add it to their cart.`,
    extra: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil nobis dolorem ea aliquid, aspernatur non commodi deserunt dolorum atque a incidunt, pariatur ipsa, accusantium temporibus. Corporis asperiores tenetur deserunt nisi?`,
    markedPrice: 100.00,
    discountedPrice : 75.00,
    quantityStock : 20,
    category : `watches`,
    rating: 5,
    size: ['XS', 'S' , 'M', 'L', 'XL'],
    color: ['Black', 'White', 'Grey', 'Red', 'Blue']
  },
  {
    id : 12,
    name : `Civo`,
    image : `img/civo.jpg`,
    description : `Here is a shot of this product that might entice a user to click and add it to their cart.`,
    extra: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil nobis dolorem ea aliquid, aspernatur non commodi deserunt dolorum atque a incidunt, pariatur ipsa, accusantium temporibus. Corporis asperiores tenetur deserunt nisi?`,
    markedPrice: 115.00,
    discountedPrice : 95.00,
    quantityStock : 10,
    category : `watches`,
    rating: 4.5,
    size: ['XS', 'S' , 'M', 'L', 'XL'],
    color: ['Black', 'White', 'Grey', 'Red', 'Blue']
  },
  {
    id : 13,
    name : `Girls Watches`,
    image : `img/Analog-Girls-Watches.jpg`,
    description : `Here is a shot of this product that might entice a user to click and add it to their cart.`,
    extra: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil nobis dolorem ea aliquid, aspernatur non commodi deserunt dolorum atque a incidunt, pariatur ipsa, accusantium temporibus. Corporis asperiores tenetur deserunt nisi?`,
    markedPrice: 75.00,
    discountedPrice : 65.00,
    quantityStock : 14,
    category : `watches`,
    rating: 3.5,
    size: ['XS', 'S' , 'M', 'L', 'XL'],
    color: ['Black', 'White', 'Grey', 'Red', 'Blue']
  },
  {
    id : 14,
    name : `Breguet`,
    image : `img/Tradition-Breguet.jpg`,
    description : `Here is a shot of this product that might entice a user to click and add it to their cart.`,
    extra: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil nobis dolorem ea aliquid, aspernatur non commodi deserunt dolorum atque a incidunt, pariatur ipsa, accusantium temporibus. Corporis asperiores tenetur deserunt nisi?`,
    markedPrice: 175.00,
    discountedPrice : 165.00,
    quantityStock : 14,
    category : `watches`,
    rating: 5,
    size: ['XS', 'S' , 'M', 'L', 'XL'],
    color: ['Black', 'White', 'Grey', 'Red', 'Blue']
  },
  {
    id : 15,
    name : `Vincero`,
    image : `img/vincero.jpg`,
    description : `Here is a shot of this product that might entice a user to click and add it to their cart.`,
    extra: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil nobis dolorem ea aliquid, aspernatur non commodi deserunt dolorum atque a incidunt, pariatur ipsa, accusantium temporibus. Corporis asperiores tenetur deserunt nisi?`,
    markedPrice: 75.00,
    discountedPrice : 65.00,
    quantityStock : 14,
    category : `watches`,
    rating: 3.5,
    size: ['XS', 'S' , 'M', 'L', 'XL'],
    color: ['Black', 'White', 'Grey', 'Red', 'Blue']
  },
  {
    id : 16,
    name : `Footbal Boots`,
    image : `img/Footbal-Boots.jpg`,
    description : `Here is a shot of this product that might entice a user to click and add it to their cart.`,
    extra: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil nobis dolorem ea aliquid, aspernatur non commodi deserunt dolorum atque a incidunt, pariatur ipsa, accusantium temporibus. Corporis asperiores tenetur deserunt nisi?`,
    markedPrice: 135.00,
    discountedPrice : 125.00,
    quantityStock : 17,
    category : `sports`,
    rating: 5,
    size: ['XS', 'S' , 'M', 'L', 'XL'],
    color: ['Black', 'White', 'Grey', 'Red', 'Blue']
  },
  {
    id : 17,
    name : `P.League Footbal`,
    image : `img/football.jpg`,
    description : `Here is a shot of this product that might entice a user to click and add it to their cart.`,
    extra: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil nobis dolorem ea aliquid, aspernatur non commodi deserunt dolorum atque a incidunt, pariatur ipsa, accusantium temporibus. Corporis asperiores tenetur deserunt nisi?`,
    markedPrice: 35.00,
    discountedPrice : 20.00,
    quantityStock : 22,
    category : `sports`,
    rating: 5,
    size: ['XS', 'S' , 'M', 'L', 'XL'],
    color: ['Black', 'White', 'Grey', 'Red', 'Blue']
  },
  {
    id : 18,
    name : `Swimming Kits`,
    image : `img/swimming.jpg`,
    description : `Here is a shot of this product that might entice a user to click and add it to their cart.`,
    extra: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil nobis dolorem ea aliquid, aspernatur non commodi deserunt dolorum atque a incidunt, pariatur ipsa, accusantium temporibus. Corporis asperiores tenetur deserunt nisi?`,
    markedPrice: 45.00,
    discountedPrice : 40.00,
    quantityStock : 20,
    category : `sports`,
    rating: 3,
    size: ['XS', 'S' , 'M', 'L', 'XL'],
    color: ['Black', 'White', 'Grey', 'Red', 'Blue']
  },
  {
    id : 19,
    name : `Chess Board`,
    image : `img/chess-board.jpg`,
    description : `Here is a shot of this product that might entice a user to click and add it to their cart.`,
    extra: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil nobis dolorem ea aliquid, aspernatur non commodi deserunt dolorum atque a incidunt, pariatur ipsa, accusantium temporibus. Corporis asperiores tenetur deserunt nisi?`,
    markedPrice: 15.00,
    discountedPrice : 10.00,
    quantityStock : 20,
    category : `sports`,
    rating: 2.5,
    size: ['XS', 'S' , 'M', 'L', 'XL'],
    color: ['Black', 'White', 'Grey', 'Red', 'Blue']
  },
  {
    id : 20,
    name : `Hockey stick`,
    image : `img/hockey-stick.jpg`,
    description : `Here is a shot of this product that might entice a user to click and add it to their cart.`,
    extra: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil nobis dolorem ea aliquid, aspernatur non commodi deserunt dolorum atque a incidunt, pariatur ipsa, accusantium temporibus. Corporis asperiores tenetur deserunt nisi?`,
    markedPrice: 65.00,
    discountedPrice : 55.00,
    quantityStock : 20,
    category : `sports`,
    rating: 3.5,
    size: ['XS', 'S' , 'M', 'L', 'XL'],
    color: ['Black', 'White', 'Grey', 'Red', 'Blue']
  },



];
function getRatingAsString(rating) /* gives star rating symbol on each product based on rating value of each product  */
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

function getProductsAsString(product) /* returns all products as a string of HTML to render on page */
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


function displayProducts(array) /* show(print) products on page */
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


function renderProductsFromArray(array) /* displays products on page */
{
  // if array size is less than 5 display all in one page and display pagination
  if (array.length <= 5){
    displayProducts(array);
    let pageNum = 1;
    document.getElementById("pagination").innerHTML= displayPaginationAsString(array.length, array.length, pageNum);
  }
  //if array size is bigger than 5 display first 5 in one page and listen to other pages clicked
  else if (array.length > 5){ 
    displayProducts(array.slice(0,5));
    let pageNum = 1;
    document.getElementById("pagination").innerHTML= displayPaginationAsString(array.length, array.slice(0,5).length, pageNum);
    listenPageClicked(array);
  }
}
function listenPageClicked (array) /* listen to pagination clicked if there are more tham 5 products to display */
{
  document.querySelectorAll(".pageNum").forEach(p => p.addEventListener(`click`, (e) => {
   let arrayToDisplay=[];
    e.preventDefault();
    if (e.target.dataset.value == '1')
    {
       arrayToDisplay = (array.slice(0, 5));
       document.querySelector(".productString").innerHTML = PaginationFirstString(arrayToDisplay.length, 1);
    }
    else if (e.target.dataset.value == '2')
    {
      arrayToDisplay = array.slice(5,10);
      document.querySelector(".productString").innerHTML = PaginationFirstString(arrayToDisplay.length+5, 6);
    }
    else if(e.target.dataset.value == '3')
    {
      arrayToDisplay = array.slice(10,15);
      document.querySelector(".productString").innerHTML = PaginationFirstString(arrayToDisplay.length+10, 11);
    }
    else if (e.target.dataset.value == '4')
    {
      arrayToDisplay = array.slice(15,20);
      document.querySelector(".productString").innerHTML = PaginationFirstString(arrayToDisplay.length+15, 16);
    }
    displayProducts(arrayToDisplay);
    document.querySelector('.active').classList.toggle("active");
       e.target.classList.toggle("active");
  }));
}

function sortTheProducts(toDisplay) /* sort the array according to sorting selected */
{
 let sortby = document.getElementById("sort").value;
 const sortedArray = toDisplay.slice();
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
 return(sortedArray) ;
}
function categoriesBy(array) /* categories allproducts on basis of each caategories */
{
  let catby = document.getElementById("categ").value;
  const Arraycopy = array.slice();
  let categArray=[];
  if (catby == 'clothes')
  {
     for(let i=0; i< Arraycopy.length; i++ )
     {  
       
       if (Arraycopy[i].category == 'clothes')
       {
         categArray.push(Arraycopy[i]);
       }
     }
  }
  else if (catby == 'shoes')
  {
    for(let i=0; i<Arraycopy.length; i++ )
    {
      if (Arraycopy[i].category == 'shoes')
      {
        categArray.push(Arraycopy[i]);
      }
    }
  }
  else if (catby == 'sports')
  {
    for(let i=0; i<Arraycopy.length; i++ )
    {
      if (Arraycopy[i].category == 'sports')
      {
        categArray.push(Arraycopy[i]);
      }
    }
  }
  else if (catby == 'watches')
  {
    for(let i=0; i<Arraycopy.length; i++ )
    {
      if (Arraycopy[i].category == 'watches')
      {
        categArray.push(Arraycopy[i]);
      }
    }
  }
  return categArray;
}
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
function displayPaginationAsString(numOfProducts, productsLength, pageNum)/* display pagination dynamically based on number of products */
{ 
  let page = parseInt(pageNum);
  let numOfPages = Math.ceil(numOfProducts/productsLength);
  let pagination= `<div class="page-align">
                  <p><span class= "productString">${PaginationFirstString(productsLength, page)}</span> of ${numOfProducts} products</p>
                  <nav aria-label="Product Pages" class="pagination">
                  <a href="#" aria-label="Previous page">&laquo;</a>
                  <a href="#" class="active pageNum" data-value="${page}" aria-label="Current Page, Page 1" aria-current="true">${page}</a>`;
   for(let i=2; i<=numOfPages; i++)
   {
        pagination += `<a href="#" class="pageNum" data-value="${i}" aria-label="Page ${i}">${i}</a>`;
   }     
pagination+= `<a href="#" aria-label="Next page">&raquo;</a>`;
return pagination;
}


function PaginationFirstString(productsLength, page) /* change pagination string if next page is clicked  */
{
  
  if (productsLength== 1 || productsLength == 6 || productsLength == 11 || productsLength == 16)
  {
    return `${productsLength}`
  }
  else
  {
   return  `${page} - ${productsLength}`;
  }
}
function submitTheSearchForm(e) /* all products that matches (based on name and price) to term searched in search filed are returned as array */
{
  
  const filteredProducts = allproducts.filter(p => p.name.toLowerCase().includes(e.target.value) || p.discountedPrice <= (parseFloat(e.target.value)))

//  console.log(allproducts.filter(p => p.discountedPrice <= (parseFloat(e.target.value))));
  return filteredProducts;
  // renderProductsFromArray(filteredProducts);
}


window.addEventListener("load", ()=> { /* things to be done when page is loaded */
    let dropMenu = document.getElementById("menu");
    let filterBtn = document.querySelector(".filter-btn");
    let sort = document.getElementById("sort");
    let categorizedArray= allproducts; //by default category is all
    let arrayToDisplay = [];
    renderProductsFromArray(allproducts); // displays all products on first render
   
   document.getElementById("find").addEventListener("input", (e) => {
      arrayToDisplay = submitTheSearchForm(e);
      renderProductsFromArray(arrayToDisplay) // display the product array after product is matched to term typed in search field
   });


   document.getElementById("categ").addEventListener("change", ()=> {
     arrayToDisplay = categoriesBy(allproducts);
     renderProductsFromArray(arrayToDisplay); 
     categorizedArray = arrayToDisplay; 
     // listen to category change event
   // receive the categorized array
   // render the array to page
   // render back the page view
   });  
    
    sort.addEventListener("change", () => {
      arrayToDisplay = sortTheProducts(categorizedArray); // by default sorting works for allproducts, if categoried than sorting works for categoried array 
      renderProductsFromArray(arrayToDisplay);
    });
    // sort.addEventListener("change", sortTheProducts);
    filterBtn.addEventListener("click",filterVisible);
    dropMenu.addEventListener("click", menuVisible);
});

