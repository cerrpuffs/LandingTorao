import React, { useState, useEffect } from 'react';
import Menu from "./Menu";
import Btn from "../btns/btnsMenu";

const Hero = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
        backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(16, 185, 129, 0.15) 0%, transparent 50%)`,
    };

    return (
        <div className="relative min-h-screen bg-gray-950 text-white overflow-hidden px-0 md:px-5">

            <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={circleGradientStyle}
            ></div>

            <div className="absolute inset-0 z-0 opacity-40">
                <div className="w-full h-full bg-radial-gradient from-green-900 to-transparent"></div>
            </div>

            <Menu />

            <main className="relative z-10 flex flex-col items-center justify-center -mt-14 pt-24 min-h-screen max-w-7xl mx-auto px-6 text-center">

                <div className="max-w-3xl mx-auto pt-10 pb-10">

                    <div className="text-center justify-center flex flex-col items-center">
                        <h1 className="text-6xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 tracking-tight leading-tight animate-fade-in-up">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                                Aumenta tu productividad
                            </span>
                        </h1>

                        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-200">
                            Domina tu estudio. Genera apuntes, resúmenes y flashcards al instante para transformar tu forma de aprender y disparar tus notas.
                        </p>

                        <div className="flex gap-4 justify-center animate-fade-in-up animation-delay-400">
                            <Btn variant="accent">Empezar Ahora</Btn>
                            <Btn variant="normal">Contactar Ventas</Btn>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}

export default Hero;