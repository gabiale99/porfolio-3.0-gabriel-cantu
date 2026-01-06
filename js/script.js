const menu = document.querySelector("nav");
const btnMenu = document.querySelector(".container-menu");
const btnBotonera = document.querySelectorAll("nav ul li a");

btnMenu.addEventListener("click", () => {
  if (menu.classList.contains("off")) {
    menu.classList.remove("off");
  } else {
    menu.classList.add("off");
  }
});

btnBotonera.forEach((link) => {
  link.addEventListener("click", () => {
    if (menu.classList.contains("off")) {
      menu.classList.remove("off");
    } else {
      menu.classList.add("off");
    }
  });
});

const datosCard = [
  {
    img: "proyecto-1.png",
    titulo: "E-commerce",
    descripcion:
      "Desarrollé una plataforma de comercio electrónico completa como proyecto académico...",
    tecnologia1: "HTML",
    tecnologia2: "CSS",
    tecnologia3: "JavaScript",
    codigo: "https://github.com/gabiale99/e-commerce-final-da-vinci",
    demo: "https://gabiale99.github.io/e-commerce-final-da-vinci/",
  },
  {
    img: "proyecto-2.png",
    titulo: "Mundo dinosaurio",
    descripcion:
      "Desarrollé una plataforma de comercio electrónico completa como proyecto académico...",
    tecnologia1: "HTML",
    tecnologia2: "CSS",
    tecnologia3: "JavaScript",
    codigo: "https://github.com/gabiale99/proyecto-web-dinosaurios",
    demo: "https://gabiale99.github.io/proyecto-web-dinosaurios/",
  },
  {
    img: "proyecto-3.png",
    titulo: "subscriptions-tracker",
    descripcion:
      "Desarrollé una plataforma de comercio electrónico completa como proyecto académico...",
    tecnologia1: "HTML",
    tecnologia2: "CSS",
    tecnologia3: "JavaScript",
    codigo: "https://github.com/gabiale99/subscriptions-tracker",
    demo: "https://gabiale99.github.io/subscriptions-tracker/",
  },
  {
    img: "proyecto-4.png",
    titulo: "Play Store de video Juegos",
    descripcion:
      "Desarrollé una plataforma de comercio electrónico completa como proyecto académico...",
    tecnologia1: "HTML",
    tecnologia2: "CSS",
    tecnologia3: "JavaScript",
    tecnologia4: "React",
    codigo: "https://github.com/gabiale99/store-video-juegos",
    demo: "https://gabiale99.github.io/store-video-juegos/",
  },
  {
    img: "proyecto-5.png",
    titulo: "3 en linea",
    descripcion:
      "Desarrollé una plataforma de comercio electrónico completa como proyecto académico...",
    tecnologia1: "HTML",
    tecnologia2: "CSS",
    tecnologia3: "JavaScript",
    codigo: "https://github.com/gabiale99/3-en-linia-con-JavaScript",
    demo: "https://gabiale99.github.io/3-en-linia-con-JavaScript/",
  },
];

const imagen1 = `./img/proyectos/${datosCard[0].img}`;
const imagen2 = `./img/proyectos/${datosCard[1].img}`;
const imagen3 = `./img/proyectos/${datosCard[2].img}`;
const imagen4 = `./img/proyectos/${datosCard[3].img}`;
const imagen5 = `./img/proyectos/${datosCard[4].img}`;

