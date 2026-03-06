---
title: 'PASANTÍMETRO'
description: Diseño y ejecución de instalación eléctrica aislada del tablero principal, con protecciones y sistemas de testeo aptos para utilizar en banco de pruebas de equipamiento médico.
publishDate: 'Oct 25 2025'
isFeatured: true
seo:
  image:
    src: '/images/project-5.jpg'
---
<div class="post-contenido texto-pequeno">

### Pasantímetro

<div class="img-presentacion">
  <img src="\images\pasantimetro1.jpg" alt="hospital 1" />
</div>

Durante mis años trabajando en el hospital Paroissien, recibimos a varios pasantes de la carrera de bioingeniería que venían a hacer las prácticas profesionales. Muchas veces los alumnos no tenían mucha experiencia en la manipulación de equipos o instalaciones eléctricas. Por otro lado el hospital no tenía un circuito específico para el departamento de bioingeniería, por lo que cuando se producía una primera falla en un equipo o conexión en el servicio de bioingeniería, se producía un corte del suministro en todo el piso.

Durante mis propias prácticas aviste este problema en las instalaciones eléctricas del hospital, probando equipos defectuosos que nos dejaban sin suministro a todo el piso. Es por esto que le propuse al jefe de servicio si yo podía hacer una instalación independiente aguas abajo del suministro con sus propias protecciones y siguiendo los estándares necesarios para realizar un banco de pruebas.

Asi es como realicé un cableado externo desde el tablero principal llevándolo por techos y paredes hasta el servicio de bioingeniería para llegar a un tablero de protecciones y pruebas debidamente instalado.


<div class="img-flotante der">
  <img src="/images/pasantimetro2.jpg" alt="hospital 2" />
</div>

Esta caja de aislación consta de su protección magneto-térmica, así como su disyuntor de normativa hospitalaria (15 msg). Aguas abajo de estas protecciones instalé tomas y puestos de prueba especifico para equipamiento tanto médico como regular. Así como también fabriqué un simple sistema anti-cortocircuito el cual prendía una lámpara de filamento en serie cuando el equipo bajo testeo estaba en cortocircuito o tenía un consumo excesivo. 


<div class="img-flotante izq">
  <img src="/images/pasantimetro3.jpg" alt="hospital 3" />
</div>

Este tipo de instalaciones, aunque simples, son muy efectivas y seguras para probar equipamiento con posibles defectos, evitando el riesgo de arruinar alguna otra parte de la instalación eléctrica aguas arriba.

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
  .img-presentacion {
  display: block;
  max-width: 100%; 
  /* Eliminamos width: fit-content para que el contenedor no mande sobre el tamaño */
  margin: 2rem auto; 
  text-align: center; /* Esto asegura que la imagen de adentro se centre */
}

.img-presentacion img {
  display: block;
  width: 100%;       /* <--- Aquí le damos el 50% del ancho del párrafo */
  max-width: 100%; 
  height: auto; 
  margin: 0 auto;   /* Centra la imagen dentro del bloque */
  object-fit: contain;
  border-radius: 8px;
}
</style>