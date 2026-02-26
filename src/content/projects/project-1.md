---
title: 'Mantenimiento panales de gases medicinales'
description: MAntenimiento y reparacion de paneles de gases en neonatologia y terapia intenciva
publishDate: 'jun 02 2024'
seo:
  image:
    src: '/images/project-1.jpg'
    alt: Project preview
---
<div class="post-contenido texto-pequeno">

### Mantenimiento del sistema de gases medicinales

Durante mi ultimo año trabajando en el hospital Paroissien nos vimos en una situación en la que la pandemia de covid había terminado y el hospital habia sufrido muchas modificaciones y uso excesivo de los sistemas de gases medicinales. Es por esta razon que decidimos con el jefe de gestión tecnológica realizar un mantenimiento del sistema de gases. Habia muchos puertos de conexión con perdidas de oxígeno o vacío y tambíen habian conexiones precarias que se habiar realizado con la urgencia del covid y se debían instalar correctamente.
<div class="img-presentacion">
  <img src="/images/paroissien2.jpg" alt="Presentación SSCR" />
</div>

Asi fué como decidimos reemplazar todos los orings de los puertos de gases en los servicios más críticos y redistribuir la instalación de bocas en la terapia intensiva.

Esto aunque parece un trabajo menor, no lo es tanto, teniendo en cuenta que es necesario coordinar a todo un servicio para dejar sin suministro de gases durante un día a determinado secto, sabiendo que el desarmado de todos los puertos de gases que van empotrados en la pared pueden producir daños en la misma, y por ultimo teniendo en cuenta que al tratar con vacío hay que tener cuidado con las propagaciones de infecciones asi como hay que tener extremo cuidado con las perdidas de oxígenos que es un gas altamente inflamable.
<div class="img-presentacion">
  <img src="/images/gases.jpg" alt="Presentación SSCR" />
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
.img-presentacion {
  display: block;
  max-width: 100%; 
  /* Eliminamos width: fit-content para que el contenedor no mande sobre el tamaño */
  margin: 2rem auto; 
  text-align: center; /* Esto asegura que la imagen de adentro se centre */
}

.img-presentacion img {
  display: block;
  width: 50%;       /* <--- Aquí le damos el 50% del ancho del párrafo */
  max-width: 100%; 
  height: auto; 
  margin: 0 auto;   /* Centra la imagen dentro del bloque */
  object-fit: contain;
  border-radius: 8px;
}
</style>
