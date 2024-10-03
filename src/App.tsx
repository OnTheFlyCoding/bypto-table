import { useState } from "react";
function App() {
  const [amount, setAmount] = useState('');

  return (
    <main className="max-w-2xl mx-auto px-4 py-7 ">
      <h1 className="uppercase text-6xl text-center font-light bg-gradient-to-br from-purple-500 to-sky-400 bg-clip-text text-transparent ">Find Cheapest BTC</h1>
    </main>  
  )
}

export default App
