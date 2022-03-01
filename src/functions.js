document.addEventListener("DOMContentLoaded", function(){

let imagenes= [
    {
        img:"src/assets/img/naruto.jpg",
        name:"Naruto",
    },
    {
        img:"src/assets/img/saas.jpg",
        name:"Sakura",
    },
    {
        img:"src/assets/img/kakashi.jpg",
        name:"Kakashi",
    },
    {
        img:"src/assets/img/jiraiya.jpg",
        name:"Jiraiya",
    },
    {
        img:"src/assets/img/hinata.jpg",
        name:"Hinata",
    },
    {
        img:"src/assets/img/gaara.jpg",
        name:"Gaara",
    },
    {
        img:"src/assets/img/naruto.jpg",
        name:"Naruto",
    },
    {
        img:"src/assets/img/saas.jpg",
        name:"Sakura",
    },
    {
        img:"src/assets/img/kakashi.jpg",
        name:"Kakashi",
    },
    {
        img:"src/assets/img/jiraiya.jpg",
        name:"Jiraiya",
    },
    {
        img:"src/assets/img/hinata.jpg",
        name:"Hinata",
    },
    {
        img:"src/assets/img/gaara.jpg",
        name:"Gaara",
    }
]

let tablero = document.querySelector(".tablero")
let imgElegida=[];
let imgElegidaId=[];
let aciertos = document.querySelector(".conteo")
let conteo = [];


imagenes.sort(()=>0.5 - Math.random());

function crearTablero(){

    for ( let i=0; i<imagenes.length; i++ ){
        var img= document.createElement("img");
        img.setAttribute("data-id",i);
        img.setAttribute("src","src/assets/img/pregunta.jpg");
        img.setAttribute("width","200px");
        tablero.appendChild(img);
        img.addEventListener("click", descubrirImagen);

     }

}

function descubrirImagen (){

    let imgClick= this.getAttribute("data-id");
    imgElegida.push(imagenes[imgClick].name);
    // alert(imagenes[imgClick].name);
    imgElegidaId.push(imgClick);
    this.setAttribute("src",imagenes[imgClick].img);

    if(imgElegida.length === 2){
        setTimeout(compararImagen, 300 );
    }
  
}


function compararImagen(){
    let todasLasImg = document.querySelectorAll("img");
    // let imgClick= this.getAttribute("data-id");
    // imgElegida.push(imagenes[imgClick].id);
    // imgElegidaId.push(imgClick);
    // console.log(imgElegida)

    let opcion1= imgElegidaId[0];
    let opcion2 = imgElegidaId[1];
    // let acierto=

   

    if (imgElegida[0] === imgElegida[1]){
        alert ("acertaste");

        todasLasImg[opcion1].setAttribute("src","src/assets/img/check.png")
        todasLasImg[opcion2].setAttribute("src","src/assets/img/check.png")
        todasLasImg[opcion1].setAttribute("class","disable")
        todasLasImg[opcion2].setAttribute("class","disable")
        
        conteo.push(imgElegida);

    } else {
        alert ("Intenta nuevamente");
        todasLasImg[opcion1].setAttribute("src","src/assets/img/pregunta.jpg")
        todasLasImg[opcion2].setAttribute("src","src/assets/img/pregunta.jpg")
       
        
    }

    imgElegida=[];
    imgElegidaId=[];

    aciertos.textContent = conteo.length;

    if(conteo.length === 3 ){ 
        aciertos.textContent="¡Lo lograste!"
        setTimeout(nuevoJuego, 2000 );
    }


}

function nuevoJuego () {

    aciertos.textContent="¡Nuevo juego por empezar!"
    setTimeout(refresh, 2100) ;
   
}

function refresh () {
    location.href=location.href
}


crearTablero();


})