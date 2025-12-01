import React, { useState } from 'react';

const faqs = [
    {
        question: "¿Qué es Torao?",
        answer: "Torao es una plataforma de estudio impulsada por Inteligencia Artificial que te ayuda a resumir documentos, generar flashcards y estudiar de manera más eficiente."
    },
    {
        question: "¿Es gratuito?",
        answer: "Ofrecemos un plan gratuito con funciones básicas. Para acceso ilimitado y características avanzadas, contamos con planes premium a precios accesibles."
    },
    {
        question: "¿Cómo funciona el resumen con IA?",
        answer: "Nuestra IA analiza tu documento, identifica los conceptos clave y genera un resumen conciso y fácil de entender, ahorrándote horas de lectura."
    },
    {
        question: "¿Puedo subir cualquier tipo de archivo?",
        answer: "Soportamos los formatos más comunes como PDF, DOCX (Word), TXT e incluso imágenes con texto. Estamos trabajando para añadir más formatos pronto."
    },
    {
        question: "¿Mis documentos están seguros?",
        answer: "Absolutamente. Tus documentos se procesan de forma segura y privada. No compartimos tus datos con terceros y utilizamos cifrado de extremo a extremo."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="relative bg-gray-950 py-12 px-6 sm:px-14 overflow-hidden" id="faq">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Preguntas <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Frecuentes</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Todo lo que necesitas saber para empezar a revolucionar tu estudio con Torao.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`
                                group border rounded-xl overflow-hidden transition-all duration-300
                                ${openIndex === index
                                    ? 'bg-gray-900/60 border-emerald-500/50 shadow-lg shadow-emerald-500/10'
                                    : 'bg-gray-900/30 border-gray-800 hover:border-gray-700 hover:bg-gray-900/40'}
                                backdrop-blur-md
                            `}
                        >
                            <button
                                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                                onClick={() => toggleFAQ(index)}
                            >
                                <span className={`text-lg font-medium transition-colors duration-300 ${openIndex === index ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                                    {faq.question}
                                </span>
                                <span className={`
                                    flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300
                                    ${openIndex === index
                                        ? 'bg-emerald-500/20 border-emerald-500/50 rotate-180'
                                        : 'bg-gray-800 border-gray-700 group-hover:border-gray-600'}
                                `}>
                                    <svg className={`w-5 h-5 transition-colors duration-300 ${openIndex === index ? 'text-emerald-400' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </button>
                            <div
                                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-gray-800/50 pt-4 mt-2">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
