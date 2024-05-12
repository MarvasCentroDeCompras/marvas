const allFilterItems = document.querySelectorAll('.filter-item');
const allFilterBtns = document.querySelectorAll('.filter-btn, .filter-btn3');


window.addEventListener('DOMContentLoaded', () => {
    allFilterBtns[0].classList.add('active-btn');
});
allFilterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        showFilteredContent(btn);
    });
});
function showFilteredContent(btn){
    allFilterItems.forEach((item) => {
        if(item.classList.contains(btn.id)){
            resetActiveBtn();
            btn.classList.add('active-btn');
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}
function resetActiveBtn(){
    allFilterBtns.forEach((btn) => {
        btn.classList.remove('active-btn');
    });
}


// Ocultar todos los elementos al principio
document.querySelectorAll('.filter-btns, .filter-btns2, .filter-btns3').forEach(function(element) {
    element.style.display = 'none';
});

// Mostrar solo el elemento correspondiente cuando se hace clic en los botones
document.getElementById('bebe').addEventListener('click', function() {
    document.querySelectorAll('.filter-btns, .filter-btns2, .filter-btns3').forEach(function(element) {
        element.style.display = 'none';
    });
    document.querySelector('.filter-btns').style.display = 'block';

    // Remover la clase 'selected' de todos los botones
    document.querySelectorAll('.ribbon-text').forEach(function(element) {
        element.classList.remove('selected');
    });
    // Agregar la clase 'selected' al botón presionado
    document.getElementById('bebe').classList.add('selected');
});

document.getElementById('hogar').addEventListener('click', function() {
    document.querySelectorAll('.filter-btns, .filter-btns2, .filter-btns3').forEach(function(element) {
        element.style.display = 'none';
    });
    document.querySelector('.filter-btns2').style.display = 'block';

    // Remover la clase 'selected' de todos los botones
    document.querySelectorAll('.ribbon-text').forEach(function(element) {
        element.classList.remove('selected');
    });
    // Agregar la clase 'selected' al botón presionado
    document.getElementById('hogar').classList.add('selected');
});

document.getElementById('mascota').addEventListener('click', function() {
    document.querySelectorAll('.filter-btns, .filter-btns2, .filter-btns3').forEach(function(element) {
        element.style.display = 'none';
    });
    document.querySelector('.filter-btns3').style.display = 'block';

    // Remover la clase 'selected' de todos los botones
    document.querySelectorAll('.ribbon-text').forEach(function(element) {
        element.classList.remove('selected');
    });
    // Agregar la clase 'selected' al botón presionado
    document.getElementById('mascota').classList.add('selected');
});

//ocultar
document.addEventListener('DOMContentLoaded', function() {
    const filterBtns = document.querySelectorAll('.ribbon-text');
    const filterItems = document.querySelectorAll('.filter-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Ocultar todos los elementos de filtro
            filterItems.forEach(item => {
                item.style.display = 'none';
            });

            // Mostrar elementos de filtro según el botón presionado
            if (btn.id === 'bebe') {
                document.querySelectorAll('.filter-item.all').forEach(item => {
                    item.style.display = 'block';
                });
            } else if (btn.id === 'hogar') {
                document.querySelectorAll('.filter-item.all2').forEach(item => {
                    item.style.display = 'block';
                });
            } else if (btn.id === 'mascota') {
                document.querySelectorAll('.filter-item.forrado, .filter-item.pino, .filter-item.accesorio').forEach(item => {
                    item.style.display = 'block';
                });
            }
        });
    });
});




