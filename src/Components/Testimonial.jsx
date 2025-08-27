const Testimonials = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="text-orange-500 font-medium">TESTIMONIALS</span>
                    <h2 className="text-2xl md:text-4xl font-bold mt-2">What They Say</h2>
                </div>

                <div className="max-w-5xl mx-auto">
                    <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">

                        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">


                            <div className="flex-1 flex flex-col text-center md:text-left">
                                {/* Quote */}
                                <div className="mb-4">
                                    <div className="text-5xl md:text-6xl text-green-500 mb-3">"</div>
                                    <p className="text-gray-600 mb-4 md:mb-6 text-base md:text-lg italic">
                                        "Working with this team has been an incredible experience.
                                        They delivered our project on time, paid close attention to
                                        every detail, and went above and beyond to make sure everything
                                        worked perfectly. I couldn’t be happier with the results."
                                    </p>
                                </div>


                                <div>
                                    <h4 className="font-semibold text-gray-800 text-base md:text-lg">
                                        Andrew Garfield
                                    </h4>
                                    <p className="text-green-500 text-xs md:text-sm">
                                        CEO of Mexant
                                    </p>
                                </div>
                            </div>


                            <div className="w-28 h-28 md:w-[20%] md:h-[90%] rounded-md overflow-hidden flex-shrink-0">
                                <img
                                    src="/testimonials-01.jpg"
                                    alt="Testimonial"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
