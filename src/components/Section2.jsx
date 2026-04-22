import React from 'react'

const Section2 = () => {
    return (
        <div className="max-w-[1100px] bg-white border border-gray-200 rounded-xl overflow-hidden flex flex-col md:flex-row shadow-sm mb-6 ml-20">

            
            <div className="md:w-1/3 bg-[#f8f9ff] p-4 flex items-center justify-center border-r border-gray-100">
                <div className="relative">
                   
                    <img
                        src="/AIimage.svg"
                        alt="AI Preview"
                        className="rounded-lg shadow-sm object-cover"
                    />
                     
                    <div className="absolute -top-2 -right-2 bg-purple-500 p-1.5 rounded-lg shadow-md">
                        <div className="w-4 h-4 border-2 border-white rounded-sm rotate-45"></div>
                    </div>
                </div>
            </div>

             
            <div className="md:w-2/3 p-6 flex flex-col justify-center relative">
                
                <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                    <span className="text-xl">...</span>
                </button>

                <h3 className="text-sm font-bold text-gray-800 mb-2 leading-tight">
                    Generate Stunning AI-Videos from Product Images
                </h3>

                <p className="text-[12px] text-gray-500 mb-4 leading-relaxed">
                    Turn your product images into scroll-stopping marketing videos in seconds. Just upload images; we'll add dynamic animations and effects for a high-converting result.
                </p>

                <div>
                    <button className="flex items-center gap-2 bg-white border border-gray-300 px-4 py-1.5 rounded-lg text-[12px] font-semibold hover:bg-gray-50 transition-all shadow-sm">
                        <span className="text-lg">✨</span>
                        Generate AI Video
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Section2