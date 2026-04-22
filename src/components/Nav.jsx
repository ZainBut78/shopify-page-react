import React from 'react'
import Logo from '/src/assets/logo.png'
import Icon from '/src/assets/cartoon.png'
import AlertBtn from '/src/assets/Alerts.jpg'
import Avtar from '/src/assets/avtar.png'

const Nav = () => {
    return (
        <div>
            <nav className="w-full h-12 bg-[#1a1a1a] flex items-center px-3 justify-between">
                
                <div className="flex items-center">
                    <img className="h-7 w-auto object-contain" src={Logo} alt="Logo" />
                </div>

               
                <div className="flex-1 max-w-[500px] mx-4">
                    <div className="relative flex items-center">
                        <div className="absolute left-3 w-4 h-4 border-2 border-gray-500 rounded-full"></div> {/* Search Icon Placeholder */}
                        <input
                            className="bg-[#303030] text-sm text-gray-300 border border-[#444] w-full py-1.5 pl-10 pr-4 rounded-lg focus:outline-none"
                            type="text"
                            placeholder="Search"
                        />
                    </div>
                </div>

               
                <div className="flex items-center gap-2">
                    
                    <div className="w-8 h-8 bg-[#303030] rounded-lg flex items-center justify-center border border-[#444]">
                        <img className="w-5 h-5" src={Icon} alt="" />
                    </div>
                    <div className="w-8 h-8 bg-[#303030] rounded-lg flex items-center justify-center border border-[#444]">
                        <img className="w-5 h-5" src={AlertBtn} alt="" />
                    </div>

                    
                    <div className="flex items-center bg-[#303030] rounded-lg pl-3 pr-1 py-1 gap-3 border border-[#444] ml-1">
                        <span className="text-[#E3E3E3] text-[12px] font-medium whitespace-nowrap">Stellar Interiors</span>
                        <img className="w-7 h-7 rounded-md object-cover" src={Avtar} alt="" />
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav