import React from 'react';
import './footer.css';
import facebookLogo from '../assets/facebook-logo.png';  // Ajusta la ruta
import twitterLogo from '../assets/twitter-logo.png';    // Ajusta la ruta
import instagramLogo from '../assets/instagram-logo.png'; // Ajusta la ruta

const Footer = () => {
    const socialLinks = [
        {
            href: '#',
            src: facebookLogo,
            alt: 'Visítanos en Facebook',
            id: 'facebook',
        },
        {
            href: '#',
            src: twitterLogo,
            alt: 'Síguenos en Twitter',
        },
        {
            href: '#',
            src: instagramLogo,
            alt: 'Síguenos en Instagram',
        },
    ];

    return (
        <footer>
            <p>© 2025 Tienda de Mangas | Todos los derechos reservados</p>
            <p>
                <a href="mailto:contacto@tiendamangas.com">contacto@tiendamangas.com</a>
            </p>
            <div className="social-media">
                {socialLinks.map(({ href, src, alt, id }, index) => (
                    <a key={index} href={href} target="_blank" rel="noopener noreferrer">
                        <img
                            className="logos"
                            id={id}
                            src={src}
                            alt={alt}
                        />
                    </a>
                ))}
            </div>
        </footer>
    );
};

export default Footer;
