---
title: 'PASANTÍMETRO'
description: Diseño y ejecución de intalación eléctrica aislada del tablero principal, con protecciones y sistemas de testeo aptos para utilizar en banco de pruebas de equipamiento médico.
publishDate: 'Oct 25 2025'
isFeatured: true
seo:
  image:
    src: '../../assets/images/project-5.jpg'
---
<div class="post-contenido texto-pequeno">

### Pasantímetro

Durante mis años trabajando en el hospital Paroissien, recibimos a varios pasates de la carrera de bioingenieria que venían a hacer las prácticas profesionales. Muchas veces los alumnos no tenían mucha experiencia en la manipulación de equipos o instalaciones eléctricas. Por otro lado el hospital no tenía un circuito específico para el departamento de bioingeniería, por lo que cuando se producía una primera falla en un equipo o conexión en el servicio de bioingeniería, se producía un corte del suministro en todo el piso.

Durante mis propias prácticas aviste este problema en las instalaciones eléctricas del hospital, probando equipos defectuosos que nos dejaban sin suministro a todo el piso. Es por esto que le propuse al jefe de servicio si yo podía hacer una instalación independiente aguas abajo del suministro con sus propias protecciones y siguiendo los estandares necesarios para realizar un banco de pruebas.

Asi es como realicé un cableado externo desde el tablero principal llevandolo por techos y paredes hasta el servicio de bioingeniería para llegar a un tablero de protecciones y pruebas debidamente instalado.

Esta caja de aislación consta de su protección magnetotérmica, así como su disyuntor de normativa hospitalaria (15 msg). Aguas abajo de estas protecciones instalé tomas y puestos de prueba especifico para equipamiento tanto médico como regular. Así como también fabriqué un simple sistema anti-cortocircuito el cual predía una lámpara de filamento en serie cuando el equipo bajo testeo estaba en conrtocircuito o tenía un consumo excesivo. 

<div class="img-flotante izq">
  <img src="/src/assets/images/paroissien1.jpg" alt="hsopital 1" />
</div>

<div class="img-flotante der">
  <img src="/src/assets/images/paroissien2.jpg" alt="hospital 2" />
</div>

<div class="img-flotante izq">
  <img src="/src/assets/images/paroissien3.jpeg" alt="hospital 3" />
</div>

<div class="img-flotante der">
  <img src="/src/assets/images/paroissien4.jpg" alt="hospital 4" />
</div>

Este tipo de instalaciones, aunque simbples, son muy efectivas y seguras para probar equipameinto con posibles defectos, evitando el riesgo de arruinar alguna otra parte de la intalacón eléctrica aguas arriba.

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
</style>