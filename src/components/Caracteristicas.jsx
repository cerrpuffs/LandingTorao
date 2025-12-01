import React, { useState, useEffect } from 'react';

const features = [
    {
        id: 'resumenes',
        title: "Resúmenes Inteligentes",
        description: "Nuestra IA procesa cientos de páginas en segundos, extrayendo los puntos clave y estructurando la información para un aprendizaje rápido.",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
        color: "emerald",
        visual: () => (
            <div className="w-full h-full bg-gray-900 rounded-2xl border border-gray-800 p-6 flex flex-col shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-500" />
                <div className="space-y-4 relative z-10">
                    <div className="h-4 bg-gray-800 rounded-full w-3/4 animate-pulse" />
                    <div className="h-4 bg-gray-800 rounded-full w-full animate-pulse delay-75" />
                    <div className="h-4 bg-gray-800 rounded-full w-5/6 animate-pulse delay-150" />
                    <div className="h-4 bg-gray-800 rounded-full w-4/5 animate-pulse delay-200" />
                    <div className="mt-8 p-4 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-2 h-2 rounded-full bg-emerald-500" />
                            <span className="text-xs font-bold text-emerald-400 uppercase">Puntos Clave</span>
                        </div>
                        <div className="h-2 bg-emerald-500/20 rounded-full w-full mb-2" />
                        <div className="h-2 bg-emerald-500/20 rounded-full w-5/6" />
                    </div>
                </div>
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-emerald-500/20 blur-[80px] rounded-full pointer-events-none" />
            </div>
        )
    },
    {
        id: 'flashcards',
        title: "Flashcards Automáticas",
        description: "Generación automática de tarjetas de estudio para memorización activa. Estudia de manera más inteligente, no más difícil.",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
        ),
        color: "blue",
        visual: () => (
            <div className="w-full h-full flex items-center justify-center relative">
                <div className="absolute w-64 h-80 bg-gray-800 rounded-2xl border border-gray-700 transform rotate-6 opacity-40 scale-90" />
                <div className="absolute w-64 h-80 bg-gray-800 rounded-2xl border border-gray-700 transform -rotate-6 opacity-70 scale-95" />
                <div className="relative w-64 h-80 bg-gray-900 rounded-2xl border border-blue-500/30 shadow-2xl shadow-blue-500/20 flex flex-col items-center justify-center p-8 text-center z-10">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-t-2xl" />
                    <div className="text-blue-400 font-bold text-sm mb-4 uppercase tracking-wider">Pregunta</div>
                    <div className="text-white text-lg font-medium mb-8">¿Cuál es la función principal de la mitocondria?</div>
                    <div className="w-full bg-gray-800 h-12 rounded-lg flex items-center justify-center text-gray-400 text-sm cursor-pointer hover:bg-gray-700 transition-colors border border-gray-700">
                        Mostrar Respuesta
                    </div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/20 blur-[100px] rounded-full pointer-events-none" />
            </div>
        )
    },
    {
        id: 'chat',
        title: "Chat con tus Documentos",
        description: "Pregunta cualquier cosa a tus documentos y obtén respuestas instantáneas con citas directas de la fuente.",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
        ),
        color: "purple",
        visual: () => (
            <div className="w-full h-full bg-gray-900 rounded-2xl border border-gray-800 p-6 flex flex-col shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500" />
                <div className="flex-grow space-y-6 relative z-10">
                    <div className="flex justify-end">
                        <div className="bg-purple-500 text-white text-sm py-3 px-4 rounded-2xl rounded-tr-sm max-w-[85%] shadow-lg shadow-purple-500/20">
                            ¿Qué dice el documento sobre el cambio climático?
                        </div>
                    </div>
                    <div className="flex justify-start">
                        <div className="bg-gray-800 text-gray-200 text-sm py-3 px-4 rounded-2xl rounded-tl-sm max-w-[90%] border border-gray-700">
                            <p className="mb-2">El documento menciona que las emisiones globales han aumentado un 15% en la última década.</p>
                            <div className="flex items-center gap-2 text-[10px] text-gray-400 bg-gray-900/50 p-1.5 rounded w-fit">
                                <span className="w-1 h-1 rounded-full bg-purple-400" />
                                Fuente: Página 12
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4 relative z-10">
                    <div className="h-10 bg-gray-800 rounded-lg border border-gray-700 w-full flex items-center px-4 text-gray-500 text-sm">
                        Escribe tu pregunta...
                    </div>
                </div>
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-500/20 blur-[80px] rounded-full pointer-events-none" />
            </div>
        )
    },
    {
        id: 'formatos',
        title: "Soporte Multi-formato",
        description: "No te limites. Sube PDFs, documentos de Word, imágenes o incluso notas de voz. Torao lo entiende todo.",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        ),
        color: "orange",
        visual: () => (
            <div className="w-full h-full flex items-center justify-center relative">
                <div className="grid grid-cols-2 gap-4 relative z-10">
                    <div className="w-24 h-32 bg-gray-800 rounded-xl border border-red-500/30 flex flex-col items-center justify-center gap-2 shadow-lg shadow-red-500/10 hover:-translate-y-1 transition-transform duration-300">
                        <div className="text-red-500 font-bold text-xl">PDF</div>
                        <div className="w-8 h-1 bg-red-500/20 rounded-full" />
                    </div>
                    <div className="w-24 h-32 bg-gray-800 rounded-xl border border-blue-500/30 flex flex-col items-center justify-center gap-2 shadow-lg shadow-blue-500/10 hover:-translate-y-1 transition-transform duration-300 delay-75">
                        <div className="text-blue-500 font-bold text-xl">DOC</div>
                        <div className="w-8 h-1 bg-blue-500/20 rounded-full" />
                    </div>
                    <div className="w-24 h-32 bg-gray-800 rounded-xl border border-yellow-500/30 flex flex-col items-center justify-center gap-2 shadow-lg shadow-yellow-500/10 hover:-translate-y-1 transition-transform duration-300 delay-150">
                        <div className="text-yellow-500 font-bold text-xl">IMG</div>
                        <div className="w-8 h-1 bg-yellow-500/20 rounded-full" />
                    </div>
                    <div className="w-24 h-32 bg-gray-800 rounded-xl border border-green-500/30 flex flex-col items-center justify-center gap-2 shadow-lg shadow-green-500/10 hover:-translate-y-1 transition-transform duration-300 delay-200">
                        <div className="text-green-500 font-bold text-xl">MP3</div>
                        <div className="w-8 h-1 bg-green-500/20 rounded-full" />
                    </div>
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-orange-500/20 blur-[100px] rounded-full pointer-events-none" />
            </div>
        )
    }
];

