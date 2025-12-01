import React from 'react';
import Btn from '../components/btns/btnsMenu';

const planes = [
    {
        id: 'gratis',
        nombre: 'Plan Básico (Gratis)',
        precio: 'Gratis',
        periodo: '/ siempre',
        descripcion: 'Ideal para probar Torao y organizar tu estudio. Limitado en funcionalidades IA.',
        caracteristicas: [
            { texto: 'Calendario de Actividades Ilimitado', disponible: true, accent: false },
            { texto: 'Creador de Bibliografías Estándar', disponible: true, accent: false },
            { texto: '1 Resumen de Tema al Día (solo texto, máx. 500 palabras)', disponible: true, accent: false },
            { texto: '1 Explicación de Tarea al Día (solo texto, sin respuesta final)', disponible: true, accent: false },
            { texto: 'Generación de Flashcards limitada (5 al día)', disponible: true, accent: false },
            { texto: 'Análisis de documentos/fotos con IA Multimodal', disponible: false, accent: true },
            { texto: 'Experiencia sin anuncios', disponible: false, accent: false },
            { texto: 'Historial de resúmenes guardados', disponible: false, accent: false },
        ],
        cta: 'Empezar Gratis',
        variant: 'normal',
        isDestacado: false,
    },
    {
        id: 'mensual_pro',
        nombre: 'Torao PRO Mensual (Recomendado)',
        precio: '$2.99',
        periodo: '/ mes',
        descripcion: 'La opción más popular y flexible. Prueba el poder completo de Torao.',
        caracteristicas: [
            { texto: 'Acceso ILIMITADO a todas las herramientas PRO', disponible: true, accent: true },
            { texto: 'Análisis de Documentos y Fotos con IA Multimodal (PDF, JPG, PNG)', disponible: true, accent: true },
            { texto: 'Explicación de Tareas con Respuesta Final', disponible: true, accent: true },
            { texto: 'Generación de Flashcards y Resúmenes sin límites', disponible: true, accent: true },
            { texto: 'Experiencia SIN ANUNCIOS', disponible: true, accent: false },
            { texto: 'Prioridad en el procesamiento de la IA (respuestas más rápidas)', disponible: true, accent: false },
            { texto: 'Historial completo de todas las creaciones', disponible: true, accent: false },
        ],
        cta: 'Empezar Mensual',
        variant: 'accent',
        isDestacado: true,
    },
    {
        id: 'anual_pro',
        nombre: 'Torao PRO Anual',
        precio: '$23.99',
        periodo: '/ año',
        descripcion: 'El mejor valor a largo plazo. Ahorra 30% vs. el plan mensual.',
        caracteristicas: [
            { texto: 'Acceso ILIMITADO a todas las herramientas PRO', disponible: true, accent: true },
            { texto: 'Análisis de Documentos y Fotos con IA Multimodal (PDF, JPG, PNG)', disponible: true, accent: true },
            { texto: 'Explicación de Tareas con Respuesta Final', disponible: true, accent: true },
            { texto: 'Generación de Flashcards y Resúmenes sin límites', disponible: true, accent: true },
            { texto: 'Experiencia SIN ANUNCIOS', disponible: true, accent: false },
            { texto: 'Prioridad en el procesamiento de la IA (respuestas más rápidas)', disponible: true, accent: false },
            { texto: 'Historial completo de todas las creaciones', disponible: true, accent: false },
        ],
        cta: 'Suscríbete Anual (¡Solo $1.99/mes!)',
        variant: 'normal',
        isDestacado: false,
    },
];

const CheckIcon = ({ disponible, accent }) => {
    const colorClass = disponible
        ? (accent ? 'text-emerald-400' : 'text-green-500')
        : 'text-gray-600';

    const icon = disponible ? '✓' : '✗';

    return (
        <span className={`text-xl font-bold ${colorClass} w-6 h-6 flex items-center justify-center`}>
            {icon}
        </span>
    );
};

const PriceCard = ({ plan }) => (
    <div className={`
        relative p-8 rounded-3xl shadow-2xl transition duration-300 h-full flex flex-col
        ${plan.isDestacado
            ? 'bg-gray-800 border-2 border-emerald-500/80 shadow-emerald-900/50 hover:shadow-emerald-700/70'
            : 'bg-gray-900 border border-gray-700/50 hover:border-gray-600/70'}
    `}>
        {plan.isDestacado && (
            <div className="absolute top-0 right-0 -mt-3 -mr-3 px-4 py-1 bg-emerald-500 text-black font-bold text-xs rounded-full shadow-md transform rotate-3">
                MÁS POPULAR
            </div>
        )}

        <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">{plan.nombre}</h3>
            <p className="text-gray-400 text-sm">{plan.descripcion}</p>
        </div>

        <div className="flex items-baseline mb-8">
            <span className="text-5xl font-extrabold text-white">
                {plan.precio}
            </span>
            <span className="text-xl font-medium text-gray-400 ml-1">
                {plan.periodo}
            </span>
        </div>

        <ul role="list" className="flex-grow space-y-4 mb-8">
            {plan.caracteristicas.map((caracteristica, index) => (
                <li key={index} className="flex items-start">
                    <CheckIcon disponible={caracteristica.disponible} accent={caracteristica.accent} />
                    <p className={`ml-3 text-sm font-medium ${caracteristica.disponible ? 'text-gray-300' : 'text-gray-500 line-through'}`}>
                        {caracteristica.texto}
                    </p>
                </li>
            ))}
        </ul>

        <Btn variant={plan.variant}>
            {plan.cta}
        </Btn>
    </div>
);

const PlanesDePrecios = () => {
    return (
        <section className="bg-gray-950 py-12 sm:py-20" id="precios">
            <div className="max-w-7xl mx-auto px-6 sm:px-14">

                <div className="text-center mb-16">
                    <h2 className="text-xs md:text-sm font-semibold uppercase tracking-widest text-emerald-400 mb-4">
                        Elige tu Plan
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-emerald-300">
                        Precios Simples y Transparentes
                    </h3>
                </div>

                <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-8 items-stretch">
                    {planes.map((plan) => (
                        <PriceCard key={plan.id} plan={plan} />
                    ))}
                </div>

            </div>
        </section>
    );
}

export default PlanesDePrecios;