---
title: Sistema de Simulación de Condiciones Respiratorias y Testeo de Ventiladores Mecanicos (SSCR)
description: Desarrollo de un pulmón artificial capáz de simular condiciones respiratorias, junto con un dispositivo de sensado para contrastar mediciones de ventiladores mecáncicos y determinar su correcto funcionamiento
publishDate: '2026-12-01'
isFeatured: true
seo:
  image:
    src: '/images/project-7.jpg'
---
<div class="post-contenido texto-pequeno">

### Tesis final carrera de Bioingeniería

<div class="img-presentacion">
  <img src="/images/presentacion.jpg" alt="Presentación SSCR" />
  <span class="ia-badge">
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v8"/><path d="m4.93 10.93 1.41 1.41"/><path d="M2 18h2"/><path d="M20 18h2"/><path d="m19.07 10.93-1.41 1.41"/><path d="M22 22H2"/><path d="m8 22 4-10 4 10"/><path d="M9 18h6"/></svg>
    Imagen generada con Inteligencia Artificial con fines ilustrativos
  </span>
</div>

Para mi proyecto final de la carrera universitaria me propuse a resolver un problema que estabamos teniendo en el hospital. Este consistía en la no disponibilidad de un dispositivo que nos permitiera determinar el correcto funcionamiento y lectura de variables de los ventiladores mecánicos (respiradores), así es como nos era imposible ejecutar un mantenimiento correctivo integral de los equipos. Recordemos que estos equipos son de cuidado intensivo para pacientes en estado critico, por lo que es fundamental determinar su correcto funcionamiento.

Este problema se combinó con un pedido del jefe de servicio de kinecsiología el cual no encontraba la manera de simular condiciones respiratorias patológicas en pulmones de prueba, para poder mostrarle a sus alumnos el correcto seteo de parametros en respiradores.

Asi es como me propuse a poder diseñar y fabricar un dispositivo que me permitiera emular condiciones respiratorias en un pulmón de pruba y asi poder variar los parametros de flujo, presión, volumen, frecuencia y curvas respiratorias en el respirador. Ese diseño iba combinado con un dispositivo que podía sensar las variables físicas del circuito respiratorio creado, para poder asi compararlas con las curvas y valores que arrojaba el respirador a fin contrastar los valores obtenidos y determinar el correcto funcionamiento del mismo.
<div class="img-presentacion">
  <img src="/images/objetivos.png" alt="Presentación SSCR" />
</div>

Voy a proceder a mostrar a grandes rasgos en que consistian algunas partes del diseño, pero si estás interesado en ver el desarrollo completo, podras encontrar el paper completo en el final de esta página.

El diseño del sistema sistema de simulación de condiciones respiratorias era básicamente  un pulmón de pruebas en donde se le podía ajustar la rigidez del mismo accionando un motor de DC que porvocaba la disminucion o aumento de area entre dos placas de chapa flexíble. Esto provocaba mayor o menor resistencia a la deformación de las chapas dandole mayor o menor obstrucción al volumen aereo.

Por otro lado se podia ajustar la resistencia al flujo del aire moviendo una valvula en la entrada del pulmón.

Una vez finalizado el diseño y construcción del mismo se procedió a hacer el correspondiente mapeo con sistemas de ecuaciones diferenciales para determinar la curva de respuesta resistiva del pulmón ante el movimiento del motor. Esto se realizó con programacion en excel y herramientas numéricas que nos otorga el mismo programa.

Aqui se puede ver la transición y evolucion en el diseño del pulmón y su sistema de resistencia

<h3 class="titulo-galeria">diseño del pulmón</h3>
<div class="photo-book">
  <div class="photo-item">
    <img src="/images/pulmon1.png" alt="pulmon 1" />
  </div>
  <div class="photo-item">
    <img src="/images/pulmon2.png" alt="pulmon 2" />
  </div>
  <div class="photo-item">
    <img src="/images/pulmon3.png" alt="pulmon 3" />
  </div>
  <div class="photo-item">
    <img src="/images/pulmon4.png" alt="pulmon 4" />
  </div>
    <div class="photo-item">
    <img src="/images/commpliance.png" alt="pulmon 1" />
  </div>
  <div class="photo-item">
    <img src="/images/final4.png" alt="pulmon 2" />
  </div>  
