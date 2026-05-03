import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

    useEffect(() => {
    if (count !== 0 && count % 10 === 0) {
      alert("Number is divisible by 10!");
    }
  }, [count]);

  const response = {
    results: [
      { id: 1, title: "Post One", body: "First post", image: "https://picsum.photos/500" }
    ],
  };


  return (
    <div>
      {/* Navbar */}
      <div className="flex justify-between items-center bg-blue-500 text-white p-4">
        <h1 className="text-xl font-bold">AndikaMangarajaNainggolan_2406450333</h1>
        <div className="flex gap-4">
          <a href="#">Home</a>
          <a href="#">Profile</a>
          <a href="#">Contact</a>
          <a href="#">About Me</a>          
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4">
        {response.results.map((item) => (
          <div key={item.id} className="border rounded shadow p-3">
            <img src={item.image} alt="img" className="mb-2" />
            <h2 className="font-bold">{item.title}</h2>
            <p>{item.body}</p>
          </div>
        ))}
      </div>

      {/* Counter */}
      <div className="text-center p-4">
        <h2 className="text-2xl">{count}</h2>

        <div className="flex justify-center gap-3 mt-3">
          <button onClick={() => setCount(count + 1)} className="bg-green-500 px-3 py-1 text-white">+</button>
          <button onClick={() => setCount(count - 1)} className="bg-red-500 px-3 py-1 text-white">-</button>
          <button onClick={() => setCount(0)} className="bg-gray-500 px-3 py-1 text-white">Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;