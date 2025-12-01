import React, { useState, useEffect } from 'react';

const Producto = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [hoveredCard, setHoveredCard] = useState(null);

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const circleGradientStyle = {
        backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(16, 185, 129, 0.1) 0%, transparent 50%)`,
    };

    return (
        <section className="relative bg-gray-950 py-12 sm:py-20 overflow-hidden" id="producto">

            <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={circleGradientStyle}
            ></div>

            <div className="max-w-7xl mx-auto px-6 sm:px-14 relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    <div className="text-center lg:text-left">
                        <h2 className="text-xs md:text-sm font-semibold uppercase tracking-widest text-emerald-400 mb-4 shadow-sm">
                            La Herramienta Definitiva
                        </h2>
                        <h1 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-emerald-300">
                            Crea Resúmenes Inteligentes
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                            Torao emplea <span className="text-emerald-400 font-semibold">inteligencia artificial de última generación</span> para potenciar tu productividad. Transforma cualquier recurso ya sean PDFs, imágenes y documentos en resúmenes impecables al instante.
                        </p>

                        <button className="py-3 px-8 rounded-full bg-green-500 hover:bg-green-400 text-black font-semibold transition duration-300 ease-in-out shadow-lg shadow-green-700/50 hover:shadow-green-600/70 active:scale-95">
                            Prueba Gratis
                        </button>
                    </div>

                    <div className="relative flex justify-center lg:justify-end mt-10 lg:mt-0">

                        <div className="absolute inset-0 m-auto w-4/5 h-4/5 bg-emerald-500 opacity-15 blur-3xl rounded-full pointer-events-none animate-pulse"></div>

                        <div className="hidden md:block">
                            <div
                                className="absolute top-[80px] -left-[20px] w-52 h-36 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl border border-emerald-500/20 p-5 transform -rotate-12 z-30 transition duration-500 hover:rotate-0 hover:scale-110 hover:shadow-emerald-500/30 cursor-pointer hover:border-emerald-400/60 hover:h-[180px] hover:transition hover:duration-200"
                                onMouseEnter={() => setHoveredCard(1)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <span className="text-xs font-mono text-emerald-400 block mb-3 font-semibold">Flashcard #1</span>
                                <p className="text-base font-bold text-white leading-tight">¿Cuál fue el propósito del Muro de Berlín?</p>
                                {hoveredCard === 1 && (
                                    <div className="mt-4 pt-4 border-t border-emerald-500/30 text-xs text-gray-400">
                                        Respuesta: Separación política durante la Guerra Fría
                                    </div>
                                )}
                            </div>
                            <div
                                className="absolute hover:h-[190px] top-[280px] -right-[40px] w-52 h-36 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl border border-emerald-500/20 p-5 transform rotate-12 z-30 transition duration-500 hover:rotate-0 hover:scale-110 hover:shadow-emerald-500/30 cursor-pointer hover:border-emerald-400/60"
                                onMouseEnter={() => setHoveredCard(2)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <span className="text-xs font-mono text-emerald-400 block mb-3 font-semibold">Flashcard #2</span>
                                <p className="text-base font-bold text-white leading-tight">¿Cuándo fue la independencia de El Salvador?</p>
                                {hoveredCard === 2 && (
                                    <div className="mt-4 pt-4 border-t border-emerald-500/30 text-xs text-gray-400">
                                        Respuesta: 15 de septiembre de 1821
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="relative w-full max-w-xl h-auto bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl shadow-2xl border border-emerald-500/20 p-6 overflow-hidden transform hover:scale-[1.02] transition duration-500 ease-in-out hover:border-emerald-500/40 hover:shadow-emerald-500/20">

                            <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-700/50">
                                <span className="text-xs text-gray-500 font-mono">/app/resumen-inteligente</span>
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 bg-red-500/80 rounded-full hover:bg-red-400 transition"></div>
                                    <div className="w-3 h-3 bg-yellow-500/80 rounded-full hover:bg-yellow-400 transition"></div>
                                    <div className="w-3 h-3 bg-emerald-500/80 rounded-full hover:bg-emerald-400 transition"></div>
                                </div>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                                Resumen Generado: <span className="text-emerald-400">La Guerra Fría</span>
                            </h3>

                            <div className="space-y-3 text-gray-400 text-sm h-48 md:h-56 overflow-hidden">
                                <div className="h-3 bg-gradient-to-r from-gray-700 via-gray-600 to-transparent w-full rounded-sm animate-pulse"></div>
                                <div className="h-3 bg-gradient-to-r from-gray-700 via-gray-600 to-transparent w-11/12 rounded-sm animate-pulse" style={{ animationDelay: '100ms' }}></div>
                                <div className="h-3 bg-gradient-to-r from-gray-700 via-gray-600 to-transparent w-10/12 rounded-sm animate-pulse" style={{ animationDelay: '200ms' }}></div>
                                <div className="h-3 bg-gradient-to-r from-gray-700 via-gray-600 to-transparent w-full rounded-sm animate-pulse" style={{ animationDelay: '300ms' }}></div>
                                <div className="h-3 bg-gradient-to-r from-gray-700 via-gray-600 to-transparent w-5/6 rounded-sm animate-pulse" style={{ animationDelay: '400ms' }}></div>
                                <div className="h-3 bg-gradient-to-r from-gray-700 via-gray-600 to-transparent w-11/12 rounded-sm animate-pulse" style={{ animationDelay: '500ms' }}></div>
                                <div className="h-3 bg-gradient-to-r from-gray-700 via-gray-600 to-transparent w-2/3 rounded-sm animate-pulse" style={{ animationDelay: '600ms' }}></div>
                            </div>

                            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent pointer-events-none"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Producto;