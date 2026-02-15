
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="bg-white text-obsidian overflow-hidden">
            <div className="flex flex-col lg:flex-row min-h-[600px]">

                {/* Left Side - Image */}
                <div className="w-full lg:w-1/2 relative min-h-[400px]">
                    <img
                        src="/images/train_img.png"
                        alt="Train with us"
                        className="absolute inset-0 w-full h-full object-cover grayscale"
                    />
                    <div className="absolute inset-0 bg-red-600/20 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

                    <div className="absolute bottom-12 left-12 max-w-md">
                        <h2 className="font-archivo text-5xl md:text-7xl font-black uppercase text-white leading-[0.9] mb-4">
                            Train<br />With<br />Us.
                        </h2>
                        <div className="w-20 h-2 bg-voltage" />
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="w-full lg:w-1/2 bg-white p-12 lg:p-24 flex flex-col justify-center">
                    <div className="max-w-md mx-auto w-full">
                        <h3 className="font-archivo text-3xl font-bold uppercase mb-2">Start Your Transformation</h3>
                        <p className="text-gray-500 mb-10">Fill out the form below and we'll contact you within 24 hours.</p>

                        <form className="space-y-8">
                            <div className="group relative">
                                <input
                                    type="text"
                                    required
                                    className="w-full bg-transparent border-b border-gray-300 py-3 text-lg font-medium outline-none focus:border-voltage transition-colors"
                                    placeholder="Name"
                                />
                            </div>

                            <div className="group relative">
                                <input
                                    type="email"
                                    required
                                    className="w-full bg-transparent border-b border-gray-300 py-3 text-lg font-medium outline-none focus:border-voltage transition-colors"
                                    placeholder="Email"
                                />
                            </div>

                            <div className="group relative">
                                <select
                                    className="w-full bg-transparent border-b border-gray-300 py-3 text-lg font-medium outline-none focus:border-voltage transition-colors appearance-none text-gray-500"
                                >
                                    <option value="" disabled selected>Interested In...</option>
                                    <option value="pt">Personal Training</option>
                                    <option value="group">Group Classes</option>
                                    <option value="open">Open Gym Membership</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-obsidian text-white py-5 font-bold uppercase tracking-widest hover:bg-voltage transition-colors duration-300 mt-8"
                            >
                                Get Started
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
