function seleccionar(link){
    var opciones = document.querySelector('#nav');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    var x = document.getElementById("nav");
    x.className="";
}

function responsiveMenu(){
    var x = document.getElementById("nav");
    if(x.className === ""){
        x.className = "responsive";
    }else{
        x.className="";
    }
}

window.onscroll = function(){
    efectoHabilidades()
};

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight = skills.getBoundingClientRect().top;
    if (distancia_skills <= 600){
        document.getElementById("py").classList.add("barra-progreso1");
        document.getElementById("django").classList.add("barra-progreso2");
        document.getElementById("tf").classList.add("barra-progreso3");
        document.getElementById("scikit").classList.add("barra-progreso4");
        document.getElementById("html").classList.add("barra-progreso5");
        document.getElementById("android").classList.add("barra-progreso6");
        document.getElementById("arduino").classList.add("barra-progreso7");
        document.getElementById("java").classList.add("barra-progreso8");
    }
}

