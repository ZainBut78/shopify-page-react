import React from 'react'

const Section5 = () => {
    return (
        <div className="max-w-[1100px] bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm mb-10 ml-20">

            {/* Top Header */}
            <div className="flex justify-between items-center px-6 py-4">
                <h3 className="text-sm font-bold text-gray-800 font-sans">Other apps from Storeware</h3>
                <button className="text-gray-400 hover:text-gray-600 text-xl leading-none">...</button>
            </div>

            {/* Main Content Area */}
            <div className="px-6 pb-6 flex flex-col md:flex-row gap-8">
 
                <div className="md:w-[45%] bg-[#2d4d2b] rounded-xl overflow-hidden relative min-h-[220px]">
                   
                    <img
                        src="/lastimage.svg"
                        alt="App Banner"
                        className="w-full h-full object-cover"
                    />
                </div>

                
                <div className="md:w-[55%] flex flex-col justify-between">
                    <div>
                        <h4 className="text-sm font-bold text-gray-800 mb-2">
                            BetterDocs for Shopify – Advanced Knowledge Base App
                        </h4>
                        <p className="text-[12px] text-gray-500 mb-4 leading-relaxed">
                            Boost customer satisfaction with an efficient AI-enhanced knowledge base & FAQ system. Build smart documentation and reduce support load effortlessly.
                        </p>

                        
                        <ul className="space-y-1.5 mb-6">
                            {[
                                "Create high-performing docs & FAQs with Magic AI AutoWrite",
                                "Enable Live Chat & Instant Answers for seamless customer support",
                                "Customize your knowledge base with intuitive design options",
                                "Track performance with in-depth analytics"
                            ].map((feature, i) => (
                                <li key={i} className="flex items-start gap-2 text-[12px] text-gray-600">
                                    <span className="text-gray-400 mt-1">•</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <button className="w-fit px-4 py-1.5 border border-gray-300 rounded-lg text-[12px] font-semibold hover:bg-gray-50 transition-all shadow-sm">
                        Get Started
                    </button>
                </div>
            </div>

           
            <div className="bg-[#f6f6f6] border-t border-gray-100 px-4 py-2 flex justify-end gap-4">
                <button className="text-gray-400 hover:text-gray-800 disabled:opacity-30 transition-colors" disabled>
                    <span className="text-lg">❮</span>
                </button>
                <button className="text-gray-400 hover:text-gray-800 transition-colors">
                    <span className="text-lg">❯</span>
                </button>
            </div>

        </div>
    )
}

export default Section5