import React from 'react'

const ResourceCard = ({ title, desc, iconBg, iconPath }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white border border-gray-100 rounded-xl hover:shadow-md transition-shadow cursor-pointer group mb-3">
      <div className="flex items-center gap-4">
        {/* Icon Circle */}
        <div className={`w-10 h-10 rounded-4xl flex items-center justify-center ${iconBg}`}>
          <img src={iconPath} alt="" className="w-5 h-5 invert" />
        </div>
        
        {/* Text Details */}
        <div>
          <h4 className="text-sm font-bold text-gray-800">{title}</h4>
          <p className="text-[12px] text-gray-500">{desc}</p>
        </div>
      </div>

      {/* Right Arrow */}
      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 text-gray-400 group-hover:text-gray-800 transition-colors">
        <span className="text-lg">→</span>
      </div>
    </div>
  )
}

export default ResourceCard