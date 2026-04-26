import React from 'react'

const PlanCard = () => {
  return (
    <div className=" max-w-[1100] ml-20 flex items-center justify-between px-4 py-3 bg-white rounded-xl border border-gray-200">
      
     
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold text-gray-800">Free</span>
        <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-700">
          Active
        </span>
        <p className="text-sm text-gray-500 ml-2">Make <span className="font-medium text-gray-800">2 AI videos</span> per month</p>
      </div>

       
      <button className="px-4 py-1.5 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer transition-all">
        Choose Free
      </button>

    </div>
  )
}

export default PlanCard