//navbar dropdown
let navbar = document.querySelector('.navbar')

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('activate')
    cartItem.classList.remove('activate');
    search.classList.remove('activate');
}

let cartItem = document.querySelector('.cart-item-container')

document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('activate')
    navbar.classList.remove('activate');
    search.classList.remove('activate');
}

let search = document.querySelector('.search-form')

document.querySelector('#search-btn').onclick = () => {
    search.classList.toggle('activate')
    navbar.classList.remove('activate');
    cartItem.classList.remove('activate');
}

window.onscroll = () =>{
    navbar.classList.remove('activate');
    cartItem.classList.remove('activate');
    search.classList.remove('activate');
}

//Html 

let footerLinks = document.querySelector('.footer .links')
let navbarLinks = ['home', 'menu', 'products', 'review', 'contact', 'blog']
var html=""
for(i=0;i<navbarLinks.length;i++){
    html+=`<a href="#${navbarLinks[i]}">${navbarLinks[i]}</a>`
}
// html+='<a href="assets/docs/documentation.pdf">Documentation</a>'
navbar.innerHTML = html;
footerLinks.innerHTML = html;


//cart

let cart = document.querySelector('.cart-item-container')
var cartContent= ['beer helmet' ,'iron beer mug', 'pistol cap opener']
var cartPrice = [14.99,4.99,2.99]
var cartHtml = ""
let iCart= 0;

//blueprints for items in cart

// do {
//   cartHtml += `  <div class="cart-item">
//         <span class="fas fa-times remove"></span>
//         <img src="assets/images/cart-item-${iCart+1}.jpg" alt="${cartContent[iCart]}">
//         <div class="content">
//             <h3>${cartContent[iCart]}</h3>
//             <div class="price">$${cartPrice[iCart]}</div>
//         </div>
//     </div>
//     `
//     iCart++
// } while (iCart<cartContent.length)

cartHtml+='<a href="#" class="btn checkout">checkout now</a>'
cart.innerHTML = cartHtml

//menu

let menu = document.querySelector('.menu .box-container');
var menuTitle = ['grimbergen blanche', 'grimbergen blonde', 'kabinet brrKaaa', 'kabinet superNova', 'kabinet porter', 'blue moon belgian white', 'guinness original dark', 'carlsberg' , 'budwieser', 'leffe brune']
var menuPrice = [5.99, 5.99, 6.99,6.99,6.99, 6.99, 7.99 , 8.99 , 3.49 , 6.99 ]
var menuPriceNew = menuPrice.map( x=> x*0.8)
var menuHtml= ""
for(i=0;i<menuTitle.length;i++){
    menuHtml+=`
    <div class="box">
        <img src="assets/images/menu-${i+1}.png" alt="${menuTitle[i]}">
        <h3>${menuTitle[i]}</h3>
        <div class="price">$${Math.round(menuPriceNew[i])} <span>${menuPrice[i]}</span></div>
        <a class="btn add-to-cart">add to cart</a>
    </div>
    `
}
menu.innerHTML = menuHtml;

//products

let products = document.querySelector('.products .box-container')
var productName = ['beer dispenser', 'wooden beer cup', 'retro beer bucket']
var productRating = [5 , 5, 4]
var productPrice = [39.99, 8.99 , 14.99]
var productPriceNew = productPrice.map( x => x*0.9)
var productHtml= ""

for(let i in productName){
    productHtml+=`
    <div class="box">
    <div class="icons">
        <a class="fas fa-shopping-cart add-to-cart"></a>
        <a class="fas fa-heart like"></a>
        <a class="fas fa-eye"></a>
    </div>
    <div class="image">
        <img src="assets/images/product-${parseInt(i)+1}.jpg" alt="${productName[i]}">
    </div>
    <div class="content">
        <h3>${productName[i]}</h3>
        <div class="stars">
            ${starRating(productRating[i])}
        </div>
        <div class="price">$${Math.round(productPriceNew[i])} <span>${productPrice[i]}</span></div>
    </div>
</div>
    `
}
products.innerHTML = productHtml;

//review

let review = $('.review .box-container')
var reviewText = ['Many beers from around the world to choose from. You can stand inside, or sit in the beer garden just next to it. A lovely break.' ,'Excellent place for beer! Good food too and a fun atmosphere. Not your traditional pub, which we love when looking for more craft beers! Very friendly staff','Beer beer and beer. Its all about the beer. Do you like beer. Of course you do. It is an immutable law. No one alive does not like beer there are just some who havent realised it yet. When you become one who has realised then go here and sate your palate.']
var reviewName = ['Dejan Govedarica', 'Mulan Putrović', 'Xin Zhao']
var reviewRating = [5,4,5]
var reviewHtml=""

for(let i=0;i<reviewName.length;i++){
    reviewHtml+=`
            <div class="box">
                <img src="assets/images/quote.png" alt="quote" class="quote">
                <p>${reviewText[i]}</p>
                <img src="assets/images/pic-${i+1}.jpg" alt="user-${i+1}" class="user">
                <h3>${reviewName[i]}</h3>
                <div class="stars">
                    ${starRating(reviewRating[i])}
                </div>
            </div>
    `
}
review.html(reviewHtml);

//blog

