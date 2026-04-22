import React from 'react'
import ResourceCard from './ResourceCard'

const Section3 = () => {
    return (
        <div className="max-w-[1100px] bg-[#f9fafb] border border-gray-200 rounded-2xl p-6 mb-6 ml-20">
            {/* Header Text */}
            <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-800">Drive More Sales with Vidify AI Product Videos</h3>
                <p className="text-sm text-gray-500 mt-1">Transform product marketing & your brand presence with stunning
                    videos.</p>
            </div>

            
            <div className="space-y-3">
                <ResourceCard title="Documentation"
                    desc="Read our step-by-step guidelines to explore and master every Vidify feature." iconBg="bg-green-700"
                    iconPath="/icons/doc.svg" />

                <ResourceCard title="Support" desc="Our team is always ready to help reach out anytime to solve any issue."
                    iconBg="bg-yellow-600" iconPath="/icons/support.svg" />

                <ResourceCard title="Vidify Walkthrough"
                    desc="Book a session with our experts and learn how to get the most out of Vidify." iconBg="bg-purple-600"
                    iconPath="/icons/walkthrough.svg" />
            </div>
        </div>
    )
}

export default Section3