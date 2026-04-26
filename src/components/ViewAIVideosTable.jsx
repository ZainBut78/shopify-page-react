 import React from 'react'
import { Eye, RefreshCw } from 'lucide-react'
import pkg from 'react-data-table-component'
const DataTable = pkg.default

const ViewAIVideosTable = () => {

  const data = [
    { id: 1, image: '/src/assets/images/bed02.svg', product: 'silver-threader-necklace', images: 2, status: 'Active', aiVideos: '3 Videos', date: '12 Jun, 2025', progress: 'In Progress' },
    { id: 2, image: '/src/assets/images/chaire.svg', product: 'threader-necklace-closeup', images: 2, status: 'Active', aiVideos: '3 Videos', date: '12 Jun, 2025', progress: 'Completed' },
    { id: 3, image: '/src/assets/images/chaire02.svg', product: 'silver-threader-necklace', images: 2, status: 'Active', aiVideos: '150 Videos', date: '12 Jun, 2025', progress: 'Completed' },
    { id: 4, image: '/src/assets/images/chaire03.svg', product: 'silver-threader-necklace', images: 2, status: 'Active', aiVideos: '15 Videos', date: '12 Jun, 2025', progress: 'Completed' },
    { id: 5, image: '/src/assets/images/cloack.svg', product: 'stylish-summer-necklace', images: 2, status: 'Active', aiVideos: '15 Videos', date: '12 Jun, 2025', progress: 'Completed' },
    { id: 6, image: '/src/assets/images/cofee.svg', product: 'threader-necklace-closeup', images: 2, status: 'Active', aiVideos: '15 Videos', date: '12 Jun, 2025', progress: 'Completed' },
    { id: 7, image: '/src/assets/images/cofee02.svg', product: 'silver-threader-necklace', images: 2, status: 'Active', aiVideos: '15 Videos', date: '12 Jun, 2025', progress: 'Completed' },
    { id: 8, image: '/src/assets/images/cofee03.svg', product: 'silver-threader-necklace', images: 2, status: 'Active', aiVideos: '15 Videos', date: '12 Jun, 2025', progress: 'Completed' },
    { id: 9, image: '/src/assets/images/draze.svg', product: 'silver-threader-necklace', images: 2, status: 'Active', aiVideos: '15 Videos', date: '12 Jun, 2025', progress: 'Completed' },
  ]

  // ---- Status Badge ----
  const StatusBadge = ({ status }) => {
    if (status === 'Active') {
      return <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">Active</span>
    }
    return <span className="text-sm text-gray-500">Draft</span>
  }

  // ---- Progress Badge ----
  const ProgressBadge = ({ progress }) => {
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
      name: 'AI Videos',
      selector: (row) => row.aiVideos,
    },
    {
      name: 'Date',
      selector: (row) => row.date,
    },
    {
      name: 'Progress',
      cell: (row) => <ProgressBadge progress={row.progress} />,
      sortable: true,
    },
    {
      name: 'Action',
      cell: (row) => {
        const eyeDisabled = row.progress === 'In Progress'

        return (
          <div className="flex items-center gap-2">
            <button
              disabled={eyeDisabled}
              className="p-2 rounded-lg transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-100 text-gray-400 hover:text-gray-700"
            >
              <Eye size={16} />
            </button>
            <button
              disabled={eyeDisabled}
              className="p-2 rounded-lg transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed hover:bg-green-50 text-gray-400 hover:text-green-600"
            >
              <RefreshCw size={16} />
            </button>
          </div>
        )
      },
    },
  ]

  return (
    <DataTable
      columns={columns}
      data={data}
      pagination
      highlightOnHover
    />
  )
}

export default ViewAIVideosTable