function crearCloseSvg() {
  const ns = "http://www.w3.org/2000/svg";

  const svg = document.createElementNS(ns, "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("width", "24");
  svg.setAttribute("height", "24");
  svg.setAttribute("fill", "none");
  svg.setAttribute("stroke", "currentColor");
  svg.setAttribute("stroke-width", "2");
  svg.setAttribute("stroke-linecap", "round");
  svg.setAttribute("stroke-linejoin", "round");
  svg.classList.add("cerrar");

  const path1 = document.createElementNS(ns, "path");
  path1.setAttribute("d", "M18 6l-12 12");

  const path2 = document.createElementNS(ns, "path");
  path2.setAttribute("d", "M6 6l12 12");

  svg.append(path1, path2);
  return svg;
}

// Card 1

const cajaModal = document.querySelector(".dialog");
const card1 = document.querySelector("#card-1");

card1.addEventListener("click", () => {
  const modal = document.createElement("dialog");
  document.body.append(modal);
  cajaModal.append(modal);
  modal.showModal();
  requestAnimationFrame(() => modal.classList.add("mostrar"));

  // Imagen
  const imagenModal1 = document.createElement("img");
  imagenModal1.src = imagen1;
  imagenModal1.alt = `Imagen del proyecto ${datosCard[0].titulo}`;
  modal.append(imagenModal1);

  // Botón cerrar
  const closeSvg = crearCloseSvg();
  closeSvg.addEventListener("click", () => {
    modal.classList.remove("mostrar");
    setTimeout(() => modal.remove(), 250);
  });

  imagenModal1.after(closeSvg);

  // Contenedor texto
  const contenedorModal = document.createElement("div");
  contenedorModal.className = "container-text-dialog";
  imagenModal1.after(contenedorModal);

  const tituloModal1 = document.createElement("h3");
  tituloModal1.textContent = datosCard[0].titulo;
  contenedorModal.append(tituloModal1);

  const parrafoModal1 = document.createElement("p");
  parrafoModal1.textContent = datosCard[0].descripcion;
  tituloModal1.after(parrafoModal1);

  const subtituloModal1 = document.createElement("h4");
  subtituloModal1.textContent = "Tecnologías utilizadas";
  parrafoModal1.after(subtituloModal1);

  // Tecnologías
  const contenedorTecnologiaModal1 = document.createElement("div");
  contenedorTecnologiaModal1.className = "container-tecnologias";
  subtituloModal1.after(contenedorTecnologiaModal1);

  const spam1Modal1 = document.createElement("span");
  spam1Modal1.textContent = `${datosCard[0].tecnologia1}`;
  contenedorTecnologiaModal1.append(spam1Modal1);

  const spam2Modal1 = document.createElement("span");
  spam2Modal1.textContent = `${datosCard[0].tecnologia2}`;
  spam1Modal1.after(spam2Modal1);

  const spam3Modal1 = document.createElement("span");
  spam3Modal1.textContent = `${datosCard[0].tecnologia3}`;
  spam2Modal1.after(spam3Modal1);

  // Botones
  const contenedorButtonsModal1 = document.createElement("div");
  contenedorButtonsModal1.className = "conteiner-buttons";
  contenedorTecnologiaModal1.after(contenedorButtonsModal1);

  const boton1Modal1 = document.createElement("a");
  boton1Modal1.className = "button-codigo";
  boton1Modal1.textContent = "Ver código";
  boton1Modal1.href = `${datosCard[0].codigo}`;
  boton1Modal1.target = "_blank";
  boton1Modal1.rel = "noreferrer";
  contenedorButtonsModal1.append(boton1Modal1);

  const boton2Modal1 = document.createElement("a");
  boton2Modal1.className = "button-demo";
  boton2Modal1.textContent = "Ver demo";
  boton2Modal1.href = `${datosCard[0].demo}`;
  boton2Modal1.target = "_blank";
  boton2Modal1.rel = "noreferrer";
  boton1Modal1.after(boton2Modal1);
});

// Card 2

const card2 = document.querySelector("#card-2");

card2.addEventListener("click", () => {
  const modal = document.createElement("dialog");
  document.body.append(modal);
  cajaModal.append(modal);
  modal.showModal();
  requestAnimationFrame(() => modal.classList.add("mostrar"));

  // Imagen
  const imagenModal1 = document.createElement("img");
  imagenModal1.src = imagen2;
  imagenModal1.alt = `Imagen del proyecto ${datosCard[1].titulo}`;
  modal.append(imagenModal1);

  // Botón cerrar
  const closeSvg = crearCloseSvg();
  closeSvg.addEventListener("click", () => {
    modal.classList.remove("mostrar");
    setTimeout(() => modal.remove(), 250);
  });
  imagenModal1.after(closeSvg);

  // Contenedor texto
  const contenedorModal = document.createElement("div");
  contenedorModal.className = "container-text-dialog";
  imagenModal1.after(contenedorModal);

  const tituloModal1 = document.createElement("h3");
  tituloModal1.textContent = datosCard[1].titulo;
  contenedorModal.append(tituloModal1);

  const parrafoModal1 = document.createElement("p");
  parrafoModal1.textContent = datosCard[1].descripcion;
  tituloModal1.after(parrafoModal1);

  const subtituloModal1 = document.createElement("h4");
  subtituloModal1.textContent = "Tecnologías utilizadas";
  parrafoModal1.after(subtituloModal1);

  // Tecnologías
  const contenedorTecnologiaModal1 = document.createElement("div");
  contenedorTecnologiaModal1.className = "container-tecnologias";
  subtituloModal1.after(contenedorTecnologiaModal1);

  const spam1Modal1 = document.createElement("span");
  spam1Modal1.textContent = `${datosCard[1].tecnologia1}`;
  contenedorTecnologiaModal1.append(spam1Modal1);

  const spam2Modal1 = document.createElement("span");
  spam2Modal1.textContent = `${datosCard[1].tecnologia2}`;
  spam1Modal1.after(spam2Modal1);

  const spam3Modal1 = document.createElement("span");
  spam3Modal1.textContent = `${datosCard[1].tecnologia3}`;
  spam2Modal1.after(spam3Modal1);

  // Botones
  const contenedorButtonsModal1 = document.createElement("div");
  contenedorButtonsModal1.className = "conteiner-buttons";
  contenedorTecnologiaModal1.after(contenedorButtonsModal1);

  const boton1Modal1 = document.createElement("a");
  boton1Modal1.className = "button-codigo";
  boton1Modal1.textContent = "Ver código";
  boton1Modal1.href = `${datosCard[1].codigo}`;
  boton1Modal1.target = "_blank";
  boton1Modal1.rel = "noreferrer";
  contenedorButtonsModal1.append(boton1Modal1);

  const boton2Modal1 = document.createElement("a");
  boton2Modal1.className = "button-demo";
  boton2Modal1.textContent = "Ver demo";
  boton2Modal1.href = `${datosCard[1].demo}`;
  boton2Modal1.target = "_blank";
  boton2Modal1.rel = "noreferrer";
  boton1Modal1.after(boton2Modal1);
});

// Card 3

const card3 = document.querySelector("#card-3");

card3.addEventListener("click", () => {
  const modal = document.createElement("dialog");
  document.body.append(modal);
  cajaModal.append(modal);
  modal.showModal();
  requestAnimationFrame(() => modal.classList.add("mostrar"));

  // Imagen
  const imagenModal1 = document.createElement("img");
  imagenModal1.src = imagen3;
  imagenModal1.alt = `Imagen del proyecto ${datosCard[2].titulo}`;
  modal.append(imagenModal1);

  // Botón cerrar
  const closeSvg = crearCloseSvg();
  closeSvg.addEventListener("click", () => {
    modal.classList.remove("mostrar");
    setTimeout(() => modal.remove(), 250);
  });
  imagenModal1.after(closeSvg);

  // Contenedor texto
  const contenedorModal = document.createElement("div");
  contenedorModal.className = "container-text-dialog";
  imagenModal1.after(contenedorModal);

  const tituloModal1 = document.createElement("h3");
  tituloModal1.textContent = datosCard[2].titulo;
  contenedorModal.append(tituloModal1);

  const parrafoModal1 = document.createElement("p");
  parrafoModal1.textContent = datosCard[2].descripcion;
  tituloModal1.after(parrafoModal1);

  const subtituloModal1 = document.createElement("h4");
  subtituloModal1.textContent = "Tecnologías utilizadas";
  parrafoModal1.after(subtituloModal1);

  // Tecnologías
  const contenedorTecnologiaModal1 = document.createElement("div");
  contenedorTecnologiaModal1.className = "container-tecnologias";
  subtituloModal1.after(contenedorTecnologiaModal1);

  const spam1Modal1 = document.createElement("span");
  spam1Modal1.textContent = `${datosCard[2].tecnologia1}`;
  contenedorTecnologiaModal1.append(spam1Modal1);

  const spam2Modal1 = document.createElement("span");
  spam2Modal1.textContent = `${datosCard[2].tecnologia2}`;
  spam1Modal1.after(spam2Modal1);

  const spam3Modal1 = document.createElement("span");
  spam3Modal1.textContent = `${datosCard[2].tecnologia3}`;
  spam2Modal1.after(spam3Modal1);

  // Botones
  const contenedorButtonsModal1 = document.createElement("div");
  contenedorButtonsModal1.className = "conteiner-buttons";
  contenedorTecnologiaModal1.after(contenedorButtonsModal1);

  const boton1Modal1 = document.createElement("a");
  boton1Modal1.className = "button-codigo";
  boton1Modal1.textContent = "Ver código";
  boton1Modal1.href = `${datosCard[2].codigo}`;
  boton1Modal1.target = "_blank";
  boton1Modal1.rel = "noreferrer";
  contenedorButtonsModal1.append(boton1Modal1);

  const boton2Modal1 = document.createElement("a");
  boton2Modal1.className = "button-demo";
  boton2Modal1.textContent = "Ver demo";
  boton2Modal1.href = `${datosCard[2].demo}`;
  boton2Modal1.target = "_blank";
  boton2Modal1.rel = "noreferrer";
  boton1Modal1.after(boton2Modal1);
});

// Card 4

const card4 = document.querySelector("#card-4");

card4.addEventListener("click", () => {
  const modal = document.createElement("dialog");
  document.body.append(modal);
  cajaModal.append(modal);
  modal.showModal();
  requestAnimationFrame(() => modal.classList.add("mostrar"));

  // Imagen
  const imagenModal1 = document.createElement("img");
  imagenModal1.src = imagen4;
  imagenModal1.alt = `Imagen del proyecto ${datosCard[3].titulo}`;
  modal.append(imagenModal1);

  // Botón cerrar
  const closeSvg = crearCloseSvg();
  closeSvg.addEventListener("click", () => {
    modal.classList.remove("mostrar");
    setTimeout(() => modal.remove(), 250);
  });
  imagenModal1.after(closeSvg);

  // Contenedor texto
  const contenedorModal = document.createElement("div");
  contenedorModal.className = "container-text-dialog";
  imagenModal1.after(contenedorModal);

  const tituloModal1 = document.createElement("h3");
  tituloModal1.textContent = datosCard[3].titulo;
  contenedorModal.append(tituloModal1);

  const parrafoModal1 = document.createElement("p");
  parrafoModal1.textContent = datosCard[3].descripcion;
  tituloModal1.after(parrafoModal1);

  const subtituloModal1 = document.createElement("h4");
  subtituloModal1.textContent = "Tecnologías utilizadas";
  parrafoModal1.after(subtituloModal1);

  // Tecnologías
  const contenedorTecnologiaModal1 = document.createElement("div");
  contenedorTecnologiaModal1.className = "container-tecnologias";
  subtituloModal1.after(contenedorTecnologiaModal1);

  const spam1Modal1 = document.createElement("span");
  spam1Modal1.textContent = `${datosCard[3].tecnologia1}`;
  contenedorTecnologiaModal1.append(spam1Modal1);

  const spam2Modal1 = document.createElement("span");
  spam2Modal1.textContent = `${datosCard[3].tecnologia2}`;
  spam1Modal1.after(spam2Modal1);

  const spam3Modal1 = document.createElement("span");
  spam3Modal1.textContent = `${datosCard[3].tecnologia3}`;
  spam2Modal1.after(spam3Modal1);

  const spam4Modal1 = document.createElement("span");
  spam4Modal1.textContent = `${datosCard[3].tecnologia4}`;
  spam3Modal1.after(spam4Modal1);

  // Botones
  const contenedorButtonsModal1 = document.createElement("div");
  contenedorButtonsModal1.className = "conteiner-buttons";
  contenedorTecnologiaModal1.after(contenedorButtonsModal1);

  const boton1Modal1 = document.createElement("a");
  boton1Modal1.className = "button-codigo";
  boton1Modal1.textContent = "Ver código";
  boton1Modal1.href = `${datosCard[3].codigo}`;
  boton1Modal1.target = "_blank";
  boton1Modal1.rel = "noreferrer";
  contenedorButtonsModal1.append(boton1Modal1);

  const boton2Modal1 = document.createElement("a");
  boton2Modal1.className = "button-demo";
  boton2Modal1.textContent = "Ver demo";
  boton2Modal1.href = `${datosCard[3].demo}`;
  boton2Modal1.target = "_blank";
  boton2Modal1.rel = "noreferrer";
  boton1Modal1.after(boton2Modal1);
});

// Card 5

const card5 = document.querySelector("#card-5");

card5.addEventListener("click", () => {
  const modal = document.createElement("dialog");
  document.body.append(modal);
  cajaModal.append(modal);
  modal.showModal();
  requestAnimationFrame(() => modal.classList.add("mostrar"));

  // Imagen
  const imagenModal1 = document.createElement("img");
  imagenModal1.src = imagen5;
  imagenModal1.alt = `Imagen del proyecto ${datosCard[4].titulo}`;
  modal.append(imagenModal1);

  // Botón cerrar
  const closeSvg = crearCloseSvg();
  closeSvg.addEventListener("click", () => {
    modal.classList.remove("mostrar");
    setTimeout(() => modal.remove(), 250);
  });
  imagenModal1.after(closeSvg);

  // Contenedor texto
  const contenedorModal = document.createElement("div");
  contenedorModal.className = "container-text-dialog";
  imagenModal1.after(contenedorModal);

  const tituloModal1 = document.createElement("h3");
  tituloModal1.textContent = datosCard[4].titulo;
  contenedorModal.append(tituloModal1);

  const parrafoModal1 = document.createElement("p");
  parrafoModal1.textContent = datosCard[4].descripcion;
  tituloModal1.after(parrafoModal1);

  const subtituloModal1 = document.createElement("h4");
  subtituloModal1.textContent = "Tecnologías utilizadas";
  parrafoModal1.after(subtituloModal1);

  // Tecnologías
  const contenedorTecnologiaModal1 = document.createElement("div");
  contenedorTecnologiaModal1.className = "container-tecnologias";
  subtituloModal1.after(contenedorTecnologiaModal1);

  const spam1Modal1 = document.createElement("span");
  spam1Modal1.textContent = `${datosCard[4].tecnologia1}`;
  contenedorTecnologiaModal1.append(spam1Modal1);

  const spam2Modal1 = document.createElement("span");
  spam2Modal1.textContent = `${datosCard[4].tecnologia2}`;
  spam1Modal1.after(spam2Modal1);

  const spam3Modal1 = document.createElement("span");
  spam3Modal1.textContent = `${datosCard[4].tecnologia3}`;
  spam2Modal1.after(spam3Modal1);

  // Botones
  const contenedorButtonsModal1 = document.createElement("div");
  contenedorButtonsModal1.className = "conteiner-buttons";
  contenedorTecnologiaModal1.after(contenedorButtonsModal1);

  const boton1Modal1 = document.createElement("a");
  boton1Modal1.className = "button-codigo";
  boton1Modal1.textContent = "Ver código";
  boton1Modal1.href = `${datosCard[4].codigo}`;
  boton1Modal1.target = "_blank";
  boton1Modal1.rel = "noreferrer";
  contenedorButtonsModal1.append(boton1Modal1);

  const boton2Modal1 = document.createElement("a");
  boton2Modal1.className = "button-demo";
  boton2Modal1.textContent = "Ver demo";
  boton2Modal1.href = `${datosCard[4].demo}`;
  boton2Modal1.target = "_blank";
  boton2Modal1.rel = "noreferrer";
  boton1Modal1.after(boton2Modal1);
});

/*
<dialog>
          <img
            src="./img/proyectos/proyecto-1.png"
            alt="imagen de proyecto E-commerce"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-x cerrar"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
          </svg>
          <div class="container-text-dialog">
            <h3>E-Commerce</h3>
            <p>
              Desarrollé una plataforma de comercio electrónico completa como
              proyecto académico, enfocada en ofrecer una experiencia de usuario
              moderna, clara y eficiente, simulando un entorno real de venta
              online.
            </p>
            <h4>Tecnologías utilizadas</h4>
            <div class="container-tecnologias">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>
            <div class="conteiner-buttons">
              <a
                href="#"
                class="button-codigo"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
                  />
                </svg>
                Ver código
              </a>
              <a href="#" class="button-demo" target="_blank" rel="noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-elbow-right"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M21 14v-6h-6" />
                  <path d="M21 8l-9 9l-9 -9" />
                </svg>
                Ver demo
              </a>
            </div>
          </div>
        </dialog>
*/
