---
title: 'Sistema Integral de Sensado Para Incubadoras de Neonatología'
description: Sistema de sensado térmico en 5 puntos de una incubadora de neonatología para determinar el cumplimiento de los estándares IRAM.
publishDate: 'jul 19 2025'
seo:
  image:
    src: '/images/project-4.jpg'
---
<div class="post-contenido texto-pequeno">

### Neotermómetro

Este fué un dispositivo que desarrollé durante mis años trabajando en el hospital paroissien, donde no siempre teníamos acceso a todas las herramientas necesarias para realizar los mantenimientos preventivos a todos los equipos médicos.

Uno de los casos fué el de las incubadoras para neonatología, las cuales entre los chequeos que se dében realizar es la temperatura de la incubadora en 5 puntos diferentes de ella a diferente altura y el tiempo que la incubadora llega en todos estos puntos a la temperatura deseada.

Fué asi que con un esp 32, 4 sensores de temperatura ...., un display y el diseño en impresión 3D de soportes para los mismos; desarrollé un sistema capáz de realizar este sensado en 5 puntos a la vez y graficar con respecto al tiempo la evolución de la temperatura en la incubadora.

Obviamente para este desarrollo es necesario tener concimientos tanto de electrónica como de Arduino, para poder construir el dispositivo
<div class="img-flotante izq">
  <img src="/images/paroissien1.jpg" alt="hsopital 1" />
</div>

<div class="img-flotante der">
  <img src="/images/paroissien2.jpg" alt="hospital 2" />
</div>

<div class="img-flotante izq">
  <img src="/images/paroissien3.jpeg" alt="hospital 3" />
</div>

<div class="img-flotante der">
  <img src="/images/paroissien4.jpg" alt="hospital 4" />
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
</style>
