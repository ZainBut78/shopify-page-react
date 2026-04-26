import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';
import Section1 from '../components/Section1';
import PlanCard from '../components/PlanCard';
import CreatorPlanCard from '../components/CreatorPlanCard';

const SubscribtionPlan = () => {
  return (
    <div className="flex flex-col h-screen">
      <Nav />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto bg-[#f1f1f1] p-6">
          <Section1 />
          <PlanCard />
          <div className='flex gap-2 mt-4'>

            {/* Creator Card */}
            <CreatorPlanCard
              planName="Creator"
              price={20}
              videos={20}
              buttonText="Choose Creator Plan"
              highlighted={false}
            />

            {/* Scale Card — highlighted */}
            <CreatorPlanCard
              planName="Scale"
              price={40}
              videos={40}
              buttonText="Choose Scale Plan"
              highlighted={true}
            />

            {/* Mastery Card */}
            <CreatorPlanCard
              planName="Mastery"
              price={60}
              videos={60}
              buttonText="Choose Mastery Plan"
              highlighted={false}
            />

          </div>
        </main>
      </div>
    </div>
  )
}

export default SubscribtionPlan