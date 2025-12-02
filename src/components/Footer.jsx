import React, { useState } from 'react';
import LegalModal from './LegalModal';
import { legalContent } from './LegalContent';

const Footer = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '', content: null });

    const openModal = (title) => {
        setModalContent({ title, content: legalContent[title] });
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <footer className="relative bg-gray-950 pt-10 pb-10 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-14">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-16">
                    <div className="col-span-2 lg:col-span-1 space-y-6">
                        <div className="flex items-center gap-3 group cursor-default">
                            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 group-hover:to-white transition-all duration-300">
                                Torao
                            </span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Revolucionando la forma en que estudias con el poder de la Inteligencia Artificial. Tu compañero de estudio definitivo.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            Producto
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <a href="#caracteristicas" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 text-sm flex items-center gap-2 group">
                                    <span className="w-0 h-px bg-emerald-400 transition-all duration-300 group-hover:w-3" />
                                    Características
                                </a>
                            </li>
                            <li>
                                <a href="#precios" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 text-sm flex items-center gap-2 group">
                                    <span className="w-0 h-px bg-emerald-400 transition-all duration-300 group-hover:w-3" />
                                    Planes de Precio
                                </a>
                            </li>
                            <li>
                                <a href="#producto" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 text-sm flex items-center gap-2 group">
                                    <span className="w-0 h-px bg-emerald-400 transition-all duration-300 group-hover:w-3" />
                                    Casos de Uso
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                            Compañía
                        </h3>
                        <ul className="space-y-4">
                            {['Sobre Nosotros', 'Contacto'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm flex items-center gap-2 group">
                                        <span className="w-0 h-px bg-blue-400 transition-all duration-300 group-hover:w-3" />
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            Legal
                        </h3>
                        <ul className="space-y-4">
                            {['Privacidad', 'Términos de Servicio', 'Cookies', 'Seguridad'].map((item) => (
                                <li key={item}>
                                    <button
                                        onClick={() => openModal(item)}
                                        className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 text-sm flex items-center gap-2 group"
                                    >
                                        <span className="w-0 h-px bg-emerald-400 transition-all duration-300 group-hover:w-3" />
                                        {item}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-sm text-gray-500">
                        <p>© {new Date().getFullYear()} Torao AI. Todos los derechos reservados.</p>
                        <span className="hidden md:inline text-gray-700">|</span>
                        <p>Desarrollado por <a href="https://bydaniel.site" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 transition-colors duration-200 font-medium">cerrtrash</a></p>
                    </div>
                    <div className="flex items-center gap-6">
                        {[
                            { name: 'Twitter', path: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' },
                            { name: 'GitHub', path: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z' }
                        ].map((social) => (
                            <a key={social.name} href="#" className="text-gray-500 hover:text-white transition-all duration-300 hover:scale-110">
                                <span className="sr-only">{social.name}</span>
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d={social.path} clipRule="evenodd" />
                                </svg>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <LegalModal
                isOpen={modalOpen}
                onClose={closeModal}
                title={modalContent.title}
                content={modalContent.content}
            />
        </footer>
    );
};

export default Footer;
