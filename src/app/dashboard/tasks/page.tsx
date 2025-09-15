
const Task = () => {
  const tasks =[
 
    {
      "id": 1,
      "title": "Finish React Module",
      "description": "Complete the advanced section of the React course and practice hooks.",
      "status": "In Progress",
      "dueDate": "2025-09-18"
    },
    {
      "id": 2,
      "title": "Daily DSA Practice",
      "description": "Solve at least 3 medium-level problems on arrays and strings.",
      "status": "Pending",
      "dueDate": "2025-09-16"
    },
    {
      "id": 3,
      "title": "Portfolio Enhancement",
      "description": "Improve animations and skill section layout on the portfolio website.",
      "status": "Pending",
      "dueDate": "2025-09-22"
    },
    {
      "id": 4,
      "title": "Team Code Review",
      "description": "Review the new pull requests for the MERN dashboard project.",
      "status": "In Progress",
      "dueDate": "2025-09-17"
    },
    {
      "id": 5,
      "title": "Write Blog Post",
      "description": "Draft a blog about 'Optimizing React Performance with Memoization'.",
      "status": "Pending",
      "dueDate": "2025-09-21"
    },
    {
      "id": 6,
      "title": "UI Testing",
      "description": "Test the responsive design of the TrendWise project on different screen sizes.",
      "status": "Completed",
      "dueDate": "2025-09-14"
    },
    {
      "id": 7,
      "title": "Update Resume",
      "description": "Add internship experience and recent projects to your resume.",
      "status": "Pending",
      "dueDate": "2025-09-20"
    },
    {
      "id": 8,
      "title": "Hackathon Research",
      "description": "Find and shortlist upcoming hackathons for October participation.",
      "status": "In Progress",
      "dueDate": "2025-09-19"
    },
    {
      "id": 9,
      "title": "Database Backup",
      "description": "Backup MongoDB database for the Alumni Connect platform.",
      "status": "Pending",
      "dueDate": "2025-09-18"
    },
    {
      "id": 10,
      "title": "Prepare Slides",
      "description": "Design slides for the seminar on low-level system design with TypeScript.",
      "status": "Pending",
      "dueDate": "2025-09-23"
    }
  ]


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 p-8">
      <div className="min-x-7xl mx-auto bg-white rounded-lg shadow-sm p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Tasks
        </h1>

        {/**Task list section */}
        <section className="space-y-6">
         {tasks.map((task)=>(
          <div key={task.id}
          style={{borderColor: task.status === 'Completed' ? 'green' :task.status === 'In Progress' ? 'yellow' : 'red'}}
          className="bg-white rounded-lg shadow-md p-6 flex items-center justify-between border-l-4">
              <div className="flex flex-col">
                <h2 className="text-lg font-semibold text-gray-800">{task.title}</h2>
                <p className="text-gray-600 text-sm">{task.description}</p>
                <p className="text-gray-600  text-sm">Due Date: {task.dueDate}</p>
              </div>
          </div>
         ))}
        </section>
      </div>
    </div>
  )
}

export default Task