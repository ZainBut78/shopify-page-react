import React, { useState } from 'react'
import { Search, SlidersHorizontal, ArrowUpDown } from 'lucide-react'
import ViewAIVideosTable from './ViewAIVideosTable'   

const TableContainer = ({ children }) => {
  const [activeTab, setActiveTab] = useState('generate')

  return (
    <div className="  max-w-[1100px] ml-20 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">

      <div className="flex items-center justify-between px-4 pt-3 pb-0 border-b border-gray-100">
        <div className="flex items-center gap-1">
          <button
            onClick={() => setActiveTab('generate')}
            className={`px-4 py-2 text-sm font-medium transition-all cursor-pointer border-b-2
              ${activeTab === 'generate' ? 'border-gray-800 text-gray-800' : 'border-transparent text-gray-400 hover:text-gray-600'}`}
          >
            Generate AI Videos
          </button>
          <button
            onClick={() => setActiveTab('view')}
            className={`px-4 py-2 text-sm font-medium transition-all cursor-pointer border-b-2
              ${activeTab === 'view' ? 'border-gray-800 text-gray-800' : 'border-transparent text-gray-400 hover:text-gray-600'}`}
          >
            View AI Videos
          </button>
        </div>

        <div className="flex items-center gap-1">
          <button className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-all cursor-pointer">
            <Search size={17} />
          </button>
          <button className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-all cursor-pointer">
            <SlidersHorizontal size={17} />
          </button>
          <button className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-all cursor-pointer">
            <ArrowUpDown size={17} />
          </button>
        </div>
      </div>

      <div>
        {/* Tab ke hisaab se table switch hoga */}
        {activeTab === 'generate' ? children : <ViewAIVideosTable />}
      </div>

    </div>
  )
}

export default TableContainer