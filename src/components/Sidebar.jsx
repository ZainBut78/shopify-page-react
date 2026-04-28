import { Link, useLocation } from 'react-router-dom'
import React from 'react'


const Sidebar = () => {
  const location = useLocation();
  return (
    <aside className="w-[240px] h-screen bg-[#ebebeb] flex flex-col py-3 px-2 font-sans text-[#303030]">
      <div className="space-y-0.5 flex-1">

        {[
          { label: "Home", iconName: "home.svg" },
          { label: "Orders", iconName: "orders.svg" },
          { label: "Products", iconName: "products.svg" },
          { label: "Customers", iconName: "customers.svg" },
          { label: "Content", iconName: "content.svg" },
          { label: "Finances", iconName: "finances.svg" },
          { label: "Analytics", iconName: "analytics.svg" },
          { label: "Marketing", iconName: "marketing.svg" },
          { label: "Discounts", iconName: "discounts.svg" },
        ].map((item, index) => (
          <div key={index} className="flex items-center gap-3 px-3 py-1.5 hover:bg-[#dedede] rounded-md cursor-pointer transition-colors">
            <img src={`/icons/${item.iconName}`} alt="" className="w-5 h-5" />
            <span className="text-sm font-medium">{item.label}</span>
          </div>
        ))}


        <div className="flex items-center justify-between px-3 pt-6 pb-2 text-[#616161] cursor-pointer">
          <span className="text-xs font-semibold">Sales channels</span>
          <span className="text-sm">›</span>
        </div>


        {[
          { label: "Online Store", iconName: "store.svg" },
          { label: "Point of Sale", iconName: "pos.svg" },
          { label: "Shop", iconName: "shop.svg" }
        ].map((item, index) => (
          <div key={index} className="flex items-center gap-3 px-3 py-1.5 hover:bg-[#dedede] rounded-md cursor-pointer text-[#303030]">
            <img src={`/icons/${item.iconName}`} alt="" className="w-5 h-5" />
            <span className="text-sm font-medium">{item.label}</span>
          </div>
        ))}


        <div className="flex items-center justify-between px-3 pt-6 pb-2 text-[#616161] cursor-pointer">
          <span className="text-xs font-semibold">Apps</span>
          <span className="text-sm">›</span>
        </div>


        <div className="space-y-1">
          <div className="flex items-center gap-3 px-3 py-1.5 bg-white shadow-sm rounded-lg cursor-pointer">
            <img src="/icons/vidify.svg" alt="" className="w-5 h-5" />
            <Link to='/' className="text-sm font-bold text-[#303030]">Vidify</Link>
          </div>
          <div className="pl-11 py-1 text-[#616161] space-y-2">

            <Link
              to="/GenrateVedio"
              className={`block text-sm cursor-pointer transition-all
               ${location.pathname === '/GenrateVedio'
                  ? 'text-black font-semibold'
                  : 'text-[#616161] hover:text-black'
                }`}
            >
              Generate Video
            </Link>

            <Link
              to="/SubscriptionPlan"
              className={`block text-sm cursor-pointer transition-all
               ${location.pathname === '/SubscriptionPlan'
                  ? 'text-black font-semibold'
                  : 'text-[#616161] hover:text-black'
                }`}
            >
              Subscription Plan
            </Link>

          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar