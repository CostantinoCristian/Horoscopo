// seccion 1 Horoscopo
let titulo1 = document.createElement("h1");
titulo1.innerText = "Horóscopo";
document.body.appendChild(titulo1);
let seccion1 = document.createElement("section");
seccion1.classList.add("horoscopo1");

document.body.appendChild(seccion1);
let divhor1 = document.createElement("div");
divhor1.setAttribute("id", "div1");
seccion1.appendChild(divhor1);
let divhor2 = document.createElement("div");
divhor2.setAttribute("id", "div2");
seccion1.appendChild(divhor2);

//traer el XMl horoscopo
let peticion1 = new XMLHttpRequest();
peticion1.open("GET", "XML/Horoscopo.xml");
peticion1.send();
peticion1.onreadystatechange = cargarTexto1;
function cargarTexto1(){
    if (peticion1.readyState==4){
        if (peticion1.status==200){
            let Horoscopo = peticion1.responseXML;
            console.log(Horoscopo);
            let signos = Horoscopo.querySelectorAll("Signo");
            console.log(signos.length);

            for (let i=0; i<signos.length; i++) {
                let signo = document.createElement("div");
                signo.id = "signo";

                let img = document.createElement("img");
                img.src = signos[i].querySelector("img").textContent;
                let nombre = document.createElement("h3")
                nombre.innerText = signos[i].querySelector("nombre").textContent;

                signo.append(img, nombre);
                document.querySelector("#div1").appendChild(signo);

                signo.addEventListener("click", function() {
                    document.querySelector("#div2").innerHTML = "";
                    let imgdet = document.createElement("img");
                    imgdet.src = signos[i].querySelector("img").textContent;
                    imgdet.id = "img2";
                    let nombredet = document.createElement("h2");
                    nombredet.innerText = signos[i].querySelector("nombre").textContent;
                    let fechas = document.createElement("h3");
                    fechas.innerText = "desde "+signos[i].querySelector("f_inicio").textContent+" hasta "+signos[i].querySelector("f_fin").textContent;
                    let detalles = document.createElement("p");
                    detalles.innerText = "\n" + signos[i].querySelector("detalles").textContent;
                    let pred = document.createElement("p");
                    pred.innerHTML = "<br><b>Predicción de hoy:</b><br>" + signos[i].querySelector("prediccion").textContent;
                    document.querySelector("#div2").append(imgdet, nombredet, fechas, detalles, pred);

                })
            }
        }
    }
}


//seccion 2 horoscopo chino
let titulo3 = document.createElement("h1");
titulo3.innerText = "Horóscopo Chino";
document.body.appendChild(titulo3);
let seccion3 = document.createElement("section");
seccion3.className="horoscopo2";
document.body.appendChild(seccion3);
let divhc1 = document.createElement("div");
divhc1.setAttribute("id", "div3");
seccion3.appendChild(divhc1);
let divhc2 = document.createElement("div");
divhc2.setAttribute("id", "div4");
seccion3.appendChild(divhc2);

//traer el XML HorChino
let peticion2 = new XMLHttpRequest();
peticion2.open("GET", "XML/Horoscopo2.xml");
peticion2.send();
peticion2.onreadystatechange = cargarTexto2;
function cargarTexto2(){
    if (peticion2.readyState==4){
        if (peticion2.status==200){
           let Horoscopo2 = peticion2.responseXML;
           console.log(Horoscopo2);
           let animales = Horoscopo2.querySelectorAll("Signo");
           console.log(animales.length);

           for (let i=0; i<animales.length; i++) {
                let signoC = document.createElement("div");
                signoC.id = "signo";
                let img = document.createElement("img");
                img.src = animales[i].querySelector("img").textContent;
                let animal = document.createElement("h3")
                animal.innerText = animales[i].querySelector("animal").textContent;

                signoC.append(img, animal);
                document.querySelector("#div3").appendChild(signoC);

                signoC.addEventListener("click", function() {
                    document.querySelector("#div4").innerHTML = "";
                    let imgAndet = document.createElement("img");
                    imgAndet.src = animales[i].querySelector("img").textContent;
                    imgAndet.id = "img2";
                    let animaldet = document.createElement("h2");
                    animaldet.innerText = animales[i].querySelector("animal").textContent;
                    let anyos = document.createElement("h3");
                    anyos.innerText = animales[i].querySelector("anyos").textContent;
                    let detalles = document.createElement("p");
                    detalles.innerText = "\n" + animales[i].querySelector("detalles").textContent;
                    divhc2.append(imgAndet, animaldet, anyos, detalles);
                })
        }
        }
    }
}


