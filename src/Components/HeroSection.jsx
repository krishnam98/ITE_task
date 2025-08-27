import React, { useState } from 'react';
import { Menu, X, Star, Phone, Mail, MapPin, ArrowRight, CheckCircle } from 'lucide-react';

const HeroSection = () => {
    return (
        <section className="bg-slate-800 text-white relative overflow-hidden min-h-[600px] md:min-h-[700px]">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('/bgImage.jpg')`
                }}
            ></div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/70"></div>

            {/* Content */}
            <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
                <div className="max-w-3xl">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
                        Get <span className="text-orange-500">ready</span> for your business
                        <br />
                        & upgrade <span className="text-orange-500">all aspects</span>
                    </h1>
                    <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl">
                        Mexant HTML5 Template is produced for free of charge. This layout is based on Bootstrap 5 CSS
                        framework. Anyone can download and use for any professional website. Thank you for visiting
                        TemplateMo website.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
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

export default HeroSection;