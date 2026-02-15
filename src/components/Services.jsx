
import { motion } from 'framer-motion';

const services = [
    {
        title: "Personal Training",
        subtitle: "One-on-One Coaching",
        image: "/images/service_pt.png",
        colSpan: "md:col-span-2",
    },
    {
        title: "Group Classes",
        subtitle: "High Intensity",
        image: "/images/service_group.png",
        colSpan: "md:col-span-1",
    },
    {
        title: "Open Gym",
        subtitle: "24/7 Access",
        image: "/images/gallery_1.png",
        colSpan: "md:col-span-1",
    },
    {
        title: "Recovery",
        subtitle: "Sauna & Ice Bath",
        image: "/images/gallery_3.png",
        colSpan: "md:col-span-2",
    },
];

const Services = () => {
    return (
        <section id="training" className="py-20 bg-zinc-950">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="font-archivo text-4xl md:text-5xl font-black uppercase mb-4">
                        Our <span className="text-voltage">Services</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Comprehensive training solutions designed to push your limits.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative group overflow-hidden rounded-lg cursor-pointer ${service.colSpan}`}
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = '/images/hero_bg.png'; // Fallback
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:via-black/60 transition-all duration-300" />
                            </div>

                            {/* Content Overlay - Modified to include semi-transparent background */}
                            <div className="absolute bottom-0 left-0 w-full p-6 z-10">
                                <div className="bg-black/40 backdrop-blur-sm border-l-4 border-voltage p-4 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                    <h3 className="font-archivo text-2xl font-bold uppercase text-white mb-1">
                                        {service.title}
                                    </h3>
                                    <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                                        <p className="text-gray-300 font-medium tracking-wide text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                                            {service.subtitle}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
