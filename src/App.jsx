import React from 'react'
import Nav from './components/Nav.jsx'
import Sidebar from './components/Sidebar.jsx'
import Section1 from './components/Section1.jsx'
import VedioSection from './components/VedioSection.jsx'
import Section2 from './components/Section2.jsx'
import Section3 from './components/Section3.jsx'
import Section4 from './components/Section4.jsx'
import Section5 from './components/Section5.jsx'

const App = () => {
  return (
    <div>
      <div className="flex flex-col h-screen">
        <Nav />  
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />  
          <main className="flex-1 overflow-y-auto bg-[#f1f1f1] p-6">
            <Section1 />
            <VedioSection/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Section5/>
          </main>
        </div>
      </div>
    </div>
  )
}

export default App