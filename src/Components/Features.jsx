const Features = () => {
    const features = [
        {
            icon: '📄',
            title: 'CSS Templates',
            description: 'TemplateMo website is the best for you to explore and download free website templates.'
        },
        {
            icon: '🌐',
            title: 'HTML5 Web Pages',
            description: 'Get fresh start with HTML5 Templates. You can select, edit & modify based on your needs.'
        },
        {
            icon: '📱',
            title: 'Responsive Designs',
            description: 'All of our CSS templates are 100% free for use for commercial or business websites.'
        },
        {
            icon: '📲',
            title: 'Mobile and Tablet ready!',
            description: 'Our 2022 CSS templates are well-suited for mobile, tablet and desktop compatibilities.'
        },
        {
            icon: '🎧',
            title: 'Fast Customer Support',
            description: 'Do not hesitate to contact us if you have any question or concern about our templates.'
        },
        {
            icon: '⚙️',
            title: 'Fully Customizable',
            description: 'If you have any idea or suggestion about new templates, feel free to let us know.'
        }
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white p-3 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-2xl md:text-3xl mb-2 md:mb-4">{feature.icon}</div>
                            <h3 className="text-sm md:text-xl font-semibold mb-2 md:mb-3 text-gray-800">{feature.title}</h3>
                            <p className="text-xs md:text-base text-gray-600 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;