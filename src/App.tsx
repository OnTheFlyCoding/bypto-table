import { useState } from "react";
import AmountInput from "./AmountInput";
import ResultRow from "./ResultRow";
function App() {
  const [amount, setAmount] = useState('');

  return (
    <main className="max-w-2xl mx-auto px-4 py-7 ">
      <h1 className="uppercase text-6xl text-center font-light bg-gradient-to-br 
                  from-purple-500 to-sky-400 bg-clip-text text-transparent ">
                    Find Cheapest BTC</h1>
      <div className="flex justify-center mt-8 ">
        <AmountInput value={amount} onChange={e => setAmount(e.target.value)} />
      </div>
      <div className="py-8 px-4">
        <ResultRow/>
        <ResultRow/>
        <ResultRow/>
        <ResultRow loading={false}/>
      </div>
    </main>  
  )
}

export default App
