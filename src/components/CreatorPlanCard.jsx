import React from 'react'

const CreatorPlanCard = ({ planName, price, videos, buttonText, highlighted }) => {
  return (
    <div className="flex w-[400px] h-[170px] ml-20 flex-col gap-4 px-4 py-4 bg-white rounded-xl border border-gray-200 w-64">

      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-gray-800">{planName}</span>
        <span className="text-sm font-bold text-gray-800">${price}<span className="text-xs font-normal text-gray-400">/m</span></span>
      </div>

      <p className="text-sm text-gray-500">{videos} videos per month</p>

      <hr className="border-gray-200" />

      <button className={`w-full py-2 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer border
        ${highlighted
          ? 'bg-gray-900 text-white border-gray-900 hover:bg-black'
          : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-800 hover:text-white hover:border-gray-800'
        }`}>
        {buttonText}
      </button>

    </div>
  )
}

export default CreatorPlanCard