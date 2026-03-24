import { useState, useRef, useEffect } from "react";

export default function PrincipalSection() {
    const [expanded, setExpanded] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);
    const [maxH, setMaxH] = useState("6em"); // ~4 lines collapsed

    useEffect(() => {
        if (expanded && contentRef.current) {
            setMaxH(`${contentRef.current.scrollHeight}px`);
        } else {
            setMaxH("6em");
        }
    }, [expanded]);

    return (
        <section className="relative overflow-hidden py-16 md:py-24 bg-accent-text/30">
            {/* Decorative blobs using brand colors */}
            <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/4 w-125 h-125 rounded-full blur-[120px] opacity-30"
                style={{ background: "var(--color-accent-bg)" }} aria-hidden="true" />
            <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-100 h-100 rounded-full blur-[100px] opacity-20"
                style={{ background: "var(--color-accent-text)" }} aria-hidden="true" />

            <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
                {/* Section label */}
                <div className="flex items-center gap-3 mb-10">
                    <span className="inline-block w-10 h-0.75 rounded-full" style={{ background: "var(--color-accent-bg)" }} />
                    <span className="uppercase tracking-[0.2em] text-xs font-semibold text-accent-bg">
                        Principal's Message
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
                    {/* Text content */}
                    <div className="md:col-span-8 space-y-8 order-2 md:order-1">
                        {/* Opening quote icon */}
                        <svg className="w-10 h-10 opacity-20" style={{ color: "var(--color-accent-bg)" }} fill="currentColor"
                            viewBox="0 0 24 24" aria-hidden="true">
                            <path
                                d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C9.591 11.69 11.1 13.29 11.1 15.3c0 1.061-.421 2.079-1.172 2.829A4.007 4.007 0 0 1 7.1 19.3c-1.07 0-1.89-.372-2.517-1.079zM15.583 17.321C14.553 16.227 14 15 14 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.986.178 3.495 1.778 3.495 3.788 0 1.061-.421 2.079-1.172 2.829a4.007 4.007 0 0 1-2.828 1.172c-1.07 0-1.89-.372-2.517-1.079z" />
                        </svg>

                        <blockquote className="relative">
                            <p className="text-xl md:text-2xl text-accent-bg/80 italic leading-relaxed font-medium">
                                "The will to win, the desire to succeed, the urge to read your full potential – are the keys that unlock the door to success."
                            </p>
                        </blockquote>

                        <div className="space-y-5 text-text-main leading-relaxed text-[1.05rem]">
                            {/* Desktop: always full text */}
                            <p className="hidden md:block text-justify">
                                Geeta Vidya Mandir Public School, believes that the pivotal role of education lies in shaping the personality of a child into a healthy mind and a happy soul ready to take the challenges of life in a balanced and harmonising way. In the perspective of the fast changing scenario of globalization, varied knowledge enhancing activities and projects are our passport for successful and bright future. And we, at Geeta Vidya Mandir Public School, endeavor to mould the young minds in such a way that they turn out to be not only proud Indians but also global citizens. To do this, we aim to faster confidence, perseverance, tolerance and integrity, to embrace creativity. To encourage team work, to promote an open – minded and outward looking mentality so that our students are ready to make a reality positional contribution to society. Here at GVMPS, we yearn to create well-rounded individuals, where the spirit of co-operation and mutual respect exist in the students and teachers. We provide students with modern education facilities like smart classrooms, AI, different Labs, along with a plethora of activities and opportunities to nurture and augment their inherent talent and potential. We are always on our toes to blend modern with our ancient and traditions thus make our students to Human in real sense.
                            </p>

                            {/* Mobile: collapsible */}
                            <div className="md:hidden">
                                <div
                                    ref={contentRef}
                                    className="overflow-hidden transition-[max-height] duration-500 ease-in-out relative"
                                    style={{ maxHeight: maxH }}
                                >
                                    <p className="text-justify m-0">
                                        Geeta Vidya Mandir Public School, believes that the pivotal role of education lies in shaping the personality of a child into a healthy mind and a happy soul ready to take the challenges of life in a balanced and harmonising way. In the perspective of the fast changing scenario of globalization, varied knowledge enhancing activities and projects are our passport for successful and bright future. And we, at Geeta Vidya Mandir Public School, endeavor to mould the young minds in such a way that they turn out to be not only proud Indians but also global citizens. To do this, we aim to faster confidence, perseverance, tolerance and integrity, to embrace creativity. To encourage team work, to promote an open – minded and outward looking mentality so that our students are ready to make a reality positional contribution to society. Here at GVMPS, we yearn to create well-rounded individuals, where the spirit of co-operation and mutual respect exist in the students and teachers. We provide students with modern education facilities like smart classrooms, AI, different Labs, along with a plethora of activities and opportunities to nurture and augment their inherent talent and potential. We are always on our toes to blend modern with our ancient and traditions thus make our students to Human in real sense.
                                    </p>

                                    {/* Fade overlay when collapsed */}
                                    <div
                                        className={`absolute bottom-0 left-0 right-0 h-12 pointer-events-none transition-opacity duration-300 ${expanded ? "opacity-0" : "opacity-100"}`}
                                        style={{
                                            background: "linear-gradient(to top, rgba(226,220,204,0.3) 0%, transparent 100%)",
                                        }}
                                    />
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setExpanded((v) => !v)}
                                    className="mt-3 text-sm font-semibold border-none bg-transparent cursor-pointer flex items-center gap-1.5 transition-colors duration-200"
                                    style={{ color: "var(--color-accent-bg)" }}
                                >
                                    {expanded ? "Read Less" : "Read More"}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2.5}
                                        stroke="currentColor"
                                        className={`w-3.5 h-3.5 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Photo card */}
                    <div
                        className="md:col-span-4 relative group order-1 md:order-2 mx-auto md:mx-0 w-full max-w-75 md:max-w-none">
                        {/* Tilted border frame */}
                        <div
                            className="hidden md:block absolute -inset-4 rounded-[36px] rotate-3 transition-transform duration-500 group-hover:rotate-0 border-2 border-accent-bg/15" />

                        <div
                            className="relative h-75 md:h-95 w-full z-10 overflow-hidden rounded-[28px] md:rounded-4xl shadow-2xl">
                            <img src="/Principal.webp" alt="Ms. Shaifalika"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 33vw" />

                            {/* Gradient overlay with brand color */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 pt-20" style={{
                                background: "linear-gradient(to top, var(--color-accent-bg) 0%, rgba(25,45,69,0.6) 60%, transparent 100%)"
                                ,
                            }}>
                                <h3 className="text-accent-text text-xl font-bold leading-tight m-0">
                                    Ms. Shaifalika
                                </h3>
                                <p className="text-accent-text/70 text-sm font-semibold mt-1 m-0">
                                    Principal
                                </p>
                            </div>
                        </div>

                        {/* Decorative quote mark */}
                        <div className="absolute -bottom-5 -right-5 hidden md:block z-20">
                            <svg className="w-20 h-20 opacity-10" style={{ color: "var(--color-accent-bg)" }}
                                fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C9.591 11.69 11.1 13.29 11.1 15.3c0 1.061-.421 2.079-1.172 2.829A4.007 4.007 0 0 1 7.1 19.3c-1.07 0-1.89-.372-2.517-1.079zM15.583 17.321C14.553 16.227 14 15 14 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.986.178 3.495 1.778 3.495 3.788 0 1.061-.421 2.079-1.172 2.829a4.007 4.007 0 0 1-2.828 1.172c-1.07 0-1.89-.372-2.517-1.079z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}