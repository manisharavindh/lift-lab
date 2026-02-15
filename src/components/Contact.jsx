import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Contact = () => {
    const [openDropdown, setOpenDropdown] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const dropdownRef = useRef(null);
    const [dropdownPosition, setDropdownPosition] = useState('bottom');

    const toggleDropdown = () => {
        if (!openDropdown && dropdownRef.current) {
            const rect = dropdownRef.current.getBoundingClientRect();
            const spaceBelow = window.innerHeight - rect.bottom;
            // If space below is less than 250px, open upwards
            if (spaceBelow < 250) {
                setDropdownPosition('top');
            } else {
                setDropdownPosition('bottom');
            }
        }
        setOpenDropdown(!openDropdown);
    };

    const handlePhoneChange = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            setPhoneNumber(value);
        }
    };

    const plans = [
        { label: "Essential Membership (₹2,999)", value: "essential" },
        { label: "Performance Membership (₹5,999)", value: "performance" },
        { label: "Elite Membership (₹9,999)", value: "elite" },
        { label: "I Have Questions First", value: "other" }
    ];

    return (
        <section id="contact" className="bg-obsidian text-white relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-voltage to-transparent opacity-50" />

            <div className="flex flex-col lg:flex-row min-h-[600px]">

                {/* Left Side - Image */}
                <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-full">
                    <img
                        src="/images/train_img.png"
                        alt="Train with us"
                        className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 brightness-75"
                    />
                    <div className="absolute inset-0 bg-voltage/10 mix-blend-overlay" />
                    <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-obsidian via-obsidian/50 to-transparent" />

                    <div className="absolute bottom-12 left-12 max-w-md z-10">
                        <h2 className="font-archivo text-5xl md:text-7xl font-black uppercase text-white leading-[0.9] mb-4">
                            Commit<br />To The<br /><span className="text-voltage">Process.</span>
                        </h2>
                        <div className="w-20 h-2 bg-white" />
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="w-full lg:w-1/2 bg-obsidian p-12 lg:p-24 flex flex-col justify-center relative">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-900 to-obsidian -z-10" />

                    <div className="max-w-md mx-auto w-full">
                        <h3 className="font-archivo text-3xl font-bold uppercase mb-2">Ready to Join?</h3>
                        <p className="text-gray-400 mb-10">We limit our membership to ensure overcrowding never happens. Secure your spot today.</p>

                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="group relative">
                                    <input
                                        type="text"
                                        required
                                        className="w-full bg-transparent border-b border-zinc-700 py-3 text-lg font-medium outline-none focus:border-voltage text-white placeholder-zinc-600 transition-colors"
                                        placeholder="First Name"
                                    />
                                </div>
                                <div className="group relative">
                                    <input
                                        type="text"
                                        required
                                        className="w-full bg-transparent border-b border-zinc-700 py-3 text-lg font-medium outline-none focus:border-voltage text-white placeholder-zinc-600 transition-colors"
                                        placeholder="Last Name"
                                    />
                                </div>
                            </div>

                            <div className="group relative">
                                <input
                                    type="email"
                                    required
                                    className="w-full bg-transparent border-b border-zinc-700 py-3 text-lg font-medium outline-none focus:border-voltage text-white placeholder-zinc-600 transition-colors"
                                    placeholder="Email Address"
                                />
                            </div>

                            <div className="group relative">
                                <input
                                    type="text"
                                    inputMode="numeric"
                                    required
                                    value={phoneNumber}
                                    onChange={handlePhoneChange}
                                    className="w-full bg-transparent border-b border-zinc-700 py-3 text-lg font-medium outline-none focus:border-voltage text-white placeholder-zinc-600 transition-colors"
                                    placeholder="Phone Number"
                                />
                            </div>

                            {/* Custom Dropdown */}
                            <div className="group relative" ref={dropdownRef}>
                                <div
                                    className="w-full bg-transparent border-b border-zinc-700 py-3 text-lg font-medium flex justify-between items-center cursor-pointer group-hover:border-voltage transition-colors"
                                    onClick={toggleDropdown}
                                >
                                    <span className={selectedPlan ? "text-white" : "text-zinc-600"}>
                                        {selectedPlan ? plans.find(p => p.value === selectedPlan)?.label : "Select Your Plan..."}
                                    </span>
                                    <ChevronDown size={20} className={`text-zinc-500 transition-transform duration-300 ${openDropdown ? 'rotate-180' : ''}`} />
                                </div>

                                <AnimatePresence>
                                    {openDropdown && (
                                        <motion.div
                                            initial={{ opacity: 0, y: dropdownPosition === 'bottom' ? -10 : 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: dropdownPosition === 'bottom' ? -10 : 10 }}
                                            transition={{ duration: 0.2 }}
                                            className={`absolute left-0 w-full bg-zinc-900 border border-zinc-800 rounded-lg shadow-xl z-50 overflow-hidden ${dropdownPosition === 'bottom' ? 'top-full mt-2' : 'bottom-full mb-2'
                                                }`}
                                        >
                                            {plans.map((plan) => (
                                                <div
                                                    key={plan.value}
                                                    className="px-4 py-3 hover:bg-zinc-800 cursor-pointer text-sm text-gray-300 hover:text-white transition-colors border-b border-white/5 last:border-none"
                                                    onClick={() => {
                                                        setSelectedPlan(plan.value);
                                                        setOpenDropdown(false);
                                                    }}
                                                >
                                                    {plan.label}
                                                </div>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-white text-obsidian py-5 font-bold uppercase tracking-widest hover:bg-voltage hover:text-white transition-all duration-300 mt-8 transform hover:skew-x-[-10deg] cursor-pointer"
                            >
                                Submit Inquiry
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
