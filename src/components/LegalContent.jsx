import React from 'react';
import AnimatedSection from './AnimatedSection';

export const legalContent = {
    'Privacidad': (
        <div className="space-y-6 text-gray-300">
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4">
                <p className="text-sm text-emerald-300">
                    Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
            </div>

            <section>
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    Introducción
                </h3>
                <p className="leading-relaxed">
                    En Torao AI, nos comprometemos a proteger tu privacidad y tus datos personales. Esta política describe cómo recopilamos, usamos y protegemos tu información cuando utilizas nuestra plataforma de estudio impulsada por Inteligencia Artificial.
                </p>
            </section>

            <section>
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    Información que Recopilamos
                </h3>
                <ul className="space-y-2 list-disc list-inside">
                    <li>Información de cuenta (nombre, correo electrónico, contraseña)</li>
                    <li>Datos de uso de la plataforma</li>
                    <li>Cookies y tecnologías similares para mejorar tu experiencia</li>
                </ul>
            </section>

            <section>
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    Cómo Usamos tu Información
                </h3>
                <ul className="space-y-2 list-disc list-inside">
                    <li>Personalizar tu experiencia de aprendizaje</li>
                    <li>Enviar actualizaciones y comunicaciones importantes</li>
                    <li>Analizar el uso de la plataforma para mejoras continuas</li>
                    <li>Garantizar la seguridad y prevenir fraudes</li>
                </ul>
            </section>

            <section>
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    Tus Derechos
                </h3>
                <p className="leading-relaxed mb-2">
                    Tienes derecho a:
                </p>
                <ul className="space-y-2 list-disc list-inside">
                    <li>Acceder a tus datos</li>
                    <li>Rectificar información incorrecta</li>
                    <li>Solicitar la eliminación de tus datos</li>
                </ul>
            </section>

            <section>
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    Contacto
                </h3>
                <p className="leading-relaxed">
                    Para cualquier pregunta sobre esta política de privacidad, contáctanos en{' '}
                    <a href="mailto:privacy@torao.ai" className="text-emerald-400 hover:text-emerald-300 underline">
                        privacy@torao.ai
                    </a>
                </p>
            </section>
        </div>
    ),

    'Términos de Servicio': (
        <div className="space-y-6 text-gray-300">
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4">
                <p className="text-sm text-emerald-300">
                    Última actualización: 1 de diciembre de 2025
                </p>
            </div>

            <section>
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    Aceptación de los Términos
                </h3>
                <p className="leading-relaxed">
                    Al acceder y utilizar Torao AI, aceptas estar sujeto a estos Términos de Servicio y todas las leyes y regulaciones aplicables. Si no estás de acuerdo con alguno de estos términos, no utilices nuestro servicio.
                </p>
            </section>

            <section>
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    Uso del Servicio
                </h3>
                <p className="leading-relaxed mb-2">
                    Te comprometes a:
                </p>
                <ul className="space-y-2 list-disc list-inside">
                    <li>Usar la plataforma solo con fines educativos legítimos</li>
                    <li>No compartir tu cuenta con terceros (para evitar abusos y fraudes)</li>
                    <li>Mantener la confidencialidad de tus credenciales (cuentas, contraseñas)</li>
                    <li>No intentar acceder a áreas restringidas del sistema</li>
                    <li>No usar la plataforma para actividades ilegales o no autorizadas</li>
                    <li>Respetar los derechos de propiedad intelectual</li>
                </ul>
            </section>

            <section>
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    Propiedad Intelectual
                </h3>
                <p className="leading-relaxed">
                    Todo el contenido, características y funcionalidad de Torao AI son propiedad exclusiva de Torao AI y están protegidos por leyes internacionales de derechos de autor, marcas registradas y otras leyes de propiedad intelectual.
                </p>
            </section>

            <section>
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    Limitación de Responsabilidad
                </h3>
                <p className="leading-relaxed">
                    Torao AI asegura una excelente experiencia a cada usuario, No nos hacemos responsables sobre los datos que son ingresados a esta plataforma, usamos una Google Gemini 100% personalizada para esta plataforma. Por lo que cualquier responsabilidad en datos ingresados se cobra a Google Gemini.
                </p>
            </section>

            <section>
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    Modificaciones
                </h3>
                <p className="leading-relaxed">
                    Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento, Asi como los precios que pueden cambiar a futuro segun la demanda de esta plataforma. Te notificaremos sobre cambios significativos y tu uso continuado del servicio constituye aceptación de los términos modificados, si en caso ya pagaste un mes y al siguiente se le aumenta, tu precio seguira siendo el mismo, solo aplicara a nuevos usuarios.
                </p>
            </section>

            <section>
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    Contacto
                </h3>
                <p className="leading-relaxed">
                    Para preguntas sobre estos términos, contáctanos en{' '}
                    <a href="mailto:legal@torao.ai" className="text-emerald-400 hover:text-emerald-300 underline">
                        legal@torao.ai
                    </a>
                </p>
            </section>
        </div>
    ),

    'Cookies': (
        <div className="space-y-6 text-gray-300">
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4">
                <p className="text-sm text-emerald-300">
                    Última actualización: 1 de diciembre de 2025
                </p>
            </div>

            <section>
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    ¿Qué son las Cookies?
                </h3>
                <p className="leading-relaxed">
                    Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas nuestro sitio web. Nos ayudan a mejorar tu experiencia, recordar tus preferencias y analizar cómo utilizas nuestra plataforma.
                </p>
            </section>

            <section>
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    Gestión de Cookies
                </h3>
                <p className="leading-relaxed mb-2">
                    Puedes controlar y gestionar las cookies de varias maneras:
                </p>
                <ul className="space-y-2 list-disc list-inside">
                    <li>Configurar tu navegador para rechazar todas las cookies</li>
                    <li>Eliminar las cookies existentes en tu navegador</li>
                    <li>Usar el modo de navegación privada/incógnito</li>
                    <li>Ajustar tus preferencias en nuestra configuración de cookies</li>
                </ul>
                <p className="leading-relaxed mt-3 text-sm text-yellow-400">
                    Nota: Bloquear ciertas cookies puede afectar la funcionalidad de la plataforma.
                </p>
            </section>

            <section>
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    Cookies de Terceros
                </h3>
                <p className="leading-relaxed">
                    Utilizamos servicios de terceros como Google Analytics y servicios de autenticación que pueden establecer sus propias cookies. Estas cookies están sujetas a las políticas de privacidad de los respectivos terceros.
                </p>
            </section>

            <section>
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    Contacto
                </h3>
                <p className="leading-relaxed">
                    Para más información sobre nuestro uso de cookies, contáctanos en{' '}
                    <a href="mailto:cookies@torao.ai" className="text-emerald-400 hover:text-emerald-300 underline">
                        cookies@torao.ai
                    </a>
                </p>
            </section>
        </div>
    ),

    'Seguridad': (
        <div className="space-y-6 text-gray-300">
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4">
                <p className="text-sm text-emerald-300">
                    Última actualización: 1 de diciembre de 2025
                </p>
            </div>

            <section>
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    Nuestro Compromiso con la Seguridad
                </h3>
                <p className="leading-relaxed">
                    En Torao AI, la seguridad de tus datos es nuestra máxima prioridad. Implementamos medidas de seguridad de nivel empresarial para proteger tu información personal y académica.
                </p>
            </section>

            <section>
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    Medidas de Seguridad Implementadas
                </h3>

                <div className="space-y-4">
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                        <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                            Encriptación de Datos
                        </h4>
                        <p className="text-sm">
                            Utilizamos encriptación SSL/TLS de 256 bits para proteger todos los datos en tránsito. Los datos sensibles se almacenan encriptados en nuestras bases de datos.
                        </p>
                    </div>
                </div>
            </section>

            <section>
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    Cumplimiento y Certificaciones
                </h3>
                <ul className="space-y-2 list-disc list-inside">
                    <li>Cumplimiento con GDPR (Reglamento General de Protección de Datos)</li>
                    <li>Cumplimiento con CCPA (Ley de Privacidad del Consumidor de California)</li>
                    <li>Auditorías de seguridad periódicas por terceros independientes</li>
                    <li>Pruebas de penetración regulares</li>
                </ul>
            </section>

            <section>
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    Buenas Prácticas para Usuarios
                </h3>
                <p className="leading-relaxed mb-2">
                    Te recomendamos seguir estas prácticas para mantener tu cuenta segura:
                </p>
                <ul className="space-y-2 list-disc list-inside">
                    <li>Usa una contraseña única y fuerte</li>
                    <li>Habilita la autenticación de dos factores (2FA)</li>
                    <li>No compartas tus credenciales con nadie</li>
                    <li>Cierra sesión en dispositivos compartidos</li>
                    <li>Mantén tu software y navegador actualizados</li>
                    <li>Reporta cualquier actividad sospechosa inmediatamente</li>
                </ul>
            </section>

            <section>
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    Reporte de Vulnerabilidades
                </h3>
                <p className="leading-relaxed">
                    Si descubres una vulnerabilidad de seguridad, por favor repórtala de manera responsable a{' '}
                    <a href="mailto:security@torao.ai" className="text-emerald-400 hover:text-emerald-300 underline">
                        security@torao.ai
                    </a>
                    . Agradecemos a la comunidad de seguridad por ayudarnos a mantener Torao AI seguro.
                </p>
            </section>

            <section>
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    Contacto
                </h3>
                <p className="leading-relaxed">
                    Para preguntas sobre seguridad, contáctanos en{' '}
                    <a href="mailto:security@torao.ai" className="text-emerald-400 hover:text-emerald-300 underline">
                        security@torao.ai
                    </a>
                </p>
            </section>
        </div>
    )
};
