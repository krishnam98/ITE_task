import React, { useState } from 'react';
import { Menu, X, Star, Phone, Mail, MapPin, ArrowRight, CheckCircle } from 'lucide-react';

const BusinessSolutions = () => {
    return (
        <section className="bg-slate-800 text-white py-16">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <div className="lg:w-1/2 mb-8 lg:mb-0">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Business <span className="text-green-500">Solutions</span> and
                            <br />
                            <span className="text-orange-500">Crypto</span> Investments
                        </h2>
                    </div>
                    <div className="lg:w-1/2 flex flex-col sm:flex-row gap-4 lg:justify-end">
                        <button className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded font-medium transition-colors">
                            Discover More
                        </button>
                        <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded font-medium transition-colors">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessSolutions;