 import React from 'react'
import { Eye, RefreshCw } from 'lucide-react'
import pkg from 'react-data-table-component'
import { useState } from 'react'
import MakeAIVideoModal from './MakeAIVideoModal'
import ViewVideoModal from './ViewVideoModal'

const DataTable = pkg.default

const Table = () => {

  const [modalOpen, setmodalOpen] = useState(false)
  const [viewModalOpen, setViewModalOpen] = useState(false)  // ← naya

  const data = [
    { id: 1, image: '/src/assets/images/case.svg', product: 'stylish-summer-necklace', images: 3, status: 'Active', inventory: '0 in stock for 50 variants', progress: 'Not Generated' },
    { id: 2, image: '/src/assets/images/aramchair.svg', product: 'threader-necklace-closeup', images: 5, status: 'Active', inventory: '360 in stock', progress: 'Not Generated' },
    { id: 3, image: '/src/assets/images/bed.svg', product: 'silver-threader-necklace', images: 2, status: 'Draft', inventory: '120 in stock', progress: 'Not Generated' },
    { id: 4, image: '/src/assets/images/bed02.svg', product: 'silver-threader-necklace', images: 2, status: 'Active', inventory: '120 in stock', progress: 'In Progress' },
    { id: 5, image: '/src/assets/images/chaire.svg', product: 'threader-necklace-closeup', images: 2, status: 'Active', inventory: '120 in stock', progress: 'Completed' },
    { id: 6, image: '/src/assets/images/chaire02.svg', product: 'silver-threader-necklace', images: 2, status: 'Active', inventory: '120 in stock', progress: 'Completed' },
    { id: 7, image: '/src/assets/images/chaire03.svg', product: 'silver-threader-necklace', images: 2, status: 'Active', inventory: '120 in stock', progress: 'Completed' },
    { id: 8, image: '/src/assets/images/cloack.svg', product: 'stylish-summer-necklace', images: 2, status: 'Active', inventory: '120 in stock', progress: 'Completed' },
    { id: 9, image: '/src/assets/images/cofee.svg', product: 'threader-necklace-closeup', images: 2, status: 'Active', inventory: '120 in stock', progress: 'Completed' },
    { id: 10, image: '/src/assets/images/cofee02.svg', product: 'silver-threader-necklace', images: 2, status: 'Active', inventory: '120 in stock', progress: 'Completed' },
    { id: 11, image: '/src/assets/images/cofee03.svg', product: 'silver-threader-necklace', images: 2, status: 'Active', inventory: '120 in stock', progress: 'Completed' },
    { id: 12, image: '/src/assets/images/draze.svg', product: 'silver-threader-necklace', images: 2, status: 'Active', inventory: '120 in stock', progress: 'Completed' },
  ]

  const StatusBadge = ({ status }) => {
    if (status === 'Active') {
      return (
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
          Active
        </span>
      )
    }
    return <span className="text-sm text-gray-500">Draft</span>
  }

  const ProgressBadge = ({ progress }) => {
    if (progress === 'Not Generated') {
      return (
        <span className="flex items-center gap-1 text-sm text-gray-500">
          <span className="w-3 h-3 rounded-full border-2 border-gray-400 inline-block"></span>
          Not Generated
        </span>
      )
    }
    if (progress === 'In Progress') {
      return (
        <span className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-600">
          <span className="w-2 h-2 rounded-full bg-blue-500 inline-block"></span>
          In Progress
        </span>
      )
    }
    if (progress === 'Completed') {
      return (
        <span className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
          <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
          Completed
        </span>
      )
    }
  }

  const InventoryCell = ({ inventory }) => {
    const isZero = inventory.startsWith('0')
    return (
      <span className={`text-sm ${isZero ? 'text-orange-500' : 'text-gray-700'}`}>
        {inventory}
      </span>
    )
  }

  const columns = [
    {
      name: 'Product',
      cell: (row) => (
        <div className="flex items-center gap-3 py-2">
          <img src={row.image} alt={row.product} className="w-10 h-10 rounded-lg object-cover bg-gray-50" />
          <span className="text-sm font-medium text-gray-800">{row.product}</span>
        </div>
      ),
      sortable: true,
    },
    {
      name: 'Images',
      selector: (row) => `${row.images} Images`,
    },
    {
      name: 'Status',
      cell: (row) => <StatusBadge status={row.status} />,
    },
    {
      name: 'Inventory',
      cell: (row) => <InventoryCell inventory={row.inventory} />,
      sortable: true,
    },
    {
      name: 'Progress',
      cell: (row) => <ProgressBadge progress={row.progress} />,
      sortable: true,
    },
    {
      name: 'Action',
      cell: (row) => {
        const eyeDisabled    = row.progress === 'Not Generated' || row.progress === 'In Progress'
        const actionDisabled = row.progress === 'In Progress'

        return (
          <div className="flex items-center gap-2">

            {/* Eye button — sirf Completed pe kaam karega */}
            <button
              disabled={eyeDisabled}
              onClick={() => setViewModalOpen(true)}  // ← yeh add kiya
              className="p-2 rounded-lg transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-100 text-gray-400 hover:text-gray-700"
            >
              <Eye size={16} />
            </button>

            {row.progress === 'Not Generated' ? (
              <button onClick={() => setmodalOpen(true)} className="p-2 rounded-lg transition-all cursor-pointer hover:bg-gray-100 text-gray-400">
                <img src="/src/assets/notgenrateicon.svg" alt="generate" className="w-4 h-4" />
              </button>
            ) : (
              <button
                disabled={actionDisabled}
                className="p-2 rounded-lg transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed hover:bg-green-50 text-gray-400 hover:text-green-600"
              >
                <RefreshCw size={16} />
              </button>
            )}
          </div>
        )
      },
    },
  ]

  return (
    <>
      <DataTable
        columns={columns}
        data={data}
        pagination
        highlightOnHover
      />

      {/* Make AI Video Modal */}
      <MakeAIVideoModal
        isOpen={modalOpen}
        onClose={() => setmodalOpen(false)}
      />

      {/* View Video Modal */}
      <ViewVideoModal
        isOpen={viewModalOpen}
        onClose={() => setViewModalOpen(false)}
      />
    </>
  )
}

export default Table