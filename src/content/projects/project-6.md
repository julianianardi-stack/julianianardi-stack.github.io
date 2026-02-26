---
title: Proyecto Anita
description: Desarrollo de dispositivo capaz de sensar y estudiar Fitoseñales eléctricas en plantas mimosas. Estudio del comportamiento y respuesta de la planta a distintos estímulos mecánicos y lumínicos.
publishDate: 'sep 01 2026'
seo:
  image:
    src: '/images/project-6.jpg'
---
<div class="post-contenido texto-pequeño">

### Proyecto Anita (Proyecto integrador de 4to año)

<div class="img-presentación">
  <img src="/images/esquema del dispositivo.png" alt="Presentación SSCR" />
</div>

Este es un proyecto muy especial que desarrollamos junto con mi compañero en el marco de la cátedra de proyecto integrador de 4to año. Esta cátedra tenía como objetivo realizar un proyecto integrando todos los conocimientos adquiridos hasta el momento en la carrera de bioingeniería, el cual debía consistir en diseñar y construir un dispositivo capaz de sensar una señal biológica, procesarla y realizar alguna tarea con ella.

Para este proyecto decidimos romper un poco con la estructura que todos los estudiantes siguen a la hora de pensar el proyecto. Por lo general se diseña algún equipo básico para uso médico como electrocardiógrafos, o miógrafos diferenciales o algún otro dispositivo para uso clínico. En nuestro caso nos propusimos el desafío de descubrir si las plantas pueden producir señales eléctricas sensables. Para poder llevar a cabo este cometido, tuvimos que investigar mucho sobre los potenciales de acción químico que tienen algunas plantas y como diseñar un dispositivo capaz de sensar tales potenciales.

<div class="img-presentación">
  <img src="/images/mimosa.png" alt="mimosa" />
</div>

Para buscar estos potenciales decidimos trabajar con unas plantas específicas llamadas mimosas púdicas, las cuales tienen una reacción abrupta ante el tacto externo. La probabilidad de encontrar potenciales de acción en estas plantas es mucho mayor que en cualquier otra.

<div class="img-flotante der">
  <img src="/images/presentacion.png" alt="presentacion" />
</div>

Voy a dar un breve resumen del dispositivo y lo que logramos encontrar, pero si quieren leer el paper completo, les voy a dejar el PDF al final de la página.


Para el diseño del dispositivo tuvimos dos desafíos principales, encontrar los amplificadores y filtros específicos que nos sirvan para poder ver la frecuencia de señal que emite esta planta (la cual es desconocida), y encontrar o fabricar los electrodos que se adapten mejor a la planta sin matarla ni lastimarla excesivamente.

 <div class="img-flotante izq">
  <img src="/images/esquemasoft.png" alt="esquema flujo" />
</div>

Para el caso del desarrollo electrónico decidimos utilizar amplificadores de instrumentación como se usa generalmente en la mayoría de los censores biológicos. Para determinar el filtrado, tuvimos que barrer todo el espectro de frecuencia entre 0 y 100khz que es la frecuencia en la que probablemente podamos encontrar cualquier señal biológica. Una vez ajustado los amplificadores y encontrada la frecuencia de señal que corresponde a la planta, diseñamos y construimos los filtros necesarios pra la misma.


Con los electrodos el trabajo no fue tan sencillo, ya que los electrodos de uso humano son metales específicos que contienen plata, la cual disminuye mucho el potencial de pila en la interfaz humano-electrodo. Con la planta nos era imposible usar estos electrodos comerciales, ya que eran muy grandes para pegarlos al tallo de la planta y el contacto que había era muy malo, el nivel de ruido era inaceptable.

 <div class="img-flotante der">
  <img src="/images/electrodo.png" alt="electrodo" />
</div>


Para resolverlo probamos varias opciones de electrodos de contacto, pero al final nos decidimos por utilizar electrodos de aguja fabricados por nosotros. Los mismos eran sometidos a un tratamiento químico en un extremo para permitirnos la soldadura de cables a los mismos y asi poder conectarlos al circuito.

 <div class="img-presentación">
  <img src="/images/mimosalab.png" alt="respuesta" />
</div>


Una vez terminado el diseño, la construcción y la comprobación de su funcionamiento, nos dispusimos a estudiar como reaccionaba la planta a distintos estímulos.

 <div class="img-presentación">
  <img src="/images/respuesta1.png" alt="respuesta" />
</div>

Con las pruebas llegamos a estas conclusiones:


1) Las plantas Mimosas Púdicas si generan potenciales de acción sensables eléctricamente como respuesta a estímulos

2) Ante un estímulo táctil, la planta responde con una señal de determinada frecuencia que se va "apagando" con el correr de los segundos

