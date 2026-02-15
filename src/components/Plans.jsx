
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const plans = [
    {
        name: "Essential",
        price: "2,999",
        description: "Build the base. Full access to the facility and essential amenities.",
        features: [
            { text: "Open Gym Access (24/7)", included: true },
            { text: "Locker Room Access", included: true },
            { text: "1 Guest Pass / Month", included: true },
            { text: "Group Classes", included: false },
            { text: "Recovery Suite", included: false },
            { text: "Personal Training", included: false },
        ],
        highlight: false,
    },
    {
        name: "Performance",
        price: "5,999",
        description: "Push the limits. Designed for the dedicated athlete.",
        features: [
            { text: "Open Gym Access (24/7)", included: true },
            { text: "Locker Room Access", included: true },
            { text: "Unlimited Guest Passes", included: true },
            { text: "Unlimited Group Classes", included: true },
            { text: "Recovery Suite (Sauna/Ice)", included: true },
            { text: "Personal Training", included: false },
        ],
        highlight: true,
        tag: "Most Popular"
    },
    {
        name: "Elite",
        price: "9,999",
        description: "Defy gravity. The ultimate package for total transformation.",
        features: [
            { text: "Open Gym Access (24/7)", included: true },
            { text: "Locker Room Access", included: true },
            { text: "Unlimited Guest Passes", included: true },
            { text: "Unlimited Group Classes", included: true },
            { text: "Recovery Suite (Sauna/Ice)", included: true },
            { text: "4x Personal Training Sessions", included: true },
            { text: "Nutrition & Programming", included: true },
        ],
        highlight: false,
    },
];

const Plans = () => {
    return (
        <section id="plans" className="py-24 bg-zinc-950 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-voltage/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-voltage/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-archivo text-4xl md:text-5xl font-black uppercase mb-4">
                        Membership <span className="text-voltage">Plans</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Choose your path. No contracts, no hidden fees. Just results.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-start">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative flex flex-col p-8 rounded-xl border transition-all duration-300 ${plan.highlight
                                ? 'bg-zinc-900/80 border-voltage shadow-[0_0_30px_rgba(255,49,49,0.15)] md:-mt-8 md:mb-8'
                                : 'bg-obsidian border-zinc-800 hover:border-zinc-700'
                                }`}
                        >
                            {plan.tag && (
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-voltage text-white text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-full shadow-lg">
                                    {plan.tag}
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="font-archivo text-2xl font-bold uppercase text-white mb-2">{plan.name}</h3>
                                <p className="text-gray-400 text-sm h-10">{plan.description}</p>
                            </div>

                            <div className="mb-8 flex items-end">
                                <span className="text-5xl font-archivo font-black text-white">₹{plan.price}</span>
                                <span className="text-gray-500 ml-2 mb-2 font-medium">/ month</span>
                            </div>

                            <div className="flex-grow space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        {feature.included ? (
                                            <div className="p-0.5 bg-voltage/20 rounded-full mt-0.5">
                                                <Check size={14} className="text-voltage" />
                                            </div>
                                        ) : (
                                            <div className="p-0.5 bg-zinc-800 rounded-full mt-0.5">
                                                <X size={14} className="text-zinc-600" />
                                            </div>
                                        )}
                                        <span className={`text-sm ${feature.included ? 'text-gray-200' : 'text-zinc-600 line-through'}`}>
                                            {feature.text}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <button
                                className={`w-full py-4 font-bold uppercase tracking-widest text-sm transition-all duration-300 transform hover:skew-x-[-10deg] ${plan.highlight
                                    ? 'bg-voltage text-white hover:bg-red-600 shadow-lg'
                                    : 'bg-white text-obsidian hover:bg-gray-200'
                                    }`}
                            >
                                Choose {plan.name}
                            </button>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-zinc-500 text-sm">
                        * All plans include a one-time initiation fee of ₹2,500. Cancel anytime with 30 days notice.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Plans;