let titulo2 = document.createElement("h1");
titulo2.innerText = "¿De qué signo eres?";
document.body.appendChild(titulo2);
let seccion2 = document.createElement("section");
seccion2.className = "calculadora";
document.body.appendChild(seccion2)
let linea1 = document.createElement("div");
seccion2.appendChild(linea1);
let txt_alm = document.createElement("p");
txt_alm = "Ingresa tu fecha de nacimiento: ";
let fechanac = document.createElement("input");
fechanac.type = "date";
let boton = document.createElement("input");
boton.type = "button";
boton.value= "Calcular";
linea1.append(txt_alm, fechanac, boton);
let linea2 = document.createElement("div");
seccion2.appendChild(linea2);
let txt_ss = document.createElement("p");
txt_ss = "Tu signo zodiacal es: ";
linea2.append(txt_ss);
let linea3 = document.createElement("div");
seccion2.appendChild(linea3);
let txt_shc = document.createElement("p");
txt_shc = "Tu animal es:  ";
linea3.append(txt_shc);

boton.addEventListener("click", function(){
    let date = new Date(fechanac.value);
    let dia = (date.getDate());
    let mes = (date.getMonth()+1);
    let anyo = (date.getFullYear());

    //calcula el signo sodiacal
    let sig1="";
    if((dia>=21&&mes==3)||(dia<=20&&mes==4)){
        sig1= "Aries";}
    if((dia>=24&&mes==9)||(dia<=23&&mes==10)) {
        sig1="Libra";}
    if((dia>=21&&mes==4)||(dia<=21&&mes==5)){
        sig1="Tauro";}
    if((dia>=24&&mes==10)||(dia<=22&&mes==11)){
        sig1="Escorpio";}
    if((dia>=22&&mes==5)||(dia<=21&&mes==6)){
        sig1="Géminis";}
    if((dia>=23&&mes==11)||(dia<=21&&mes==12)){
        sig1="Sagitario";}
    if((dia>=21&&mes==6)||(dia<=23&&mes==7)){
        sig1="Cáncer";}
    if((dia>=22&&mes==12)||(dia<=20&&mes==1)){
        sig1="Capricornio";}
    if((dia>=24&&mes==7)||(dia<=23&&mes==8)){
        sig1="Leo";}
    if((dia>=21&&mes==1)||(dia<=19&&mes==2)){
        sig1="Acuario";}
    if((dia>=24&&mes==8)||(dia<=23&&mes==9)){
        sig1="Virgo";}
    if((dia>=20&&mes==2)||(dia<=20&&mes==3)){
        sig1="Piscis";}

    linea2.innerHTML="";
    linea2.append(txt_ss,sig1);

    //calcula el animal del sodiaco chino
    let sig2="";
    let resto = anyo % 12;
    if (resto == 0) {
        sig2="Mono";}
    if (resto == 1) {
        sig2="Gallo";}
    if (resto == 2) {
        sig2="Perro";}
    if (resto == 3) {
        sig2="Cerdo";}
    if (resto == 4) {
        sig2="Rata";}
    if (resto == 5) {
        sig2="Buey";}
    if (resto == 6) {
        sig2="Tigre";}
    if (resto == 7) {
        sig2="Conejo";}
    if (resto == 8) {
        sig2="Dragon";}
    if (resto == 9) {
        sig2="Serpiente";}
    if (resto == 10) {
        sig2="Caballo";}
    if (resto == 11) {
        sig2="Cabra";}

    linea3.innerHTML="";
    linea3.append(txt_shc,sig2);
})