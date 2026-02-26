---
title: 'Soldador de Punto'
description: Desarrollo de soldadora de punto para fabricar paneles de baterias de reemplazo para equipamiento biomedico
publishDate: 'Oct 2 2023'
isFeatured: true
seo:
  image:
    src: '../../assets/images/project-2.jpg'
    alt: Project preview
---
<div class="post-contenido texto-pequeno">
### Soldadora de punto con transformador de microondas

En el hospital muchas veces nos veíammos en la situación de tenner que fabriacr o reempaquetar celdas de baterías para equipos que no podiamos conseguir nuevas, o el costo era muy elevado.

Cuando se necesita hacer estos packs de celdas la soldadura de baterias con estaño no es una buena opción, ya que tenemos que exponer a las baterias a temperaturas extremas que pueden arruinar la química interna y a veces la superficie de contácto es tan amplia que nunca llega a levantar la temperatura necesaria para obtener un buen punto de soldadura con estaño. Es por esta razón que los fabricantes de baterías utilizan la soldadura de punto para unir seldas.

La caracteristica de la soldadura de punto es que sin aporte de material, se someten a las dos superficies a un punto de mucha corriente a baja tensión provocando una zona muy pequeña en donde las dos superficies se derriten y se unen. Al ser un punto tan pequeño, esta temperatura no alcanza a calentar al resto de la bateria, haciendola seguro para su uso.

Ahora para lograr esta alta corriente a baja tensión, (estamos hablando de más de 60 amps) necesitamos un transformador que nos baje la tensión y nos suba la corriente, junto con conductoes que aguanten este nivel de corriente. Es por eso que lo que hice fue abrir un transformador de microondas para quitar el bobinado secundario y cambiarlo por un bobinado de tan solo un par de vueltas fabricado con conductores extremadamente gruesos. Al calcular la relación de tensión corriente del transformador vemos que queda n estos valores:


<div class="img-flotante izq">
  <img src="/images/paroissien1.jpg" alt="hsopital 1" />
</div>

Así logramos sacar de 220v un voltaje seguro y bajo con una corriente extremadamante alta. Esto combinado con 2 electrodos de bronce que nos van a permitir hacer presión sobre las superficies a unir, lograremos la soldadura de punto necesaria.

<div class="img-flotante izq">
  <img src="/images/paroissien1.jpg" alt="hsopital 1" />
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