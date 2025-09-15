import Link from "next/link"


const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8 space-y-8">
          <div className="flex flex-col">
            <h1
            className="text-4xl font-extrabold text-gray-900 mb-4 sm:mb-0">
              Dashboard</h1>

              <p className="text-lg text-gray-600 mt-3">
                Welcome back ! Here you can manage your tasks, view analytics, and make adjustments.
              </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/dashboard/tasks" className='bg-blue-300 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded
              shadow-md transition-all duration-300 ease-in-out transform hover:scale-105'>
                <div className="flex items-center justify-between space-x-2">
                  <h2 className="text-xl font-semibold text-blue-900">Tasks</h2>
                  <span className="text-blue-500 text-2xl ">📜</span>
                </div>
                <p className="text-gray-700 mt-2">View ,organize and manage your daily tasks</p>
              </Link>
              {/**Anlytics card */}
               <Link href="/dashboard/analytics" className='bg-green-200 hover:bg-green-300 text-white font-bold py-2 px-4 rounded
              shadow-md transition-all duration-300 ease-in-out transform hover:scale-105'>
                <div className="flex items-center justify-between space-x-2">
                  <h2 className="text-xl font-semibold text-green-800">Analytics</h2>
                  <span className="text-green-500 text-2xl ">📊</span>
                </div>
                <p className="text-gray-700 mt-2">
                  Gain insights into your task progress and performance
                  </p>
              </Link>
              {/**Settings card */}
               <Link href="/dashboard/settings" className='bg-pink-200 hover:bg-pink-300 text-white font-bold py-2 px-4 rounded
              shadow-md transition-all duration-300 ease-in-out transform hover:scale-105'>
                <div className="flex items-center justify-between space-x-2">
                  <h2 className="text-xl font-semibold text-pink-900">Tasks</h2>
                  <span className="text-pink-500 text-2xl ">⚙</span>
                </div>
                <p className="text-gray-700 mt-2">Customize your dashboard to suit your needs</p>
              </Link>
              {/**users card */}
               <Link href="/dashboard/users" className='bg-yellow-100 hover:bg-yellow-200 text-white font-bold py-2 px-4 rounded
              shadow-md transition-all duration-300 ease-in-out transform hover:scale-105'>
                <div className="flex items-center justify-between space-x-2">
                  <h2 className="text-xl font-semibold text-yellow-900">Users</h2>
                  <span className="text-yellow-500 text-2xl ">👲</span>
                </div>
                <p className="text-gray-700 mt-2">View and manage your user base.</p>
              </Link>
          </div>
        </div>
    </div>
  )
}

export default Dashboard