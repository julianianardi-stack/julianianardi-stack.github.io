---
title: 'Dibujadora mecánica con motores PAP'
description: Desarrollo  dispisitivo mecánico que pueda recibir diseños de imñagenes por software y sea capáz de plasmarlo en un papel 2D sosteniendo un lápiz a travéz de 1 par de monoteres PAP.
publishDate: 'Dec 02 2023'
seo:
  image:
    src: '/images/project-1.jpg'
    alt: Project preview
---
<div class="post-contenido texto-pequeno">

### Dibujadora 3D

Este proyecto lo realizamos junto con un compañero en el marzo de la cátedra de robótica, en la cual había que diseñar un dispositivo capáz de realizar determinada tarea, enviandole las instrucciones desde una computadora o smartphone.

Para esto desarrollamos un sistema de ejes con varillas de acero y uniones impresas en 3D (con el mismo método con el que se fabrican las impresoras 3D) que atravéz de varillas roscadas y motores paso a paso, lograban mover un servomotor que iba dibujando en un papel el archivo que nosotros le habíamos enviado por la computadora.

PAra realizar este proyecto fué necesario aprender a programar en arduino y diseñar en 3D para realizar las instrucciones.

<div class="img-presentacion">
  <video 
    src="/dibujo.mp4" 
    autoplay 
    muted 
    loop 
    playsinline
  >
    Tu navegador no soporta videos.
  </video>
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
  /* Agregá esto a tu CSS existente */
.img-presentacion video {
  display: block;
  width: 50%; /* Mismo ancho que las fotos */
  max-width: 100%;
  height: auto;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1); /* Un toque de sombra para que resalte */
}
</style>
