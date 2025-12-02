import React, { useEffect } from 'react';

const LegalModal = ({ isOpen, onClose, title, content }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative bg-gray-900 rounded-2xl shadow-2xl max-w-3xl w-full max-h-[85vh] overflow-hidden border border-emerald-500/30 animate-slideUp">
                {/* Header */}
                <div className="sticky top-0 z-10 bg-gradient-to-r from-gray-950 via-gray-900/95 to-gray-950 border-b border-emerald-500/30 px-6 py-5">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                                {title}
                            </h2>
                        </div>
                        <button
                            onClick={onClose}
                            className="group p-2 rounded-lg hover:bg-gray-800 transition-all duration-200"
                            aria-label="Cerrar modal"
                        >
                            <svg
                                className="w-6 h-6 text-gray-400 group-hover:text-emerald-400 transition-colors"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="overflow-y-auto max-h-[calc(85vh-160px)] px-6 py-6 pb-8">
                    <div className="prose prose-invert prose-emerald max-w-none">
                        {content}
                    </div>
                </div>

                {/* Footer */}
                <div className="sticky bottom-0 bg-gradient-to-t from-gray-950 via-gray-900/95 to-transparent border-t border-emerald-500/30 px-6 py-4">
                    <div className="flex justify-end">
                        <button
                            onClick={onClose}
                            className="px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-medium rounded-lg transition-all duration-200 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40"
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LegalModal;
