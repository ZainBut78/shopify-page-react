import React from 'react'

const VedioSection = () => {
    return (
         <div className="max-w-[1100px] bg-white border border-gray-200 rounded-xl p-5 shadow-sm mb-6 ml-20">
      
      
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-bold text-gray-800">Video Generator</h3>
            <span className="text-gray-400 text-xs cursor-help border border-gray-300 rounded-full w-4 h-4 flex items-center justify-center">i</span>
          </div>
          <p className="text-[12px] text-gray-500 mt-1">
            Current Plan: <span className="font-semibold text-gray-700">Explorer – 2 AI Videos /Month</span>
          </p>
        </div>
        
        <button className="text-[12px] font-semibold px-3 py-1.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
          Upgrade your plan
        </button>
      </div>

      
      <div>
        <div className="flex justify-between text-[11px] text-gray-500 mb-2 font-medium">
          <span>0/2 Videos</span>
        </div>
        
         
        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden border border-gray-200/50">
          
          <div className="h-full bg-green-700 rounded-full w-[70%]"></div>
        </div>
      </div>

    </div>
    )
}

export default VedioSection