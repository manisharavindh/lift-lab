
import { motion } from 'framer-motion';

const SectionAlternate = ({ title, description, image, reversed = false, id }) => {
    return (
        <section id={id} className="py-20 md:py-32 bg-obsidian overflow-hidden">
            <div className="container mx-auto px-6">
                <div className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-20`}>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: reversed ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 relative z-10"
                    >
                        <div className={`flex items-start ${reversed ? 'flex-row-reverse text-right' : 'flex-row'} gap-6`}>
                            {/* Vertical Gradient Divider */}
                            <div className="hidden md:block w-1.5 h-64 bg-gradient-to-b from-voltage via-red-900/50 to-transparent rounded-full flex-shrink-0" />

                            <div>
                                <h2 className="font-archivo text-4xl md:text-6xl font-black uppercase mb-6 leading-tight">
                                    {title}
                                </h2>
                                <div className={`h-1 w-20 bg-voltage mb-8 ${reversed ? 'ml-auto' : ''} md:hidden`} />

                                <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
                                    {description}
                                </p>
                                <div className={`text-voltage font-bold tracking-widest uppercase text-sm border-b border-voltage inline-block pb-1 cursor-pointer hover:text-white hover:border-white transition-colors`}>
                                    Learn More
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Image Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 relative"
                    >
                        <div className="relative group overflow-hidden bg-zinc-900 rounded-lg">
                            {/* Gradient Fade Overlay - Horizontal with Red Hint */}
                            <div
                                className={`absolute inset-0 z-10 pointer-events-none opacity-80 md:opacity-100 bg-gradient-to-r ${reversed
                                        ? 'from-transparent via-transparent to-obsidian'
                                        : 'from-obsidian via-transparent to-transparent'
                                    }`}
                            />

                            {/* Subtle Red Overlay on the text side */}
                            <div
                                className={`absolute inset-0 z-10 pointer-events-none opacity-30 mix-blend-overlay bg-gradient-to-r ${reversed
                                        ? 'from-transparent via-voltage/50 to-voltage'
                                        : 'from-voltage via-voltage/50 to-transparent'
                                    }`}
                            />

                            <img
                                src={image}
                                alt={title}
                                className="w-full h-[500px] object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                            />

                            {/* Decorative Frame */}
                            <div className={`absolute top-4 ${reversed ? 'left-4' : 'right-4'} bottom-4 ${reversed ? 'right-4' : 'left-4'} border border-white/10 z-20 pointer-events-none`} />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default SectionAlternate;