</div>

Luego se procedió al diseño del dispositivo que nos iba a otorgar el sensado de flujo, presión y volumen en el sistema respiratorio. Con estos parametros se debía lugo mediante software, calcular variables y curvas respiratorias que nos permitieran comparar de manera visual los valores entregados por el respirador.

Como sensor de flujo y presión se calculó y fabricó un tubo de Venturi que sufrio diversas modificaciones a lo largo del desarrollo para mejorar sus prestaciones, pasando por diseños en impresión 3d hasta llegar a una ejecicion en aluminio desarrollada por un tornero.

<h3 class="titulo-galeria">Tubo de Venturi</h3>
<div class="photo-book">
  <div class="photo-item">
    <img src="/images/venturi1.png" alt="Bulgarus 1" />
  </div>
  <div class="photo-item">
    <img src="/images/venturi2.png" alt="Bulgarus 2" />
  </div>
  <div class="photo-item">
    <img src="/images/venturi3.png" alt="Bulgarus 3" />
  </div>
  <div class="photo-item">
    <img src="/images/venturi4.png" alt="Bulgarus 4" />
  </div>
    <div class="photo-item">
    <img src="/images/calculo venturi2.png" alt="Bulgarus 4" />
  </div>
</div>

Luego se disñó y construyó un sistema electrónico que nos permitiera recibir esas señales físicas y convertirlas en señales eléctricas. Este sistema necesitaba de sensores de presión diferencial, amplificadores de instrumentación, amplificadores de segundo orden, filtros electrónicos y conversores analógicos-digitales. Con todo este conjunto de componentes, logramos captar esta señal física, convertirla en señal electónica, filtrar todos los ruidos de dicha señal y procesarla para entregarsela  al conversor analógico-digital una señal apta para convertirla en 1 y 0 que nuestra computadora logra interpretar.
 <div class="img-flotante der">
  <img src="/images/placa1.png" alt="diseño de hard"/>
</div>

Una vez tenemos el Hardware terminado llega la parte de programación, en donde neceitamos empezar a hacer cálculos y gráficos que se puedan ver un una interfáz apta para el usuario. Este procesamiento de información se realizó en dos lenguajes de programación distintos que trabajan en conjunto: Python y C++.

 <div class="img-flotante izq">
  <img src="/images/Slide29.JPG" alt="soft" />
</div>

Todo este diseño iba fusionado con una app de android que se comunicaba inalambricamente con el dispositivo y nos ermitia ver los gráficos y variables principales en nuestro smartphone  para no depender de una conección por cable a nuestra pc.


Una vez finalizado el desarrollo se contrastó su desempeño contra un dispositivo profesional Fluke que se encarga de las misma mediciones, logrando un sorprendente error menor al 5%.

<div class="img-presentacion">
  <img src="/images/final5.png" alt="fluke" />
</div>


