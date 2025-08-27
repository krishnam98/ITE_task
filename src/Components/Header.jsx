import React, { useState } from 'react';
import { Menu, X, Star, Phone, Mail, MapPin, ArrowRight, CheckCircle } from 'lucide-react';


const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-slate-800 text-white relative z-50">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center font-bold">
                            M
                        </div>
                        <span className="text-xl font-bold">MEXANT</span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-6">
                        <a href="#" className="hover:text-orange-500 transition-colors">Home</a>
                        <a href="#" className="hover:text-orange-500 transition-colors">About</a>
                        <a href="#" className="hover:text-orange-500 transition-colors">Projects</a>
                        <a href="#" className="hover:text-orange-500 transition-colors">Services</a>
                        <a href="#" className="hover:text-orange-500 transition-colors">Contact</a>
                        <button className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded transition-colors">
                            Contact Us
                        </button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="md:hidden mt-4 pb-4 border-t border-slate-700 pt-4">
                        <div className="flex flex-col space-y-3">
                            <a href="#" className="hover:text-orange-500 transition-colors">Home</a>
                            <a href="#" className="hover:text-orange-500 transition-colors">About</a>
                            <a href="#" className="hover:text-orange-500 transition-colors">Projects</a>
                            <a href="#" className="hover:text-orange-500 transition-colors">Services</a>
                            <a href="#" className="hover:text-orange-500 transition-colors">Contact</a>
                            <button className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded transition-colors w-fit">
                                Contact Us
                            </button>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;