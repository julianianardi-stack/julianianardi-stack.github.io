import type { SiteConfig } from '../types';
const avatar = "/images/avatar.jpg";
const hero = '/images/portada.jpg';

const siteConfig: SiteConfig = {
    website: 'https://example.com',
    avatar: {
        src: avatar,
        alt: 'Julian Ianardi'
    },
    title: 'Julian Ianardi',
    subtitle: 'Portfolio personal',
    description: 'Este es mi portfolio personal donde comparto mi experiencia y proyectos',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Portfolio de Julian Ianardi'
    },
    headerNavLinks: [
        {
            text: 'home',
            href: '/'
        },
        {
            text: 'Historial académico',
            href: '/background'
        },
        {
            text: 'Historial laboral',
            href: '/laboral'
        },
        {
            text: 'Desarrollos',
            href: '/projects'
        },
        {
            text: 'Perfil personal',
            href: '/history'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/history'
        },
        {
            text: 'Contact',
            href: '/contact'
        },


    ],
    socialLinks: [
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/julian-ianardi-07b403233/?locale=en_US'
        },

    ],
    hero: {
        title: 'Hola soy el Bioingeniero Julián Ianardi y te doy la bienvenida a mi rincón personal',
        text: `Mi enfoque combina el rigor de la ingeniería con la curiosidad por la innovación en la solución de problemas. Desde el mantenimiento de tecnología médica hasta el desarrollo de sistemas IoT para la industria enológica, mi objetivo es transformar la ciencia y diseño en valor real sobre el terreno.

Creo en la ingeniería que se toca y se vive: ya sea creando valor en el hospital, en el laboratorio, en la bodega o en el viñedo.

Explorá mis proyectos de desarrollo, mis bitácoras de viaje y mi trayectoria profesional en este sitio.`,
        image: {
            src: hero,
            alt: 'Foto personal'
        },
        actions: [
            {
                text: 'Curriculum',
                href: '/contact'
            }
        ]
    },
    // subscribe: {
    //     enabled: true,
    //     title: 'Subscribe to Dante Newsletter',
    //     text: 'One update per week. All the latest posts directly in your inbox.',
    //     form: {
    //         action: '#'
    //     }
    //},

    projectsPerPage: 10,
    postsPerPage: 12
};

export default siteConfig;
