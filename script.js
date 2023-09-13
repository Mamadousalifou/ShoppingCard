// let newdiv = document.createElement('div');
// let olddiv = document.querySelector('#cart');
// olddiv.appendChild(newdiv);
// let headdiv = document.createElement('div');
// headdiv.style.display ='flex';
// headdiv.style.alignItems ='center';
// headdiv.style.justifyContent ='space-around';

// let n =1;

// newdiv.appendChild(headdiv);
// newdiv.style.backgroundColor ="red";
// //Le nom du produit
// let h51 = document.createElement('h5');
// h51.textContent =" Article 1  ";
// headdiv.appendChild(h51);

// //La quantité du produit
// let quantité = document.createElement('h5');
// quantité.textContent =" Quantité :  " + aad(n);
// headdiv.appendChild(quantité);;


// // Mes button Moin et Plus
// let bp =document.createElement('button');
// bp.textContent ="+";
// bp.setAttribute ('id','plus');
// bp.style.width ="30px";
// bp.style.height ="30px";
// headdiv.appendChild(bp);

// let bm =document.createElement('button');
// bm.textContent ="-";
// bm.style.width ="30px";
// bm.style.height ="30px";
// headdiv.appendChild(bm);

// //Image du produit
// let image  = document.createElement('img');
// image.src = './img/nike.png';
// image.style.width = '200px';
// image.style.height ='300px';
// newdiv.appendChild(image);



// //Mes button delete et Like
// let bdelete = document.createElement('button');
// bdelete.textContent ="DELETE";
// bdelete.style.width ="100px";
// bdelete.style.height ="30px";
// newdiv.appendChild(bdelete);

// let blike =document.createElement('button');
// blike.textContent ="LIKE";
// blike.style.width ="100px";
// blike.style.height ="30px";
// newdiv.appendChild(blike);



// let plus = document.getElementById('plus');
// plus.addEventListener('click',  function aad(n=1) {
//    n++
// console.log(n);
// return n

// })






// //Le prix total du panier
// let total = document.querySelector('#total-price');
// let totalprix = document.createElement('h5');
// totalprix.textContent= " Total price : ";
// total.appendChild(totalprix);

//Fin de l'exercice personnel pour la manipulation de dom

var produits = [
{nom : "Produit 1", prix : 20 , quantité : 1, img :'./img/nike.png'},
{nom : "Produit 2", prix : 10 , quantité : 1, img :'./img/f9645056.webp'},
{nom : "Produit 3", prix : 15 , quantité : 1, img :'./img/bff3c1c2.webp'},
{nom : "Produit 4", prix : 25 , quantité : 1, img :'./img/987ca2af.webp'},
]

// recuperation du div avec comme id 'card'
let oldiv = document.querySelector('#cart')



 produits.forEach( function( produit ) {
    let eproduit = document.createElement("div");
   
    eproduit.classList.add("produit");
//     eproduit.style.height ='400px'
    eproduit.style.margin ='20px';

   let headdiv = document.createElement('div')
eproduit.appendChild(headdiv);


// Créer l'élément pour afficher le nom de l'article
let Nomprod = document.createElement('span');
Nomprod.textContent =produit.nom;
headdiv.appendChild(Nomprod);


// Créer l'élément pour afficher la quantité de l'article

let qtprod = document.createElement('span');
qtprod.textContent =" Quantité : "+ produit.quantité ;
headdiv.appendChild(qtprod);


// Créer deux button pour jouer sur la quantité 

let plus = document.createElement('button');
plus.textContent ="+";
plus.addEventListener('click',function (){
produit.quantité++
qtprod.textContent =" Quantité : " + produit.quantité ;
UpdateTotal()
})

headdiv.appendChild(plus);

let moins = document.createElement('button');
moins.textContent ="-";
moins.addEventListener('click',function (){
    if(produit.quantité > 0){
        produit.quantité--
        qtprod.textContent =" Quantité : " + produit.quantité ;
        UpdateTotal()
    }
})
headdiv.appendChild(moins);

// Pour ajouter l'images


let img = document.createElement('img');
img.setAttribute('src',produit.img);
img.style.width ='100%'
img.style.height ='100%'
img.style.objectFit ='cover'

eproduit.appendChild(img);

let footerdiv = document.createElement("div");
eproduit.appendChild(footerdiv);

// Créer le bouton de suppression  de l'article
let supproduit = document.createElement('button');
supproduit.textContent ="DELETE";
supproduit.addEventListener('click',function (){
    oldiv.removeChild(eproduit);
    produits = produits.filter(function (i) {
      return i !== produit;
    });
    UpdateTotal()
    
})
footerdiv.appendChild(supproduit);


// Créer le bouton like de l'article
let likeproduit = document.createElement('button');
likeproduit.textContent ="Like";
likeproduit.classList.add("like-button");
likeproduit.addEventListener('click',function (){ 
    likeproduit.classList.toggle("liked");

    if (likeproduit.classList.contains("liked")) {
        produit.isLiked = true;
      likeproduit.style.color = "red";
    } else {
      produit.isLiked = false;
      likeproduit.style.color = "black";
    }
})

footerdiv.appendChild(likeproduit);






  //Ajouter l'element au panier
oldiv.appendChild(eproduit);
})


function  UpdateTotal() {
    var prixTotal = produits.reduce(function (total, produit) {
      return total + produit.prix * produit.quantité;
    }, 0);

    var Panier = document.querySelector("#total-price");
    Panier.textContent = "Prix Total: DH" + prixTotal;
  
  }


  UpdateTotal()

 
