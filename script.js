
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// ======================================================================================//



const cartBtn = document.querySelector('#cart-icon');
const cart = document.querySelector('.cart');
const closeBtn = document.querySelector('#close');


cartBtn.addEventListener('click', () => {
    cart.classList.add('cart-active');
});

closeBtn.addEventListener('click', () => {
    cart.classList.remove('cart-active');
});

document.addEventListener('DOMContentLoaded', loadfood);

function loadfood() {
    loadcontent();
}
// Remove item

function loadcontent() {
    let removeBtn = document.querySelectorAll('.trash');
    // console.log(removeBtn);
    removeBtn.forEach((btn) => {
        btn.addEventListener('click', removeItem);
    });



    //Change Quantity

    let changeQty = document.querySelectorAll('.cart-qty');
    // console.log(changeQty);
    changeQty.forEach((input) => {
        input.addEventListener('change', changeQnty);
    });



    //Add Cart

    let cartAdd = document.querySelectorAll('.add-cart');
    // console.log(cartAdd);
    cartAdd.forEach((add) => {
        add.addEventListener('click', addCart);
    });

    updateTotal();
}

// -------------------------------------------------------------------------------

function removeItem() {
    if (confirm('Are you sure to remove this item? ')) {
        let title = this.parentElement.querySelector('.cart-food-title').innerHTML;
        listitem = listitem.filter(el => el.title != title);
        this.parentElement.remove();
        loadcontent();
    }
}
function changeQnty() {
    if (isNaN(this.value) || this.value < 1) {
        this.value = 1;
    }
    loadcontent();
}
let listitem = [];

function addCart() {
    let food = this.parentElement;
    // console.log(food);
    let title = food.querySelector('.food-title').innerHTML;
    let price = food.querySelector('.food-price').innerHTML;
    let imgsrc = food.querySelector('.food-img').src;

    let newone = {
        title, price, imgsrc
    }
    console.log(newone);
    if (listitem.find((el) => el.title == newone.title)) {
        alert("This product already Added in Cart");
        return;
    } else {
        listitem.push(newone); 
    }

    let createnewElement = newproduct(title, price, imgsrc);
    // console.log(createnewElement);
    let element = document.createElement('div');
    element.innerHTML = createnewElement;

    let basket = document.querySelector('.cart-content');
    basket.append(element);
    loadcontent();

}

function newproduct(title, price, imgsrc) {
    return `
<div class="cart-box">
                    <img src="${imgsrc}" class="cart-img">
                    <div class="detail-box">
                        <div class="cart-food-title">${title}</div>
                        <div class="price-box d-flex justify-content-between my-2">
                            <div class="cart-price">${price}</div>
                            <div class="cart-amt">${price}</div>
                        </div>
                        <input type="number" class="cart-qty" value="1">

                    </div>
                    <ion-icon name="trash-outline" class="trash"></ion-icon>
                </div>
`;
}
function updateTotal() {
    const cartitem = document.querySelectorAll('.cart-box');
    const totalValue = document.querySelector('.total-amt');
    let total = 0;

    cartitem.forEach(product => {
        let priceElement = product.querySelector('.cart-price');
        // console.log(priceElement);
        let price = parseFloat(priceElement.innerHTML.replace("Rs.", ""));


        let Qty = product.querySelector('.cart-qty').value;
        total += (Qty * price);
        // total=total+(Qty*price);
        // console.log(total);

        product.querySelector('.cart-amt').innerHTML = "Rs." + (Qty * price);

    });
    totalValue.innerHTML = 'Rs.' + total + '/-';


    const cartcount = document.querySelector('.cart-count');
    let count = listitem.length;

    cartcount.innerHTML = count;


    if (count == 0) {
        cartcount.style.display = 'none';
    } else {
        cartcount.style.display = 'block';
    }

}
console.log(listitem.length);
let orderBtn = document.querySelector('#btn')

orderBtn.onclick = function () {

    console.log("dddddd");
}