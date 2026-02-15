
import { motion } from 'framer-motion';

const galleryImages = [
    { id: 1, src: '/images/gallery_1.png', label: 'Pro Weights' },
    { id: 2, src: '/images/gallery_2.png', label: 'Cardio Zone' },
    { id: 3, src: '/images/gallery_3.png', label: 'Locker Suite' },
    { id: 4, src: '/images/hero_bg.png', label: 'CrossFit Area' }, // Using hero as filler
];

const Gallery = () => {
    return (
        <section id="facility" className="py-20 bg-obsidian">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6 text-center md:text-left"
                >
                    <div>
                        <h2 className="font-archivo text-4xl md:text-5xl font-black uppercase mb-2">
                            The <span className="text-voltage">Facility</span>
                        </h2>
                        <p className="text-gray-400">Where the work gets done.</p>
                    </div>
                    <button className="text-sm font-bold uppercase tracking-widest text-white hover:text-voltage transition-colors border-b border-transparent hover:border-voltage pb-1 cursor-pointer">
                        View Full Gallery
                    </button>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {galleryImages.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="aspect-square bg-zinc-900 overflow-hidden mb-4 relative">
                                <img
                                    src={item.src}
                                    alt={item.label}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter group-hover:brightness-110 md:grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 group-hover:ring-voltage/50 transition-all duration-300" />
                            </div>
                            <div className="flex items-center justify-between border-t border-white/10 pt-3 group-hover:border-voltage/50 transition-colors">
                                <span className="text-sm font-mono text-gray-500 uppercase tracking-wider group-hover:text-white transition-colors">
                                    0{item.id}
                                </span>
                                <span className="text-sm font-bold uppercase tracking-wide text-voltage transition-colors">
                                    {item.label}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