let blog = document.querySelector('.blog .box-container')
var blogTitle = ['A Few Words on Austrian Beer', 'Brewing Beer in San Francisco']
var blogCreator = ['admin', 'Žarko Cvijanović']
var blogContent = ['Few countries have extant brewing traditions as old as Austria’s, or contain the fixtures of historic brewing countries. It’s also one of only three countries where the standard mass market lager is equivalent in quality and flavor to so-called craft beers elsewhere.','Five years ago I spent an afternoon with Dave McLean of Magnolia Brewery. Since then, the beer industry, San Francisco, and Magnolia—later purchased by New Belgium, which was itself purchased by Kirin—have all gone through major changes.']
var blogContentExtendet = [`Austrians love their beer, consuming more per capita than anyone but the Czechs. I toured the Schwechat Brewery (Anton Dreher’s old place, now owned by Brau Union, itself owned by Heineken), and the managing director there, Andreas Urban, told me that this number is not in decline as it is nearly everywhere else. He was quite bullish on Austrian beer, which was refreshing to hear. Given that almost all of it is the kind of beer his company makes, he ought to be.

The standard style of beer here is—I don’t mean to startle you—a pale lager of around 4.5 - 5%. In a lineup with lightly hopped German pilsners and helleses, the average American would be hard-pressed to distinguish it. Curiously, the Austrians call this beer a märzen. I found no good explanation why this would be. I assumed it followed the lightening that happened in German beer over the past thirty years, but when I suggested this to Andreas, he said. “To me, that is not correct.” He’s been brewing since the early 1990s, so he ought to know. `, `Those who have seen Dave McLean or visited Magnolia, the brewery he founded, may be tempted to jump to certain conclusions. The original brewery is located a block from the most famous intersection in America—the corner of Haight and Ashbury. The brewery’s founder, Dave McLean (rhymes with bean) looks like more than a passable facsimile for Jerry Garcia. And, on the overcast morning I visited, McLean was sporting a t-shirt commemorating the 50th anniversary of the Grateful Dead’s founding—containing a typically obscure, inside reference only other Deadheads would appreciate. It would be easy enough to look upon these sights as conclusive evidence that Magnolia’s essence comes with the aroma of Nag Champa.`]
var blogHtml=""

for(let i in blogTitle){
    blogHtml+=`
    <div class="box">
        <div class="image">
            <img src="assets/images/blog-${parseInt(i)+1}.jpg" alt="${blogTitle[i]}">
        </div>
        <div class="content">
            <a href="#" class="title">${blogTitle[i]}</a>
            <span>by ${blogCreator[i]}</span>
            <p>${blogContent[i]}</p>
            <a class="btn extend-btn">read more</a>
            <p class="extend">${blogContentExtendet[i]} \n <a class="invert-btn">Read Less</a></p>
        </div>
    </div>
    `
}
blog.innerHTML=blogHtml;

//social media
let socialMedia = $('.footer .share')
let socialMediaList = ['facebook','instagram','twitter','pinterest']
var socialMediaHtml= ""

for(let i of socialMediaList){
    socialMediaHtml+=`
    <a href="#" class="fab fa-${i}"></a>
    `
}
socialMedia.html(socialMediaHtml)

//slider

var backgroundImage = document.querySelector('.home')
var sliderImages = ['home-img','home-img-2','home-img-3']
var imageCounter = 0
window.onload= slider();

//read more 

var readMoreBtn = $('.extend-btn');
var readLessBtn = $('.invert-btn')

readMoreBtn.click(function() {
   $(this).addClass('hide')
   $(this).next().css('display', 'block')
})

readLessBtn.click(function(){
    $(this).parent().css('display', 'none')
    $(this).parent().prev().removeClass('hide');
})

//alerts

$('.add-to-cart').click( function (){
    alert('Item added to Cart')
})
$('.like').click( function (){
    alert('Item added to Wishlist')
})
$('.remove').click( function (){
    alert('Item removed from Cart')
})
$('.checkout').click( function (){
    alert('Order created successfully')
})

//form regex

const reName = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
const reEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const reNumber = /([0-9\s\-]{7,})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/

//Functions

function contactHandeler(){
    var name, email,  number, text, nameErr , emailErr, numberErr, textErr
    var errors= 0
    name = $('#name')
    email = $('#email')
    number = $('#number')
    text = $('#text')
    nameErr = $('#nameError')
    emailErr = $('#emailError')
    numberErr = $('#phoneError')
    textErr = $('#textError')
    
    if(name.val()==""){
        nameErr.html("This field is empty!")
        errors++
    }else if(!testRegex(reName,name.val())){
        nameErr.html("Invalid name! Name must contain only letters! (ex. John Doe)")
        errors++
    }else{
        nameErr.html(" ")
    }

    if(email.val()==""){
        emailErr.html("This field is empty!")
        errors++
    }else if(!testRegex(reEmail,email.val())){
        emailErr.html("Invalid email!  (ex. johndoe@mail.com)")
        errors++
    }else{
        emailErr.html(" ")
    }

    if(number.val()==""){
        numberErr.html("This field is empty!")
        errors++
    }else if(!testRegex(reNumber,number.val())){
        numberErr.html("Invalid number! Number must contain minimum 7 numbers! (ex. +381601234567)")
        errors++
    }else{
        numberErr.html(" ")
    }

    if(text.val()==""){
        textErr.html("This field is empty!")
        errors++
    }else{
        textErr.html("")
    }

    if(errors == 0){
        alert(`${text.val()} - ${name.val()}`)
        name.val('')
        email.val('')
        number.val('')
        text.val('')
    }
}

function testRegex(regex , value){
    return regex.test(value)
}

function starRating(value){
    var stars = ""
    switch (value) {
        case 1:
            stars+=`<i class="fas fa-star"></i>`
            break;
        case 2:
            stars+=`<i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>`
            break;
        case 3:
            stars+=`<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>`
            break;
        case 4:
            stars+=`<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>`
            break;
        case 5:
            stars+=`<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>`
            break;
    }
    return stars;
}

function slider(){
    if(imageCounter<sliderImages.length){
        backgroundImage.style.backgroundImage = `url('assets/images/${sliderImages[imageCounter]}.jpg')`
        imageCounter++
    }
    else{
        imageCounter=0
    }
    setTimeout('slider()',5000)
}