const Caracteristicas = () => {
    const [activeFeature, setActiveFeature] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveFeature((prev) => (prev + 1) % features.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative bg-gray-950 py-12 px-6 sm:px-14 overflow-hidden" id="caracteristicas">
            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-white">
                        Todo lo que necesitas para <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">destacar</span>
                    </h2>
                    <p className="text-lg text-gray-400 leading-relaxed">
                        Una suite completa de herramientas de IA diseñadas para potenciar tu aprendizaje.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    <div className="space-y-4">
                        {features.map((feature, index) => (
                            <button
                                key={feature.id}
                                onClick={() => setActiveFeature(index)}
                                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 border group ${activeFeature === index
                                    ? 'bg-gray-900 border-emerald-500/50 shadow-lg shadow-emerald-500/10'
                                    : 'bg-transparent border-transparent hover:bg-gray-900/50 hover:border-gray-800'
                                    }`}
                            >
                                <div className="flex items-start gap-4">
                                    <div className={`mt-1 p-2 rounded-lg transition-colors duration-300 ${activeFeature === index ? 'bg-emerald-500/20 text-emerald-400' : 'bg-gray-800 text-gray-400 group-hover:bg-gray-700 group-hover:text-gray-200'
                                        }`}>
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${activeFeature === index ? 'text-white' : 'text-gray-400 group-hover:text-white'
                                            }`}>
                                            {feature.title}
                                        </h3>
                                        <p className={`text-sm leading-relaxed transition-colors duration-300 ${activeFeature === index ? 'text-gray-300' : 'text-gray-500 group-hover:text-gray-400'
                                            }`}>
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>

                    <div className="relative h-[500px] w-full hidden lg:block">
                        {features.map((feature, index) => (
                            <div
                                key={feature.id}
                                className={`absolute inset-0 transition-all duration-500 ease-in-out transform ${activeFeature === index
                                    ? 'opacity-100 translate-y-0 scale-100 z-10'
                                    : 'opacity-0 translate-y-8 scale-95 z-0 pointer-events-none'
                                    }`}
                            >
                                {feature.visual()}
                            </div>
                        ))}
                    </div>

                    <div className="lg:hidden h-[400px] w-full mt-8">
                        {features[activeFeature].visual()}
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Caracteristicas;