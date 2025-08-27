const KnowUsBetter = () => {
    const projects = [
        { title: 'Website Analysis', budget: '$300 to $400', deadline: '2022 Dec 12', client: 'Web Biz', status: 'In Progress' },
        { title: 'Graphics', budget: '$1800 to $1900', deadline: '2022 Dec 10', client: 'Web Biz', status: 'Online Ads' },
        { title: 'Web Coding', budget: '$1000 to $1200', deadline: '2022 Dec 8', client: 'Web Biz', status: 'Web Presence' },
        { title: 'Marketing Plan', budget: '$2200 to $2400', deadline: '2022 Dec 6', client: 'Web Biz', status: 'Web Biz' },
        { title: 'All-new Website', budget: '$1300 to $1600', deadline: 'New', client: 'Web Presence', status: 'Web Presence' }
    ];

    return (
        <section className="py-16 bg-gray-50 ">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="lg:w-2/3">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Know Us Better</h2>

                        {/* Project Categories */}
                        <div className="flex flex-wrap gap-4 mb-8 justify-center">
                            <span className="px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium">Web Design</span>
                            <span className="px-4 py-2 bg-gray-200 text-gray-600 rounded-full text-sm">Graphics</span>
                            <span className="px-4 py-2 bg-gray-200 text-gray-600 rounded-full text-sm">Web Coding</span>
                        </div>

                        {/* Projects Table */}
                        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Project Title</th>
                                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Budget</th>
                                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Deadline</th>
                                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Client</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {projects.map((project, index) => (
                                            <tr key={index} className="hover:bg-gray-50">
                                                <td className="px-4 py-3 text-sm font-medium text-gray-900">{project.title}</td>
                                                <td className="px-4 py-3 text-sm text-green-600 font-medium">{project.budget}</td>
                                                <td className="px-4 py-3 text-sm text-gray-500">{project.deadline}</td>
                                                <td className="px-4 py-3 text-sm text-gray-500">{project.client}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/3">
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-semibold mb-4">Please tell us about your idea and how you want it to be</h3>
                            <p className="text-gray-600 mb-6 text-sm">
                                You are allowed to use this template for your commercial or business websites.
                                You are NOT allowed to redistribute the template ZIP file for download purpose on any template collection websites.
                            </p>
                            <p className="text-gray-600 mb-6 text-sm">
                                Thank you for downloading and using our free templates. Please visit our website today for your business.
                            </p>
                            <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition-colors">
                                Submit Ideas
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default KnowUsBetter;