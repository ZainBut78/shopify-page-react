import React from 'react'

const Section1 = () => {
    return (
        <div>
            <div className="mb-6">

                <div className="flex items-center gap-2 mb-4">
                    <div className="  rounded flex items-center justify-center">
                        <img src="/icons/vidify.svg" className="w-5 h-5 invert" alt="" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Vidify</span>
                </div>


                <div className='p-8 ml-15'>
                    <h1 className="text-2xl  font-bold text-[#303030]">Power Up Your Store With Premium Features </h1>
                    <p className="text-gray-500 text-sm mt-1">
                       Choose a Pricing Plan That Meets Your Needs!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Section1