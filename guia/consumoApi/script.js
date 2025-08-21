const cargarPersona = async () => {
  try {
    const response = await fetch('../json/persona.json');
    const persona = await response.json();
    console.log('Datos de persona:', persona);
    mostrarDatos(persona);
  } catch (error) {
    console.error('Error al cargar el JSON:', error);
  }
};

const cargarApi = async () => {
  try {
    const response = await fetch('https://ghibliapi.vercel.app/films');
    const pelicula = await response.json();
    console.log('Datos de peliculas:', pelicula);
    mostrarPelis(pelicula);
  } catch (error) {
    console.error('Error al cargar el JSON:', error);
  }
};

// const mostrarDatos = (persona) => {
//   const contenedorDatos = document.getElementById('datos');
//   console.log(contenedorDatos)

//   contenedorDatos.innerHTML = `
//      <h1>${persona.nombre}</h1>
//         <p>Ocupación: ${persona.ocupacion}</p>

//         <h2>Datos personales</h2>
//         <ul>
//             <li>Edad: ${persona.edad}</li>
//             <li>Correo: ${persona.correo}</li>
//         </ul>

//         <h2>Dirección</h2>
//         <ul>
//           <li>Ciudad: ${persona.direccion.ciudad}</li>
//           <li>País: ${persona.direccion.pais}</li>
//         </ul>

//         <h2>Hobbies</h2>
//         <ul>
//           ${persona.hobbies.map(hobby => `<li>${hobby}</li>`).join("")}
//         </ul>
//   `
// }

const mostrarDatos = (persona) => {
            const contenedorDatos = document.getElementById('datos');

            contenedorDatos.innerHTML = `
                <div class="card shadow-sm">
                    <div class="card-header bg-primary text-white">
                        <h3 class="card-title mb-0">
                            <i class="bi bi-person-circle"></i> ${persona.nombre}
                        </h3>
                        <p class="card-text mb-0 opacity-75">${persona.ocupacion}</p>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <h5 class="text-info">
                                    <i class="bi bi-info-circle"></i> Datos Personales
                                </h5>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item d-flex justify-content-between">
                                        <strong>Edad:</strong> ${persona.edad} años
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between">
                                        <strong>Correo:</strong> ${persona.correo}
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-6 mb-3">
                                <h5 class="text-info">
                                    <i class="bi bi-geo-alt"></i> Dirección
                                </h5>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item d-flex justify-content-between">
                                        <strong>Ciudad:</strong> ${persona.direccion.ciudad}
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between">
                                        <strong>País:</strong> ${persona.direccion.pais}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="mt-3">
                            <h5 class="text-info">
                                <i class="bi bi-heart"></i> Hobbies
                            </h5>
                            <div class="d-flex flex-wrap gap-2">
                                ${persona.hobbies.map(hobby => 
                                    `<span class="badge bg-secondary fs-6">${hobby}</span>`
                                ).join("")}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        };

        const mostrarPelis = (peliculas) => {
            const contenedorDatos = document.getElementById('datos');
            
            contenedorDatos.innerHTML = `
                <div class="card shadow-sm">
                    <div class="card-header bg-success text-white">
                        <h3 class="card-title mb-0">
                            <i class="bi bi-film"></i> Películas de Studio Ghibli
                        </h3>
                        <p class="card-text mb-0 opacity-75">Total: ${peliculas.length} películas</p>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            ${peliculas.map(pelicula => `
                                <div class="col-lg-6 col-xl-4 mb-4">
                                    <div class="card h-100 border-0 shadow-sm">
                                        <img src="${pelicula.image}" class="card-img-top" alt="${pelicula.title}" style="height: 250px; object-fit: cover;">
                                        <div class="card-body d-flex flex-column">
                                            <h5 class="card-title text-primary">
                                                ${pelicula.title}
                                                <small class="text-muted">(${pelicula.release_date})</small>
                                            </h5>
                                            <p class="card-text">
                                                <strong class="text-info">Director:</strong> ${pelicula.director}<br>
                                                <strong class="text-info">Productor:</strong> ${pelicula.producer}
                                            </p>
                                            <p class="card-text small text-muted flex-grow-1">
                                                ${pelicula.description.length > 150 
                                                    ? pelicula.description.substring(0, 150) + '...' 
                                                    : pelicula.description}
                                            </p>
                                            <div class="mt-auto">
                                                <span class="badge bg-warning text-dark">
                                                    <i class="bi bi-star"></i> ${pelicula.rt_score}/100
                                                </span>
                                                <span class="badge bg-info">
                                                    ${pelicula.running_time} min
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        };