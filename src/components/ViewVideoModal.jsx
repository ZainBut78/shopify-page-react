import { X, ThumbsUp, ThumbsDown, Play } from 'lucide-react'

const ViewVideoModal = ({ isOpen, onClose }) => {

    if (!isOpen) return null

    const tabs = ['Video 1', 'Video 2', 'Video 3', 'Video 4', 'Video 5']

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-xl w-[600px] max-h-[90vh] overflow-y-auto">

                
                <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                    <h2 className="text-base font-semibold text-gray-800">Product Name</h2>
                    <button onClick={onClose} className="p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer">
                        <X size={18} />
                    </button>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1 px-5 pt-3 border-b border-gray-100">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-t-lg transition-all cursor-pointer
                ${index === 4
                                    ? 'text-gray-800 border-b-2 border-gray-800'
                                    : 'text-gray-400 hover:text-gray-600'
                                }`}
                        >
                            {tab}
                            {/* Latest badge — sirf last tab pe */}
                            {index === 4 && (
                                <span className="px-2 py-0.5 text-xs font-semibold bg-gray-800 text-white rounded-full">
                                    Latest
                                </span>
                            )}
                        </button>
                    ))}
                </div>


                <div className="px-5 py-4 flex flex-col gap-4">

                    <div className="flex items-center justify-between">
                        <h3 className="text-sm font-semibold text-gray-800">AI Product Videos</h3>
                        <span className="text-sm text-gray-400">23 Jun 2024</span>
                    </div>


                    <div className="flex gap-4">


                        <div className="flex-1 flex flex-col gap-2">
                            <p className="text-sm text-gray-500">Version 1</p>
                            <div className="relative w-full h-52 rounded-xl overflow-hidden bg-gray-100">
                                <img src="/botle1.png" alt="" className="w-full h-full object-cover" />

                                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/60 text-white px-2.5 py-1 rounded-full text-xs font-medium">
                                    <Play size={12} fill="white" />
                                    2:36
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <button className="p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer transition-all">
                                    <ThumbsUp size={16} />
                                </button>
                                <button className="p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer transition-all">
                                    <ThumbsDown size={16} />
                                </button>
                            </div>
                        </div>


                        <div className="flex-1 flex flex-col gap-2">
                            <p className="text-sm text-gray-500">Version 2</p>
                            <div className="relative w-full h-52 rounded-xl overflow-hidden bg-gray-100">
                                <img src="/botle2.png" alt="" className="w-full h-full object-cover" />

                                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/60 text-white px-2.5 py-1 rounded-full text-xs font-medium">
                                    <Play size={12} fill="white" />
                                    2:36
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <button className="p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer transition-all">
                                    <ThumbsUp size={16} />
                                </button>
                                <button className="p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer transition-all">
                                    <ThumbsDown size={16} />
                                </button>
                            </div>
                        </div>

                    </div>


                    <hr className="border-gray-100" />


                    <div className="flex gap-4">


                        <div className="flex flex-col gap-1.5">
                            <p className="text-xs text-gray-500 font-medium">Start Image</p>
                            <img src="/botle1.png" alt="" className="w-20 h-20 rounded-xl object-cover bg-gray-50 border border-gray-200" />
                        </div>


                        <div className="flex flex-col gap-1.5">
                            <p className="text-xs text-gray-500 font-medium">End Image</p>
                            <img src="/botle2.png" alt="" className="w-20 h-20 rounded-xl object-cover bg-gray-50 border border-gray-200" />
                        </div>


                        <div className="flex-1 flex flex-col gap-1.5">
                            <p className="text-xs text-gray-500 font-medium">Video Prompt</p>
                            <textarea
                                readOnly
                                value="Read Only"
                                rows={3}
                                className="w-full px-3 py-2 text-sm text-gray-400 border border-gray-200 rounded-xl resize-none focus:outline-none bg-gray-50"
                            />
                        </div>

                    </div>

                </div>


                <div className="flex items-center justify-end px-5 py-4 border-t border-gray-100">
                    <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-xl hover:bg-black cursor-pointer transition-all">
                        <Play size={14} fill="white" />
                        Generate New Video
                    </button>
                </div>

            </div>
        </div>
    )
}

export default ViewVideoModal