

//Funcion que crea elementos HTML con parametros de API
function personajesHP(nombre,casa,foto,ojos) {
   
    let datos = `<div class="infoContainer"><p>${nombre}</p>
                <span class="House">${casa}</span>
                <div class="imagen"><img src="${foto}"></div>
                <span class="Eyes" >Eyes colour: ${ojos}</span>
                </div>`
    return datos;
};

// tomo datos de una API y llamo a función pasando parametros. 

const main = document.querySelector('main');//Selecciono <main>

fetch('https://hp-api.herokuapp.com/api/characters')
    .then(response => response.json())
    .then(
        personajes  => {
            personajes.forEach(x => {
                let article = document.createElement('article');//creo <article>
                article.innerHTML = personajesHP(x.name,x.house,x.image,x.eyeColour);//guardo lo que devuelve la fun. dentro de article.
                main.appendChild(article);//guardo <aricle> dentro de <main> 
            })
        });