3) Cuando la planta es sometida a estímulos repetitivos o mantenidos en el tiempo, entra en un estado de shock que deja la planta insensible a otros estímulos hasta que este estado de shock se apaga.

4) La planta responde al estímulo lumínico de la misma manera que lo hace con el estímulo táctil.

<div class="img-presentación">
  <img src="/images/respuesta a la luz.png" alt="respuesta luz" />
</div>

Aquí les dejo el PDF completo con el paper explicativo del desarrollo y funcionamiento del dispositivo.

<div class="download-card">
    <div class="download-info">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" 
            />
        </svg>
        <div>
            <h4 class="font-bold">Paper: Proyecto anita</h4>
            <p class="text-xs opacity-70">PDF • fitoseñales eléctricas</p>
        </div>
    </div>
    <a href="/proyecto-anita.pdf" download class="btn-download">
        Descargar Archivo
    </a>
</div>
</div>

<style>
  .post-contenido {
    width: 100%;
    display: block;
    font-size: 0.9rem;
    line-height: 1.6;
    color: #444;
    text-align: justify;
  }

  /* Estilo general para las imágenes flotantes */
  .img-flotante {
    max-width: 250px;
    margin-bottom: 15px;
  }

  .img-flotante img {
    width: 100% !important;
    height: auto !important;
    border-radius: 6px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }

  /* Clases para alternar lados */
  .izq {
    float: left;
    margin-right: 20px;
  }

  .der {
    float: right;
    margin-left: 20px;
  }

  /* Sangría a los párrafos */
  .post-contenido p {
    text-indent: 30px;
    margin-bottom: 1.2rem;
  }

  /* Limpieza de floats */
  .post-contenido::after {
    content: "";
    display: table;
    clear: both;
  }

  /* Ajuste para móviles: las imágenes se centran y ocupan todo el ancho */
  @media (max-width: 600px) {
    .img-flotante {
      float: none !important;
      margin: 0 auto 20px auto !important;
      max-width: 100%;
    }
    .post-contenido p {
      text-indent: 20px;
    }
  }

  /* Título de la galería */
  .titulo-galería {
    clear: both;
    font-weight: bold;
    margin-top: 3rem;
    margin-bottom: 1rem;
  }

  /* Contenedor del scroll */
  .photo-book {
    display: flex;
    gap: 15px;
    overflow-x: auto;
    padding-bottom: 20px;
    scroll-snap-type: x mandatory; /* Hace que las fotos se "peguen" al deslizar */
    scrollbar-width: thin; /* Barra de scroll fina en Firefox */
    scrollbar-color: #ccc transparent;
  }

  /* Personalización de la barra de scroll para Chrome/Safari */
  .photo-book::-webkit-scrollbar {
    height: 6px;
  }
  .photo-book::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 10px;
  }

  /* Cada item de la foto */
  .photo-item {
    flex: 0 0 300px; /* Ancho fijo de cada foto en el scroll */
    scroll-snap-align: center;
  }

  .photo-item img {
    width: 100%;
    height: 300px; /* Altura fija para que todas se vean iguales */
    object-fit: cover; /* Recorta la imagen para que llene el espacio sin deformarse */
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }

  /* Ajuste para móviles */
  @media (max-width: 600px) {
    .photo-item {
      flex: 0 0 85%; /* En móviles se ve casi toda la foto y un pedazo de la siguiente */
    }
    .photo-item img {
      height: 300px;
    }
  }

  .img-presentación {
  display: block;
  /* El ancho máximo será el del párrafo (prose), usualmente alrededor de 65ch o 700px */
  max-width: 100%; 
  width: fit-content; /* Se ajusta al tamaño real de la imagen */
  margin: 2rem auto; /* La centra y le da aire arriba y abajo */
}

.img-presentación img {
  display: block;
  max-width: 100%; /* No deja que la imagen sea más ancha que el texto */
  height: auto;    /* Mantiene la proporción para que no se vea estirada */
  object-fit: contain; /* Asegura que se vea completa sin recortes */
  border-radius: 8px;
}

li {
  clear: both;
  list-style-position: inside; /* Ayuda a que el número no quede huérfano */
  padding-bottom: 20px; /* Espacio para que no quede todo pegado */
}
  .download-card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #f8fafc; /* Un gris muy clarito */
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 1.5rem;
    margin: 1rem 0;
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .download-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  }

  .download-info {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .btn-download {
    background-color: #ef4444; /* Rojo para combinar con el icono */
    color: white;
    padding: 0.6rem 1.2rem;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9rem;
    transition: background 0.2s;
  }

  .btn-download:hover {
    background-color: #dc2626;
  }

  /* Ajuste para el icono SVG si no carga Tailwind */
  svg {
    width: 40px;
    height: 40px;
  }
</style>