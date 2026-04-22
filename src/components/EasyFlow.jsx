 import React from 'react'
 
 const easyflow = () => {
   return (
       <div className="max-w-[1100px] bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm mb-10 ml-20">

           
            <div className="flex justify-between items-center px-6 py-4">
                <h3 className="text-sm font-bold text-gray-800 font-sans">Other apps from Storeware</h3>
                <button className="text-gray-400 hover:text-gray-600 text-xl leading-none">...</button>
            </div>

             
            <div className="px-6 pb-6 flex flex-col md:flex-row gap-8">
 
                <div className="md:w-[45%] bg-[#2d4d2b] rounded-xl overflow-hidden relative min-h-[220px]">
                   
                    <img
                        src="/assets/easyflow.svg"
                        alt="App Banner"
                        className="w-full h-full object-cover"
                    />
                </div>

                
                <div className="md:w-[55%] flex flex-col justify-between">
                    <div>
                        <h4 className="text-sm font-bold text-gray-800 mb-2">
                           EasyFlow Product Options
                        </h4>
                        <p className="text-[12px] text-gray-500 mb-4 leading-relaxed">
                           EasyFlow is a Shopify app designed to enhance product customization and streamline the management of product options for online stores.
                        </p>

                        
                        <ul className="space-y-1.5 mb-6">
                            {[
                                "Allows customers to personalize products with text, images, and more",
                                "Dynamically shows or hides options based on customer selections",
                                "Customers can upload files for personalized products",
                                "Centralized management of all product options and variants"
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
 
 export default easyflow