
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='flex justify-center  min-h-screen bg-gradient-to-br from-blue-50
    to bg-indigo-100 flex-col '>
      <div className="text-center">
        <h1 className='text-4xl font-bold text-gray mb-6'>Welcome to Dashboard App</h1>

        <p className='text-lg text-gray-600 mb-8'>
          Manage your tasks , track Analytics , and stay organized with our powerful dashboard.
        </p>
        <Link href='/dashboard' className='inline-flex items-center justify-center rounded-md
         bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700'> Go to Dashboard</Link>
      </div>
    </div>
  )
}

export default page