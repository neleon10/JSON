
//Funcion que crea elementos HTML con parametros de API
function pasta(pastaimagen,pastaname,pastaprecio,pastapresentacion) {
   
    let datosPasta = `<div class="infoContainer">
                        <div class="info">
                            <div class="imagen">
                                <img src="${pastaimagen}">
                            </div>  
                            <p>${pastaname}</p>
                            <p>Precio ${pastaprecio}</p>
                            <p>${pastapresentacion}</p>
                        </div>
                      </div>`
    return datosPasta;
};


const main = document.querySelector('main');

fetch('https://619967319022ea0017a7ae59.mockapi.io/Pastas')
.then(response => response.json())
.then(data  => {
    data.forEach(pastas => {
        let div = document.createElement('div');
        div.innerHTML = pasta(pastas.pastaimagen,pastas.pastaname,pastas.pastaprecio,pastas.pastapresentacion);
        main.appendChild(div);
    });
});