document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const filterItems = document.querySelectorAll('.filter-item');

    searchInput.addEventListener('input', function() {
        const searchText = this.value.toLowerCase();

        filterItems.forEach(function(item) {
            const itemName = item.querySelector('.item-info').textContent.toLowerCase();
            if (itemName.includes(searchText)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const searchContainer = document.getElementById('searchContainer');
    const initialOffset = searchContainer.offsetTop; // Guarda la posición inicial de la barra de búsqueda

    window.addEventListener('scroll', function() {
        if (window.innerWidth <= 500 && window.pageYOffset > initialOffset) {
            searchContainer.classList.add('fixed-search'); // Agrega la clase cuando se desplaza hacia abajo
        } else {
            searchContainer.classList.remove('fixed-search'); // Elimina la clase cuando se desplaza hacia arriba
        }
    });
});
document.getElementById('homeBtn').addEventListener('click', function() {
    document.querySelector('.header-top').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('commentsBtn').addEventListener('click', function() {
    document.querySelector('.comentarios-section').scrollIntoView({ behavior: 'smooth' });
});

// slides de PORTADA

var images = ["images/portada1.png", "images/portada2.png", "images/portada3.png"];
var currentImageIndex = 0;
var slideshowElement = document.getElementById("slideshow");

function changeSlide() {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            slideshowElement.querySelector("img").src = images[currentImageIndex];
}

setInterval(changeSlide, 10000); // Cambiar cada 10 segundos
   




document.querySelectorAll('.imagen-pequena').forEach(function(imgPequena) {
    imgPequena.addEventListener('click', function() {
        var imagenGrande = this.getAttribute('data-imagen');
        mostrarModal(imagenGrande);
    });
});

function mostrarModal(imagen) {
    // Crea un div para el modal
    var modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = '<img src="' + imagen + '" class="modal-imagen">';

    // Añade el modal al body
    document.body.appendChild(modal);

    // Cierra el modal al hacer clic fuera de él
    modal.addEventListener('click', function() {
        modal.style.display = 'none';
        modal.remove();
    });

    // Cierra el modal al presionar la tecla Esc
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            modal.style.display = 'none';
            modal.remove();
        }
    });

    // Muestra el modal
    modal.style.display = 'block';
}



function openPopup() {
    document.getElementById("currentDate").textContent = getCurrentDate();
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("commentForm").reset();
}

function closeConfirmation() {
    document.getElementById("confirmation").style.display = "none";
}

function getCurrentDate() {
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1; // Los meses comienzan desde 0
    let year = today.getFullYear();

    return `${day}/${month}/${year}`;
}

let stars = document.querySelectorAll('.rating input');
let selectedPhotos = [];
let nameInput = document.getElementById('name');
let districtInput = document.getElementById('district');
let commentInput = document.getElementById('comment');

stars.forEach((star, index) => star.addEventListener('click', function () {
    let clickedStarIndex = Array.from(stars).indexOf(this);

    for (let i = 0; i <= clickedStarIndex; i++) {
        stars[i].checked = true;
    }
}));

function resetAllFields() {
    stars.forEach(star => star.checked = false);
    selectedPhotos = [];
    nameInput.value = '';
    districtInput.value = '';
    commentInput.value = '';
    document.getElementById('selectedPhotos').innerHTML = '';
}

document.querySelector('.close').addEventListener('click', closePopup);
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closePopup();
    }
});

document.getElementById('commentForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar el envío del formulario normalmente

    // Obtener los datos del formulario
    let formData = new FormData(this);
    let photo = formData.get('photo');

    if (photo) {
        // Aquí puedes enviar la foto al servidor o realizar cualquier acción con ella
        // Por ahora, solo mostraremos la foto seleccionada en la página
        selectedPhotos.push(photo);
        let reader = new FileReader();
        reader.onload = function (e) {
            let img = document.createElement('img');
            img.src = e.target.result;
            document.getElementById('selectedPhotos').appendChild(img);
        }
        reader.readAsDataURL(photo);
    }

    // Aquí puedes enviar el resto de los datos del formulario a tu servidor usando fetch o XMLHttpRequest
    // Por ahora, solo mostraremos el mensaje de confirmación
    closePopup();
});


function closePopup() {
    // Ocultar la pestaña emergente
    document.getElementById("popup").style.display = "none";
    
    // Restablecer la selección de estrellas, fotos y limpiar campos de nombre, apellido, distrito y comentario
    resetAllFields();
}

/// de guardar en GOOGLESHEET

function submitForm() {
    document.getElementById('loading').style.display = 'block';

    // Obtener los datos del formulario
    const formData = new FormData(document.getElementById('commentForm'));

    // Obtener las fotos seleccionadas
    const photos = document.getElementById('photos').files;

    // Crear un objeto FormData para enviar los datos del formulario
    const form = new FormData();

    // Agregar las fotos al objeto FormData
    for (let i = 0; i < photos.length; i++) {
        form.append('photos[]', photos[i]);
    }

    // Agregar los demás datos del formulario al objeto FormData
    for (var pair of formData.entries()) {
        form.append(pair[0], pair[1]);
    }

    // Enviar los datos del formulario al servidor usando fetch
    fetch('https://script.google.com/macros/s/AKfycbzP8-ZLltt7tIuJnr_CJ4brEjq_ny1Oe-juLPsXtnzZeZjwMysDhHYQb_ywdaYBow0x/exec', {
        method: 'POST',
        body: form
    })
    .then(response => {
        // Manejar la respuesta del servidor aquí
        document.getElementById('loading').style.display = 'none';
        document.getElementById('popup').style.display = 'none';
        // Por ejemplo, puedes mostrar un mensaje de éxito
        alert('Tu comentario ha sido registrado. Gracias.');
    })
    .catch(error => {
        // Manejar cualquier error que pueda ocurrir durante la solicitud
        console.error('Error:', error);
        alert('Ha ocurrido un error. Por favor, inténtalo de nuevo.');
        document.getElementById('loading').style.display = 'none';
    });

    // Evitar el envío del formulario normalmente
    return false;
}


    function closePopup() {
        document.getElementById('popup').style.display = 'none';
    }

