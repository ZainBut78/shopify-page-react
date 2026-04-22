import React from 'react'

const Section4 = () => {
    return (
        <div className="max-w-[1100px] bg-white border border-gray-200 rounded-xl overflow-hidden flex flex-col md:flex-row shadow-sm mb-10 ml-20">

            {/* Left Side: Illustration Area */}
            <div className="md:w-1/3 bg-gradient-to-br from-[#f0fdf4] to-[#f8f9ff] p-4 flex items-center justify-center relative border-r border-gray-100">
                {/* Placeholder for the Support Image/Illustration */}
                <div className="w-full h-32 flex items-center justify-center">
                    {/* Aap apni image yahan lagayein */}
                    <img
                        src="/image.svg"
                        alt="Support Expert"
                        className="h-full object-contain"
                    />
                </div>
            </div>

            {/* Right Side: Content Area */}
            <div className="md:w-2/3 p-6 flex flex-col justify-center relative">
                {/* Top Dots Menu */}
                <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                    <span className="text-xl">...</span>
                </button>

                <h3 className="text-sm font-bold text-gray-800 mb-2">
                    Want to schedule a call?
                </h3>

                <p className="text-[12px] text-gray-500 mb-4 leading-relaxed">
                    We have marketing experts ready to help build your video marketing strategy and guide you in scaling your store with video. Want to book a one-to-one session? It's FREE!
                </p>

                <div>
                    <button className="flex items-center gap-2 bg-white border border-gray-300 px-4 py-1.5 rounded-lg text-[12px] font-semibold hover:bg-gray-50 transition-all shadow-sm">
                        {/* Phone icon placeholder */}
                        <span className="text-sm">📞</span>
                        Talk to Vidify Expert
                    </button>
                </div>
            </div>

        </div>
    )
}
  

export default Section4