<h3 class="titulo-galeria text-blue-600">Presentación del proyecto</h3>
<div class="ppt-slider">
    <div class="ppt-slide">
        <img src="/images/slide1.jpg" alt="Slide 1" />
    </div>
    <div class="ppt-slide">
        <img src="/images/slide2.jpg" alt="Slide 2" />
    </div>
        <div class="ppt-slide">
        <img src="/images/slide3.jpg" alt="Slide 1" />
    </div>
    <div class="ppt-slide">
        <img src="/images/slide4.jpg" alt="Slide 2" />
    </div>
        <div class="ppt-slide">
        <img src="/images/slide5.jpg" alt="Slide 1" />
    </div>
    <div class="ppt-slide">
        <img src="/images/slide6.jpg" alt="Slide 2" />
    </div>
        <div class="ppt-slide">
        <img src="/images/slide7.jpg" alt="Slide 1" />
    </div>
    <div class="ppt-slide">
        <img src="/images/slide8.jpg" alt="Slide 2" />
    </div>
        <div class="ppt-slide">
        <img src="/images/slide9.jpg" alt="Slide 1" />
    </div>
    <div class="ppt-slide">
        <img src="/images/slide10.jpg" alt="Slide 2" />
    </div>
        <div class="ppt-slide">
        <img src="/images/slide11.jpg" alt="Slide 1" />
    </div>
    <div class="ppt-slide">
        <img src="/images/slide12.jpg" alt="Slide 2" />
    </div>
        <div class="ppt-slide">
        <img src="/images/slide13.jpg" alt="Slide 1" />
    </div>
    <div class="ppt-slide">
        <img src="/images/slide14.jpg" alt="Slide 2" />
    </div>
        <div class="ppt-slide">
        <img src="/images/slide15.jpg" alt="Slide 1" />
    </div>
    <div class="ppt-slide">
        <img src="/images/slide16.jpg" alt="Slide 2" />
    </div>
        <div class="ppt-slide">
        <img src="/images/slide17.jpg" alt="Slide 1" />
    </div>
    <div class="ppt-slide">
        <img src="/images/slide18.jpg" alt="Slide 2" />
    </div>
        <div class="ppt-slide">
        <img src="/images/slide19.jpg" alt="Slide 1" />
    </div>
    <div class="ppt-slide">
        <img src="/images/slide20.jpg" alt="Slide 2" />
    </div>
        <div class="ppt-slide">
        <img src="/images/slide21.jpg" alt="Slide 1" />
    </div>
    <div class="ppt-slide">
        <img src="/images/slide22.jpg" alt="Slide 2" />
    </div>
        <div class="ppt-slide">
        <img src="/images/slide23.jpg" alt="Slide 1" />
    </div>
    <div class="ppt-slide">
        <img src="/images/slide24.jpg" alt="Slide 2" />
    </div>
        <div class="ppt-slide">
        <img src="/images/slide25.jpg" alt="Slide 1" />
    </div>
    <div class="ppt-slide">
        <img src="/images/slide26.jpg" alt="Slide 2" />
    </div>
        <div class="ppt-slide">
        <img src="/images/slide27.jpg" alt="Slide 1" />
    </div>
    <div class="ppt-slide">
        <img src="/images/slide28.jpg" alt="Slide 2" />
    </div>
        <div class="ppt-slide">
        <img src="/images/slide29.jpg" alt="Slide 1" />
    </div>
    <div class="ppt-slide">
        <img src="/images/slide30.jpg" alt="Slide 2" />
    </div>
        <div class="ppt-slide">
        <img src="/images/slide31.jpg" alt="Slide 1" />
    </div>
    <div class="ppt-slide">
        <img src="/images/slide32.jpg" alt="Slide 2" />
    </div>
        <div class="ppt-slide">
        <img src="/images/slide33.jpg" alt="Slide 1" />
    </div>
    <div class="ppt-slide">
        <img src="/images/slide34.jpg" alt="Slide 2" />
    </div>
        <div class="ppt-slide">
        <img src="/images/slide35.jpg" alt="Slide 1" />
    </div>
    <div class="ppt-slide">
        <img src="/images/slide36.jpg" alt="Slide 2" />
    </div>
        <div class="ppt-slide">
        <img src="/images/slide37.jpg" alt="Slide 1" />
    </div>
    <div class="ppt-slide">
        <img src="/images/slide38.jpg" alt="Slide 2" />
    </div>
        <div class="ppt-slide">
        <img src="/images/slide39.jpg" alt="Slide 1" />
    </div>
    <div class="ppt-slide">
        <img src="/images/slide40.jpg" alt="Slide 2" />
    </div>
        <div class="ppt-slide">
        <img src="/images/slide41.jpg" alt="Slide 1" />
    </div>
    <div class="ppt-slide">
        <img src="/images/slide42.jpg" alt="Slide 2" />
    </div>

  </div>

