 
import Table from '../components/Table.jsx'
import TableContainer from '../components/TableContainer.jsx'
import Sidebar from '../components/Sidebar.jsx'
import Section1 from '../components/Section1.jsx'
import VedioSection from '../components/VedioSection.jsx'
import Nav from '../components/Nav.jsx'


const VedioGenration = () => {
  
  return (
    
    <div className="flex flex-col h-screen">
      <Nav />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto bg-[#f1f1f1] p-6">
          <Section1 />
          <VedioSection />
           
            <TableContainer>
              <Table />
            </TableContainer>
          
        </main>
      </div>
    </div>
  )
}

export default VedioGenration