function getCurrentDate() {
        const now = new Date();
        const year = now.getFullYear();
        let month = now.getMonth() + 1;
        let day = now.getDate();
    
        // Agregar ceros a la izquierda si es necesario
        if (month < 10) {
            month = '0' + month;
        }
        if (day < 10) {
            day = '0' + day;
        }
    
        return `${year}-${month}-${day}`;
}

    // Función para actualizar el campo de fecha en el formulario
    function updateDateField() {
        document.getElementById('currentDate').textContent = getCurrentDate();
    }

    // Llamar a la función para actualizar la fecha cuando se carga la página
    updateDateField();


    ///// agregando estrella al comentario

    document.addEventListener("DOMContentLoaded", function() {
        let comentarios = document.querySelectorAll(".comentario");
        comentarios.forEach(function(comentario) {
            let rating = comentario.getAttribute("data-rating");
            let starsDiv = comentario.querySelector(".stars");
            for (let i = 0; i < rating; i++) {
                let star = document.createElement("img");
                star.src = "images/star2.png";
                star.alt = "Estrella";
                star.classList.add("star");
                starsDiv.appendChild(star);
            }
        });
    });
    


    document.addEventListener('DOMContentLoaded', function () {
        updateCommentCount();

        function updateCommentCount() {
            const commentCount = document.querySelectorAll('.comentario').length;
            const commentsBtn = document.getElementById('commentsBtn');
            // Actualiza el texto del botón con el número dentro del círculo rojo
            commentsBtn.innerHTML = `<img src="images/COMENTARIOS.png" alt="Inicio" style="width: 30px; height: 30px;"><br>Comentarios <span class="comment-count">${commentCount}</span>`;
        }
    });

// Mostrar comentarios adicionales al hacer clic en VER MÁS
// Mostrar comentarios adicionales al hacer clic en VER MÁS
document.getElementById('VERMAS').addEventListener('click', function() {
    var comentarios = document.querySelectorAll('.report .comentario.hidden');
    comentarios.forEach(function(comentario) {
        comentario.classList.remove('hidden');
    });
    // Mostrar botón VER MENOS y ocultar VER MÁS
    document.getElementById('VERMENOS').style.display = '';
    document.getElementById('VERMAS').style.display = 'none';
});

// Ocultar comentarios adicionales al hacer clic en VER MENOS
// Ocultar comentarios adicionales al hacer clic en VER MENOS
document.getElementById('VERMENOS').addEventListener('click', function() {
    var comentarios = document.querySelectorAll('.report .comentario');
    comentarios.forEach(function(comentario, index) {
        if (index >= 2) {
            comentario.classList.add('hidden');
        }
    });
    // Ocultar botón VER MENOS y mostrar VER MÁS
    document.getElementById('VERMENOS').style.display = 'none';
    document.getElementById('VERMAS').style.display = '';
});

/// agregar el comentario con el formulario

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('commentForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita que se envíe el formulario
        const name = document.getElementById('name').value;
        const district = document.getElementById('district').value;
        const commentText = document.getElementById('comment').value;
        const rating = document.querySelector('input[name="rating"]:checked').value;
        const photo = document.getElementById('photo').files[0];
        const currentDate = new Date().toLocaleDateString();

        // Crea un nuevo elemento comentario
        const newComment = document.createElement('div');
        newComment.className = 'comentario';
        newComment.dataset.rating = rating;
        newComment.innerHTML = `
            <div class="coment1">
                <p>${commentText}</p>
                <span class="cliente">${name}</span>
            </div>
            <span class="fecha1">${currentDate}</span>
            <div class="imagenes"></div>
            <div class="stars">${getStarRating(rating)}</div>
            <span class="ubic">${district}</span>
        `;

        // Carga la foto
        if (photo) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const img = document.createElement('img');
                img.src = e.target.result;
                img.alt = 'Imagen';
                img.className = 'imagen-pequena';
                img.dataset.imagen = `clientes/cliente1/${photo.name}`;
                newComment.querySelector('.imagenes').appendChild(img);
            };
            reader.readAsDataURL(photo);
        }

        // Agrega el nuevo comentario después del div con la clase "titu2"
        const titu2Div = document.querySelector('.titu2');
        titu2Div.parentNode.insertBefore(newComment, titu2Div.nextSibling);

        // Muestra el mensaje de confirmación
        document.getElementById('confirmation').style.display = 'block';

        // Limpia el formulario
        form.reset();
    });
});

function getStarRating(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars += '<span class="stars star">★</span>'; // Estrella llena
        } else {
            stars += '<span class="stars">★</span>'; // Estrella vacía
        }
    }
    return stars;
}