Aqui les dejo el PDF completo con el paper explicativo del desarrollo y funcionamiento del dispositivo.

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
            <h4 class="font-bold">Paper: Desarrollo SSCR</h4>
            <p class="text-xs opacity-70">PDF • Tesis Completa</p>
        </div>
    </div>
    <a href="/IANARDI_TF.pdf" download class="btn-download">
        Descargar Archivo
    </a>
</div>


</div>

<style>
.ppt-slider {
    display: flex;
    gap: 20px;
    overflow-x: auto;
    padding: 20px 0;
    scroll-snap-type: x mandatory;
}

.ppt-slide {
    flex: 0 0 100%; /* Una slide por vez en móviles */
    scroll-snap-align: center;
}

@media (min-width: 768px) {
    .ppt-slide {
        flex: 0 0 80%; /* En desktop se ve un poquito de la siguiente */
    }
}

.ppt-slide img {
    width: 100%;
    border-radius: 4px;
    border: 1px solid #ddd;
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}
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
    max-width: 450px;
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
  .titulo-galeria {
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
  

.photo-item {
  flex: 0 0 auto; /* Permite que el item tome el ancho de su contenido */
  scroll-snap-align: start;
}

.photo-item img {
  width: auto; /* La imagen dicta su propio ancho */
  max-width: 80vw; /* Evita que una imagen gigante rompa el layout */
  height: 400px; /* Mantener una altura fija hace que la galería sea prolija */
  object-fit: contain; /* Asegura que la imagen se vea completa */
  background-color: #f3f4f6; /* Opcional: un fondo neutro por si la imagen es muy delgada */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

@media (max-width: 600px) {
  .photo-item img {
    height: 250px; /* Un poco más pequeña en móviles */
    max-width: 90vw;
  }
}
.img-presentacion {
  display: block;
  /* El ancho máximo será el del párrafo (prose), usualmente alrededor de 65ch o 700px */
  max-width: 100%; 
  width: fit-content; /* Se ajusta al tamaño real de la imagen */
  margin: 2rem auto; /* La centra y le da aire arriba y abajo */
}

.img-presentacion img {
  display: block;
  max-width: 100%; /* No deja que la imagen sea más ancha que el texto */
  height: auto;    /* Mantiene la proporción para que no se vea estirada */
  object-fit: contain; /* Asegura que se vea completa sin recortes */
  border-radius: 8px;
}


/* Para la Opción 2 (Tarjeta de Descarga) */
.download-card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    border: 1px solid #e5e7eb;
    padding: 20px;
    border-radius: 12px;
    margin-top: 2rem;
    transition: all 0.3s ease;
}

.download-card:hover {
    border-color: #3b82f6;
    box-shadow: 0 10px 20px rgba(59, 130, 246, 0.1);
}

.download-info {
    display: flex;
    align-items: center;
    gap: 15px;
}

.download-info h4 {
    margin: 0;
    font-weight: bold;
    color: #111827;
}

.download-info p {
    margin: 0 !important;
    text-indent: 0 !important;
    font-size: 0.8rem;
    color: #6b7280;
}

.btn-download {
    background: #3b82f6;
    color: white !important;
    padding: 10px 20px;
    border-radius: 8px;
    font-weight: bold;
    font-size: 0.9rem;
    text-decoration: none !important;
    transition: background 0.2s;
}

.btn-download:hover {
    background: #2563eb;
}

@media (max-width: 600px) {
    .download-card {
        flex-direction: column;
        text-align: center;
        gap: 20px;
    }
    .download-info {
        flex-direction: column;
    }
}

.img-presentacion {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center; /* Centra la imagen y el texto */
  margin-bottom: 3rem;
}

.ia-badge {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 8px;
  font-size: 0.75rem;
  color: #6b7280; /* Gris sutil */
  font-family: 'Inter', sans-serif;
  font-style: italic;
  letter-spacing: 0.025em;
}

.ia-badge svg {
  opacity: 0.6;
}

/* Efecto opcional: Que la etiqueta solo se vea clara cuando pasas el mouse por la imagen */
.img-presentacion:hover .ia-badge {
  color: #3b82f6; /* Cambia a tu color azul de marca */
  transition: color 0.3s ease;
}
</style>