function App() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-blue-600 font-title">Welcome to Tailwind CSS</h1>
      <p className="mt-4 text-lg text-gray-700 text-center font-title">This is an example page styled using Tailwind CSS.</p>
      <div className="mt-6 flex justify-center space-x-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Click Me</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">Learn More</button>
      </div>
    </div>
  )
}

export default App
