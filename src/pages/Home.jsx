 
import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';
import Section1 from '../components/Section1';
import VedioSection from '../components/VedioSection';
import Section2 from '../components/Section2';
import Section3 from '../components/Section3';
import Section4 from '../components/Section4';
import OtherAppCard from '../components/OtherAppCard';

const Home = () => {
  return (
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
            
            <OtherAppCard />
          </main>
        </div>
      </div>
  )
}

export default Home