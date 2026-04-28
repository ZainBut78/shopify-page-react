import { useState } from 'react'
import { ChevronLeft, ChevronRight, Video } from 'lucide-react'
import Modal from 'react-modal';

 
const MakeAIVideoModal = ({ isOpen, onClose }) => {

    const [selectedImages, setSelectedImages] = useState([0])
    const [startIndex, setStartIndex] = useState(0)

    const visibleCount = 4

    const productImages = [
        '/images/case.svg',
        '/images/aramchair.svg',
        '/images/bed.svg',
        '/images/bed02.svg',
        '/images/chaire.svg',
        '/images/bed.svg',
        '/images/bed02.svg',
        '/images/chaire.svg',
    ]

    const toggleImage = (index) => {
        if (selectedImages.includes(index)) {
            setSelectedImages(selectedImages.filter(i => i !== index))
        } else {
            setSelectedImages([...selectedImages, index])
        }
    }

    const handleNext = () => {
        if (startIndex + visibleCount < productImages.length) {
            setStartIndex(startIndex + 1)
        }
    }

    const handlePrev = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1)
        }
    }

     
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            padding: '0',
            borderRadius: '16px',
            border: 'none',
            width: '460px',
            maxHeight: '90vh',
            overflow: 'auto',
        },
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            zIndex: 1000,
        }
    };

    Modal.setAppElement('#root');

    return (
         
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            style={customStyles}
            contentLabel="Make AI Video"
        >
           
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                <h2 className="text-base font-semibold text-gray-800">Make AI Video</h2>
               
                <button onClick={onClose} className="p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer">
                    ✕
                </button>
            </div>
 
            <div className="px-5 py-4 flex flex-col gap-5">

               
                <div>
                    <p className="text-sm font-medium text-gray-700 mb-3">Select Product Images</p>
                    <div className="flex items-center gap-2">

                        <button
                            onClick={handlePrev}
                            disabled={startIndex === 0}
                            className="p-1.5 flex-shrink-0 text-gray-400 hover:bg-gray-100 rounded-lg cursor-pointer border border-gray-200 disabled:opacity-30 disabled:cursor-not-allowed"
                        >
                            <ChevronLeft size={16} />
                        </button>

                        <div className="flex gap-2 overflow-hidden flex-1">
                            {productImages
                                .slice(startIndex, startIndex + visibleCount)
                                .map((img, index) => {
                                    const actualIndex = startIndex + index
                                    return (
                                        <div
                                            key={actualIndex}
                                            onClick={() => toggleImage(actualIndex)}
                                            className={`relative flex-shrink-0 w-[72px] h-[72px] rounded-xl border-2 cursor-pointer transition-all overflow-hidden
                                                ${selectedImages.includes(actualIndex)
                                                    ? 'border-blue-500'
                                                    : 'border-gray-200 hover:border-gray-300'
                                                }`}
                                        >
                                            <img src={img} alt="" className="w-full h-full object-cover bg-gray-50" />
                                            <div className={`absolute top-1 right-1 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all
                                                ${selectedImages.includes(actualIndex)
                                                    ? 'bg-blue-500 border-blue-500'
                                                    : 'bg-white border-gray-300'
                                                }`}
                                            >
                                                {selectedImages.includes(actualIndex) && (
                                                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                )}
                                            </div>
                                        </div>
                                    )
                                })}
                        </div>

                        <button
                            onClick={handleNext}
                            disabled={startIndex + visibleCount >= productImages.length}
                            className="p-1.5 flex-shrink-0 text-gray-400 hover:bg-gray-100 rounded-lg cursor-pointer border border-gray-200 disabled:opacity-30 disabled:cursor-not-allowed"
                        >
                            <ChevronRight size={16} />
                        </button>
                    </div>
                </div>

                
                <div className="flex gap-3">
                    <div className="flex-1">
                        <p className="text-sm font-medium text-gray-700 mb-2">Select Start Image</p>
                        <div className="w-full h-44 rounded-xl border-2 border-gray-200 overflow-hidden bg-gray-50">
                            {selectedImages.length > 0
                                ? <img src={productImages[selectedImages[0]]} alt="" className="w-full h-full object-contain" />
                                : <div className="w-full h-full flex items-center justify-center text-sm text-gray-300">No image</div>
                            }
                        </div>
                    </div>

                    <div className="flex-1">
                        <p className="text-sm font-medium text-gray-700 mb-2">
                            Select End Image <span className="text-gray-400 font-normal">(Optional)</span>
                        </p>
                        <div className="w-full h-44 rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 flex items-center justify-center">
                            <svg className="w-12 h-12 text-gray-200" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                            </svg>
                        </div>
                    </div>
                </div>

               
                <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">
                        Video Prompt <span className="text-gray-400 font-normal">(Optional)</span>
                    </p>
                    <textarea
                        placeholder="Share your vision in a few clear words"
                        rows={3}
                        className="w-full px-3 py-2.5 text-sm text-gray-700 placeholder-gray-400 border border-gray-200 rounded-xl resize-none focus:outline-none focus:border-gray-400"
                    />
                </div>
            </div>

             
            <div className="flex items-center justify-end gap-3 px-5 py-4 border-t border-gray-100">
                
                <button onClick={onClose} className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 cursor-pointer">
                    Cancel
                </button>
                <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-xl hover:bg-black cursor-pointer">
                    <Video size={15} />
                    Generate AI Video
                </button>
            </div>

        </Modal>
    )
}

export default MakeAIVideoModal