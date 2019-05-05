
let product = {
   id:"one",
   title: "HP Laptop",
   price: "€299.99",
   description: "The best laptop in the market,The all new modern ultra-slim design of the HP ProBook 645 delivers efficiently powerful performance",
   picture: "../images/pro_img/product_1.jpg"
};

let product2 = {
   id:"two",
   title: "Smart Watch",
   price: "€170.99",
   description: "The Apple Watch and Wear OS (formerly Android Wear) models prompted",
   picture: "../images/pro_img/product_2.jpeg"
};

let product3 = {
   id:"three",
   title: "Iphone X",
   price: "€1699.99",
   description: "Super Retina display in the iPhone X is the first high dynamic range (HDR) OLED display Apple incorporated into an iPhone.",
   picture: "../images/pro_img/product_3.jpg"
};

let product4 = {
   id:"four",
   title: "Beats Headset",
   price: "€199.99",
   description: " Up to 40 hours of battery life, Beats Solo3 Wireless is your perfect everyday headphone",
   picture: "../images/pro_img/product_4.jpeg"
};
let product5 = {
   id:"five",
   title: "Washing Machine",
   price: "€899.99",
   description: "It's unique tumble care technology senses the laundry conditions and washes the clothes in a unique 360° tumble motion.",
   picture: "../images/pro_img/product_5.jpg"
};
let product6 = {
   id:"six",
   title: "beats Pill Speakers",
   price: "€279.99",
   description: " The Beats Pill+ speaker has up to 12 hours of battery life to stay charged on the go. Get a quick charge in 3 hours with the Lightning cable and",
   picture: "../images/pro_img/product_6.jpg"
};


let productObjects = [product, product2, product3, product4, product5, product6];
for (let i = 0; i < productObjects.length; i++) {
   let currentProduct = productObjects[i];
   let product_Template = document.getElementById("product_template");
   let newProductElement = product_Template.cloneNode(true);
   newProductElement.id = currentProduct.id;
   newProductElement.querySelector(".product-title").innerHTML = currentProduct.title;
   newProductElement.querySelector(".title").innerHTML = currentProduct.title;


   newProductElement.querySelector(".price").innerHTML = currentProduct.price;
   newProductElement.querySelector(".description").innerHTML = currentProduct.description;

   newProductElement.querySelector('.product-img').style.backgroundImage = "url(" + currentProduct.picture + ")";

   let products = document.getElementById('products');
   products.appendChild(newProductElement);

   console.log("title:" + currentProduct.title + " price:" + currentProduct.price + "description:" + currentProduct.description + "picture:" + currentProduct.picture);
}

const buttons = document.querySelectorAll('.button');
const addTexts = document.querySelectorAll('.add-text');
const addedTexts = document.querySelectorAll('.added-text');


for (let i = 0; i < buttons.length; i++) {
   buttons[i].addEventListener('click', function () {
      addTexts[i].classList.toggle('hidden');
      addedTexts[i].classList.toggle('hidden');
   })
}

