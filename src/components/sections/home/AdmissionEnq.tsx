import React, { useState, useRef, useEffect } from 'react'

const classOptions = [
    { value: 'nursery', label: 'Nursery' },
    { value: 'kg', label: 'KG' },
    { value: '1', label: 'Class 1' },
    { value: '2', label: 'Class 2' },
    { value: '3', label: 'Class 3' },
    { value: '4', label: 'Class 4' },
    { value: '5', label: 'Class 5' },
    { value: '6', label: 'Class 6' },
    { value: '7', label: 'Class 7' },
    { value: '8', label: 'Class 8' },
    { value: '9', label: 'Class 9' },
    { value: '10', label: 'Class 10' },
    { value: '11', label: 'Class 11' },
    { value: '12', label: 'Class 12' },
];

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

const AdmissionEnq = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState<{ value: string; label: string } | null>(null);
    const [studentName, setStudentName] = useState('');
    const [parentName, setParentName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [statusMessage, setStatusMessage] = useState('');
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!selected) {
            setSubmitStatus('error');
            setStatusMessage('Please select a class.');
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('idle');
        setStatusMessage('');

        const formData = new FormData();
        formData.append('applicant_name', studentName);
        formData.append('father_name', parentName);
        formData.append('contact_number', phone);
        formData.append('email', email);
        formData.append('class', selected.label);
        formData.append('api_key', API_KEY);

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                setSubmitStatus('success');
                setStatusMessage('Enquiry submitted successfully!');
                // Reset form
                setStudentName('');
                setParentName('');
                setPhone('');
                setEmail('');
                setSelected(null);
            } else {
                setSubmitStatus('error');
                setStatusMessage('Something went wrong. Please try again.');
            }
        } catch {
            setSubmitStatus('error');
            setStatusMessage('Network error. Please check your connection.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="relative group">
            {/* Subtle background glow */}

            <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl">
                {/* Decorative top highlight */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-white/50 to-transparent rounded-t-2xl overflow-hidden" />

                <div className="mb-8 text-center">
                    <h3 className="text-3xl font-bold text-accent-text mb-2 tracking-tight">
                        Admission Enquiry
                    </h3>
                    <p className="text-accent-text/70 text-sm font-medium">
                        Take the first step towards excellence
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Student Name */}
                    <div className="relative group/input">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-accent-text/50 group-focus-within/input:text-accent-text transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            id="studentName"
                            placeholder="Student Name"
                            required
                            value={studentName}
                            onChange={(e) => setStudentName(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-accent-text placeholder:text-accent-text/40 focus:outline-none focus:ring-2 focus:ring-white/30 focus:bg-white/10 transition-all duration-300 peer"
                        />
                        <div className="absolute inset-0 rounded-xl border border-white/0 peer-focus:border-white/20 pointer-events-none transition-colors duration-300" />
                    </div>

                    {/* Parent Name */}
                    <div className="relative group/input">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-accent-text/50 group-focus-within/input:text-accent-text transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            id="parentName"
                            placeholder="Parent Name"
                            required
                            value={parentName}
                            onChange={(e) => setParentName(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-accent-text placeholder:text-accent-text/40 focus:outline-none focus:ring-2 focus:ring-white/30 focus:bg-white/10 transition-all duration-300 peer"
                        />
                        <div className="absolute inset-0 rounded-xl border border-white/0 peer-focus:border-white/20 pointer-events-none transition-colors duration-300" />
                    </div>

                    {/* Phone Number */}
                    <div className="relative group/input">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-accent-text/50 group-focus-within/input:text-accent-text transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <input
                            type="tel"
                            id="phone"
                            placeholder="Phone Number"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-accent-text placeholder:text-accent-text/40 focus:outline-none focus:ring-2 focus:ring-white/30 focus:bg-white/10 transition-all duration-300 peer"
                        />
                        <div className="absolute inset-0 rounded-xl border border-white/0 peer-focus:border-white/20 pointer-events-none transition-colors duration-300" />
                    </div>

                    <div className="relative group/input">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-accent-text/50 group-focus-within/input:text-accent-text transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path d="M3 4a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2H3zm1.06 2.59a.75.75 0 011.06-.02L10 10.84l4.88-4.27a.75.75 0 111.04 1.08l-5.4 4.72a.75.75 0 01-1.04 0l-5.4-4.72a.75.75 0 01-.02-1.06z" />
                            </svg>
                        </div>
                        <input
                            type="email"
                            id="email"
                            placeholder="Email Address"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-accent-text placeholder:text-accent-text/40 focus:outline-none focus:ring-2 focus:ring-white/30 focus:bg-white/10 transition-all duration-300 peer"
                        />
                        <div className="absolute inset-0 rounded-xl border border-white/0 peer-focus:border-white/20 pointer-events-none transition-colors duration-300" />
                    </div>

                    {/* Class Applied For — Custom Dropdown */}
                    <div className="relative" ref={dropdownRef}>
                        {/* Hidden input for form validation */}
                        <input
                            type="text"
                            id="class"
                            required
                            value={selected?.value || ''}
                            onChange={() => {}}
                            className="sr-only"
                            tabIndex={-1}
                            aria-hidden="true"
                        />

                        {/* Dropdown trigger button */}
                        <button
                            type="button"
                            onClick={() => setIsOpen((prev) => !prev)}
                            className={`
                                w-full bg-white/5 border rounded-xl pl-11 pr-10 py-3.5 text-left
                                focus:outline-none focus:ring-2 focus:ring-white/30 focus:bg-white/10
                                transition-all duration-300 cursor-pointer
                                ${isOpen ? 'border-white/30 bg-white/10 ring-2 ring-white/20' : 'border-white/10'}
                                ${selected ? 'text-accent-text' : 'text-accent-text/40'}
                            `}
                        >
                            {selected ? selected.label : 'Select Class'}
                        </button>

                        {/* Icon */}
                        <div className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors duration-300 ${isOpen ? 'text-accent-text' : 'text-accent-text/50'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 2H4z" />
                            </svg>
                        </div>

                        {/* Custom dropdown arrow with rotation */}
                        <div className={`absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none transition-all duration-300 ${isOpen ? 'text-accent-text' : 'text-accent-text/50'}`}>
                            <svg
                                className={`w-5 h-5 fill-current transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                                viewBox="0 0 20 20"
                            >
                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                            </svg>
                        </div>

                        {/* Dropdown panel */}
                        <div
                            className={`
                                absolute z-50 left-0 right-0 mt-2 origin-top
                                transition-all duration-300 ease-out
                                ${isOpen
                                    ? 'opacity-100 scale-y-100 translate-y-0 pointer-events-auto'
                                    : 'opacity-0 scale-y-95 -translate-y-2 pointer-events-none'
                                }
                            `}
                        >
                            <div className="bg-gray-900/95 backdrop-blur-2xl border border-white/15 rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden">
                                {/* Decorative top bar */}
                                <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                                <div className="max-h-56 overflow-y-auto py-1.5 custom-scrollbar">
                                    {classOptions.map((option, index) => (
                                        <button
                                            key={option.value}
                                            type="button"
                                            onClick={() => {
                                                setSelected(option);
                                                setIsOpen(false);
                                            }}
                                            className={`
                                                w-full text-left px-4 py-2.5 flex items-center gap-3
                                                transition-all duration-200 cursor-pointer
                                                ${selected?.value === option.value
                                                    ? 'bg-white/15 text-accent-text'
                                                    : 'text-accent-text/70 hover:bg-white/10 hover:text-accent-text'
                                                }
                                            `}
                                            style={{ animationDelay: `${index * 20}ms` }}
                                        >
                                            {/* Selection indicator */}
                                            <span className={`
                                                inline-flex items-center justify-center w-5 h-5 rounded-full border transition-all duration-200 shrink-0
                                                ${selected?.value === option.value
                                                    ? 'border-white/60 bg-white/20'
                                                    : 'border-white/20 bg-transparent'
                                                }
                                            `}>
                                                {selected?.value === option.value && (
                                                    <svg className="w-3 h-3 text-accent-text" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                )}
                                            </span>
                                            <span className="text-sm font-medium">{option.label}</span>
                                        </button>
                                    ))}
                                </div>

                                {/* Decorative bottom bar */}
                                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`relative w-full font-bold rounded-xl px-4 py-4 mt-4 overflow-hidden group/btn transition-all duration-300 active:translate-y-0 ${
                            isSubmitting
                                ? 'bg-accent-text/70 text-accent-bg cursor-not-allowed'
                                : 'bg-accent-text text-accent-bg hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:-translate-y-0.5'
                        }`}
                    >
                        {/* Button hover effect background */}
                        <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-10 transition-opacity duration-300" />

                        <div className="relative flex justify-center items-center gap-2">
                            {isSubmitting ? (
                                <>
                                    <svg className="w-5 h-5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                    </svg>
                                    <span className="tracking-wide text-[1.05rem]">Submitting...</span>
                                </>
                            ) : (
                                <>
                                    <span className="tracking-wide text-[1.05rem]">Submit Enquiry</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="w-5 h-5 transform group-hover/btn:translate-x-1.5 transition-transform duration-300"
                                    >
                                        <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                                    </svg>
                                </>
                            )}
                        </div>
                    </button>

                    {/* Status message */}
                    {submitStatus !== 'idle' && (
                        <div className={`mt-3 text-center text-sm font-medium px-4 py-2.5 rounded-xl transition-all duration-300 ${
                            submitStatus === 'success'
                                ? 'text-green-300 bg-green-500/10 border border-green-500/20'
                                : 'text-red-300 bg-red-500/10 border border-red-500/20'
                        }`}>
                            {submitStatus === 'success' ? (
                                <span className="flex items-center justify-center gap-2">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    {statusMessage}
                                </span>
                            ) : (
                                <span className="flex items-center justify-center gap-2">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                    {statusMessage}
                                </span>
                            )}
                        </div>
                    )}
                </form>
            </div>
        </div>
    )
}

export default AdmissionEnq
