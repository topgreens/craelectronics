
let product = {
   title: "HP Laptop",
   price: "€299.99",
   description: "the best laptop in the market",
   picture: "../images/pro_img/product_1.jpg"
};

let product2 = {
   title: "Smart Watch",
   price: "€170.99",
   description: "The Apple Watch and Wear OS (formerly Android Wear) models prompted",
   picture: "../images/pro_img/product_2.jpeg"
};

let product3 = {
   title: "Iphone X",
   price: "€1699.99",
   description: "lorem lorewjbjsdibdkjsbdijsbdisbdibsdjs",
   picture: "../images/pro_img/product_3.jpg"
};

let product4 = {
   title: "Beats Headset",
   price: "€199.99",
   description: "lorem lorewjbjsdibdkjsbdijsbdisbdibsdjs",
   picture: "../images/pro_img/product_4.jpeg"
};
let product5 = {
   title: "Washing Machine",
   price: "€899.99",
   description: "lorem lorewjbjsdibdkjsbdijsbdisbdibsdjs",
   picture: "../images/pro_img/product_5.jpg"
};
let product6 = {
   title: "beats Pill Speakers",
   price: "€279.99",
   description: "lorem lorewjbjsdibdkjsbdijsbdisbdibsdjs",
   picture: "../images/pro_img/product_6.jpg"
};


let productObjects = [product, product2,product3,product4,product5,product6];
for (let i = 0; i < productObjects.length; i++) {
   let currentProduct = productObjects[i];
   let product_Template = document.getElementById("product_template");
   let newProductElement = product_Template.cloneNode(true);
   delete newProductElement.id;
   newProductElement.querySelector(".product-title").innerHTML =currentProduct.title;
   newProductElement.querySelector(".title").innerHTML = currentProduct.title;


   newProductElement.querySelector(".price").innerHTML = currentProduct.price;
   newProductElement.querySelector(".description").innerHTML = currentProduct.description;

   newProductElement.querySelector('.product-img').style.backgroundImage = "url(" +currentProduct.picture + ")";

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

