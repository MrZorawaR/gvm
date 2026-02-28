import { useState } from 'react';
import FeeStructureModal from './FeeStructureModal';

export default function DownloadFeeBtn() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button
                onClick={() => setShowModal(true)}
                className="group relative inline-flex items-center gap-2.5 bg-accent-text text-accent-bg font-semibold rounded-xl px-6 py-3.5 overflow-hidden transition-all duration-300 hover:shadow-[0_0_35px_rgba(226,220,204,0.25)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-15 transition-opacity duration-300" />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 relative z-10 transform group-hover:translate-y-0.5 transition-transform duration-300">
                    <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
                    <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
                </svg>
                <span className="relative z-10 tracking-wide">Download Fee Structure</span>
            </button>

            <FeeStructureModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
            />
        </>
    );
}
