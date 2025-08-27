import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const FinancialPlan = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
    };

    return (
        <section
            className="relative text-white py-16 overflow-hidden"
            style={{
                backgroundImage: `url('/bgImage.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/80"></div>

            {/* Content */}
            <div className="relative container mx-auto px-12 z-10">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

                    {/* Image Section */}
                    <div className="hidden lg:block lg:w-1/2 relative">
                        <div className="relative -mt-8 lg:-mt-22">
                            <img
                                src="/Frame 11.svg"
                                alt="Financial Advisor"
                                className="w-full max-w-sm mx-auto h-auto object-cover rounded-lg relative z-20"
                            />
                            {/* <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl -z-10 blur-xl"></div> */}
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="lg:w-[35%] w-full">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 lg:mb-8 text-center lg:text-left">
                            <span className="text-orange-500">Get A Financial Plan</span>
                        </h2>

                        <div className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-slate-800/70 rounded-lg border border-slate-600 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all duration-200"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-slate-800/70 rounded-lg border border-slate-600 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all duration-200"
                                />
                            </div>
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 bg-slate-800/70 rounded-lg border border-slate-600 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all duration-200"
                            />
                            <select
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 bg-slate-800/70 rounded-lg border border-slate-600 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all duration-200 cursor-pointer"
                            >
                                <option value="">Choose an Option</option>
                                <option value="consultation">Financial Consultation</option>
                                <option value="investment">Investment Planning</option>
                                <option value="business">Business Solutions</option>
                            </select>

                            <button
                                onClick={handleSubmit}
                                className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                            >
                                Submit Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinancialPlan;
