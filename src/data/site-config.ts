import avatar from '../assets/images/avatar.jpg';
import hero from '../assets/images/portada.jpg';
import type { SiteConfig } from '../types';

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
            text: 'Historial academico',
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
            text: 'linkedin',
            href: 'https://www.linkedin.com/in/julian-ianardi-07b403233/?locale=en_US'
        },

    ],
    hero: {
        title: 'Hola soy el Bioingeniero Julián Ianardi y te doy la bienvenida a mi rincón personal',
        text: "Soy un ingeniero de campo apasionado por la tecnología y la búsqueda de soluciones. Me encanta aprender cosas nuevas, investigar como funciona todo y encontrar soluciones u optimizar procesos. En esta página encontrarás algunos de mis proyectos, mis experiencias viajando y mi recorrido laboral y académico.",
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
