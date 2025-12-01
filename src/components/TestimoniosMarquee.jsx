import React, { useState } from 'react';

const testimoniosData = [
    { id: 1, texto: "Torao ha transformado mi forma de estudiar. Antes pasaba horas resumiendo PDFs, ahora lo hace al instante. ¡Mis notas han subido!", autor: "Ana G.", fuente: "Estudiante de Derecho" },
    { id: 2, texto: "La función de flashcards es espectacular. La IA realmente entiende los conceptos clave. Es como tener un tutor 24/7.", autor: "Carlos M.", fuente: "Ingeniero de Software" },
    { id: 3, texto: "Desde que uso Torao, mi productividad se ha duplicado. Puedo digerir informes complejos en minutos. Lo recomiendo a todo profesional.", autor: "Luisa P.", fuente: "Consultora Empresarial" },
    { id: 4, texto: "La interfaz es limpia y fácil de usar, incluso para alguien no tan tecnológico como yo. Resúmenes precisos y rápidos. Un 10/10.", autor: "Roberto J.", fuente: "Profesor de Historia" },
    { id: 5, texto: "Me encanta que puedo subir imágenes de apuntes a mano y Torao los convierte en texto resumido. ¡Una herramienta indispensable!", autor: "Sofía R.", fuente: "Estudiante de Medicina" },
    { id: 6, texto: "El precio es más que justificado por la cantidad de tiempo que me ahorra. Ya no me estreso por tener que leer documentos larguísimos.", autor: "David L.", fuente: "Analista Financiero" },
    { id: 7, texto: "La calidad del resumen es superior a otras IA que probé. Se enfoca en lo crucial sin perder contexto. Excelente trabajo.", autor: "Elena V.", fuente: "Investigadora" },
    { id: 8, texto: "Una inversión para mi carrera. Lo uso para preparar presentaciones y para estudiar. Sencillamente la mejor app de estudio.", autor: "Felipe N.", fuente: "Emprendedor" },
];

const loopTestimonios = [...testimoniosData, ...testimoniosData];

const TestimoniosMarquee = () => {
    const [hoveredId, setHoveredId] = useState(null);

    return (
        <>
            <style>{`
                @keyframes scroll-left {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                @keyframes scroll-right {
                    0% {
                        transform: translateX(-50%);
                    }
                    100% {
                        transform: translateX(0);
                    }
                }

                .marquee-container {
                    overflow: hidden;
                }

                .marquee-content {
                    animation: scroll-left 40s linear infinite;
                }

                .marquee-reverse .marquee-content {
                    animation: scroll-right 40s linear infinite;
                }

                .marquee-content.is-paused {
                    animation-play-state: paused;
                }
            `}</style>

            <section className="py-12 sm:py-20 bg-gray-950 overflow-hidden relative" id='comentarios'>
                <div className="max-w-7xl mx-auto px-6 sm:px-14 relative z-10 text-center mb-12">
                    <h2 className="text-xs md:text-sm font-semibold uppercase tracking-widest text-emerald-400 mb-4">
                        Lo que Dicen Nuestros Usuarios
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-emerald-300">
                        Comentarios que Impulsan
                    </h3>
                </div>

                <div className="marquee-container w-full py-8 [mask-image:_linear-gradient(to_right,transparent_0,_black_100px,_black_calc(100%-100px),transparent_100%)]">
                    <div className={`marquee-content flex gap-8 ${hoveredId !== null ? 'is-paused' : ''}`}>
                        {loopTestimonios.map((testimonio, index) => (
                            <div
                                key={index}
                                className={`
                                    testimonial-card 
                                    bg-gray-800/80 p-6 rounded-2xl shadow-xl border border-gray-700/50 
                                    w-80 min-h-48 inline-block text-left 
                                    transform transition-all duration-500 ease-in-out
                                    flex flex-col justify-between 
                                    ${hoveredId === testimonio.id ? 'z-30 scale-105 border-emerald-500 shadow-emerald-700/30' : ''}
                                    ${hoveredId !== null && hoveredId !== testimonio.id ? 'opacity-30 blur-[1px]' : 'opacity-100 blur-0'}
                                `}
                                onMouseEnter={() => setHoveredId(testimonio.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                style={{ minWidth: '320px' }}
                            >
                                <p className="text-sm font-light text-gray-300 leading-relaxed italic whitespace-normal">
                                    "{testimonio.texto}"
                                </p>
                                <div className="pt-3 border-t border-gray-700/50 mt-auto">
                                    <p className="text-base font-semibold text-white">{testimonio.autor}</p>
                                    <p className="text-xs text-emerald-400/80">{testimonio.fuente}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default TestimoniosMarquee;