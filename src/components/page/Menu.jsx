import React, { useState, useEffect } from 'react';
import Btn from "../btns/btnsMenu";

const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    const NavLink = ({ children, href, onClick }) => (
        <a
            href={href}
            onClick={onClick}
            className="group relative text-gray-300 text-sm font-medium transition-colors duration-300 hover:text-white px-2 py-1"
        >
            {children}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full" />
        </a>
    );

    const MobileNavLink = ({ children, href }) => (
        <a
            href={href}
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl font-semibold text-gray-300 hover:text-white hover:text-emerald-400 transition-colors duration-300"
        >
            {children}
        </a>
    );

    const navLinks = [
        { name: 'Características', href: '#caracteristicas' },
        { name: 'Comentarios', href: '#comentarios' },
        { name: 'Precios', href: '#precios' },
        { name: 'FAQ', href: '#faq' },
    ];

    return (
        <>
            <nav
                className={`
                    fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-transparent
                    ${scrolled || isMenuOpen ? 'bg-gray-950/80 backdrop-blur-md border-gray-800/50 py-3' : 'bg-transparent py-5'}
                `}
            >
                <div className="max-w-7xl mx-auto px-6 sm:px-14">
                    <div className="flex justify-between items-center">

                        <a href="#" className="flex items-center gap-2 group z-50 relative">
                            <span className="text-xl font-bold text-white tracking-tight">Torao</span>
                        </a>

                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <NavLink key={link.name} href={link.href}>
                                    {link.name}
                                </NavLink>
                            ))}
                        </div>

                        <div className="hidden md:flex items-center gap-3">
                            <Btn variant="normal">Iniciar Sesión</Btn>
                            <Btn variant="accent">Regístrate</Btn>
                        </div>

                        <button
                            className="md:hidden relative z-50 w-10 h-10 flex flex-col justify-center items-center gap-1.5 focus:outline-none"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle Menu"
                        >
                            <span className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                            <span className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                            <span className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                        </button>
                    </div>
                </div>
            </nav>

            <div
                className={`
                    fixed inset-0 bg-gray-950 z-40 md:hidden transition-all duration-500 ease-in-out
                    flex flex-col justify-center items-center gap-8
                    ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}
                `}
            >
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="flex flex-col items-center gap-8 relative z-10">
                    {navLinks.map((link) => (
                        <MobileNavLink key={link.name} href={link.href}>
                            {link.name}
                        </MobileNavLink>
                    ))}
                </div>

                <div className="w-16 h-1 bg-gray-800 rounded-full" />

                <div className="flex flex-col gap-4 w-full max-w-xs px-6 relative z-10">
                    <Btn variant="accent" className="w-full justify-center">Regístrate</Btn>
                    <Btn variant="normal" className="w-full justify-center">Iniciar Sesión</Btn>
                </div>
            </div>
        </>
    );
};

export default Menu;