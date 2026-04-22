import React, { useState } from 'react'
import AppCard from './AppCard';



const OtherAppCard = () => {
    const appsData = [
        {
            title: ' EasyFlow Product Options',
            desc: " EasyFlow is a Shopify app designed to enhance product customization and streamline the management of product options for online stores.",
            img: 'src/assets/easyflow.svg',
            feature: [
                "Allows customers to personalize products with text, images, and more",
                "Dynamically shows or hides options based on customer selections",
                "Customers can upload files for personalized products",
                "Centralized management of all product options and variants"
            ]
        },
        {
            title: 'BetterDocs for Shopify – Advanced Knowledge Base App',
            desc: 'Boost customer satisfaction with an efficient AI-enhanced knowledge base & FAQ system. Build smart documentation and reduce support load effortlessly.',
            img: '/lastimage.svg',
            feature: [
                "Create high-performing docs & FAQs with Magic AI",
                "Enable Live Chat & Instant Answers",
                "Customize your knowledge base with intuitive designs",
                "Track performance with in-depth analytics"
            ]
        },
        {
            title: 'StoreFAQ-Product FAQ Builder',
            desc: 'StoreFAQ-Product FAQ Builder',
            img: 'src/assets/store.svg',
            feature: [
                'Use the advanced Al Autowrite feature for writing FAQs instantly',
                'Design the FAQ page with various customizations',
                'Drag & drop to add the StoreFAQ App block anywhere on a page',
                'Export or import FAQs without any hassle'
            ]
        },
        {
            title: 'TrustSync - Review Collection App',
            desc: 'Boost your business reputation by collecting reviews for Google Review, Trustpilot, Etsy & more while filtering out negative ratings.',
            img: 'src/assets/trustsync.svg',
            feature: [
                'Collect customers reviews via review collection emails',
                'Auto-publish reviews on popular platforms',
                'Review Settings & Email Configurations',
                'Manage Negative Feedback while filtering out low ratings'
            ]
        },
        {
            title: 'StoreSEO - AI SEO Agent',
            desc: 'StoreSEO is an AI-powered Shopify app to boost your store’s search engine rankings and organic traffic through AI SEO optimization.',
            img: 'src/assets/seo.svg',
            feature: [
                'Improve ranking in search engines with Product SEO Optimizer & Blog SEO.',
                'Generate meta title, description, and tag with AI.',
                'AI Image Optimizer, Resizer Compressor and boost page speed & alt text image.',
                'Local SEO updates, Schema markup, Sitemaps & LLMs.txt for organic ranking boost'
            ]
        }
    ];

    const [currIdx, setcurrIdx] = useState(0);

    const nextCard = () => {

        if (currIdx < appsData.length - 1) {
            setcurrIdx(currIdx + 1);
        }

    };

    const preCard = () => {

        if (currIdx > 0) {
            setcurrIdx(currIdx - 1);
        }
    };

    const currApps = appsData[currIdx];


    return (
        <div className="max-w-[1100px] bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm mb-10 ml-20">


            <div className="flex justify-between items-center px-6 py-4">
                <h3 className="text-sm font-bold text-gray-800 font-sans">Other apps from Storeware</h3>
                <button className="text-gray-400 hover:text-gray-600 text-xl leading-none">...</button>
            </div>


            <AppCard
                title={currApps.title}
                img={currApps.img}
                desc={currApps.desc}
                feature={currApps.feature}
            />


            <div className="bg-[#f6f6f6] border-t border-gray-100 px-4 py-2 flex justify-end gap-4">

                
                <button
                    onClick={preCard}
                    disabled={currIdx === 0}
                    className={`text-lg transition-colors ${currIdx === 0
                            ? "text-gray-200 cursor-not-allowed" // Disabled look
                            : "text-gray-400 hover:text-gray-800" // Enabled look
                        }`}
                >
                    ❮
                </button>

                
                <button
                    onClick={nextCard}
                    disabled={currIdx === appsData.length - 1}
                    className={`text-lg transition-colors ${currIdx === appsData.length - 1
                            ? "text-gray-200 cursor-not-allowed" // Disabled look
                            : "text-gray-400 hover:text-gray-800" // Enabled look
                        }`}
                >
                    ❯
                </button>

            </div>

        </div>
    )
}

export default OtherAppCard



