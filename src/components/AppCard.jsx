import React from 'react'

const AppCard = ({
title, desc, img,feature=[]
}) => {
  return (
      <div className="px-6 pb-6 flex flex-col md:flex-row gap-8">

                <div className="md:w-[45%] bg-[#2d4d2b] rounded-xl overflow-hidden relative min-h-[220px]">

                    <img
                        src={img}
                        alt="App Banner"
                        className="w-full h-full object-cover"
                    />
                </div>


                <div className="md:w-[55%] flex flex-col justify-between">
                    <div>
                        <h4 className="text-sm font-bold text-gray-800 mb-2">
                            {title}
                        </h4>
                        <p className="text-[12px] text-gray-500 mb-4 leading-relaxed">
                            {desc}
                        </p>


                        <ul className="space-y-1.5 mb-6">
                            {feature.map((fe, i) => (
                                <li key={i} className="flex items-start gap-2 text-[12px] text-gray-600">
                                    <span className="text-gray-400 mt-1">•</span>
                                    {fe}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <button className="w-fit px-4 py-1.5 border border-gray-300 rounded-lg text-[12px] font-semibold hover:bg-gray-50 transition-all shadow-sm">
                        Get Started
                    </button>
                </div>
            </div>
  )
}

export default AppCard