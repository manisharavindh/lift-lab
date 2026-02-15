
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/hero_bg.png"
                    alt="LiftLab Gym"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60 z-10" />
            </div>

            {/* Content */}
            <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="font-archivo text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none mb-6"
                >
                    Leave The Ego.<br />
                    <span className="text-white">Take The </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-voltage to-red-600">
                        Strength.
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-gray-300 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10"
                >
                    Elite training facility designed for those who demand more from their workout.
                    Precision equipment, expert coaching, and a community of dedication.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                    <button className="group relative px-8 py-4 bg-voltage text-white font-archivo font-bold text-lg uppercase tracking-widest overflow-hidden transition-all hover:bg-red-600 transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,49,49,0.5)] clip-diagonal cursor-pointer">
                        <span className="relative z-10 group-hover:tracking-[0.2em] transition-all duration-300">
                            Start Your Journey
                        </span>
                    </button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
            >
                {/* <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-voltage to-voltage/20" /> */}
                <span className="text-xs uppercase tracking-widest text-gray-500">Scroll Down</span>
            </motion.div>
        </section>
    );
};

export default Hero;
