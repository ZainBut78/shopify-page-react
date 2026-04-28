 
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import VedioGenration from './pages/VedioGenration.jsx'
import SubscribtionPlan from './pages/SubscribtionPlan.jsx'

import MakeAIVideoModal from "./components/MakeAIVideoModal"




const App = () => {
  return (
    <>

  <MakeAIVideoModal/>
      <Routes>
        
        <Route path='/' element={<Home />} />
        <Route path='/SubscriptionPlan' element={<SubscribtionPlan/>}/>
        <Route path='/GenrateVedio' element={<VedioGenration />} />
      </Routes>
     
    </>
  )
}

export default App