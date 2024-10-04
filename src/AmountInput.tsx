import Input, { InputProps } from "./input";
export default function AmountInput(props:InputProps){
    return (
        <div className="flex items-center border border-teal-400 
                        bg-gray-900 rounded-md">
        <Input 
        className="text-right text-lime-400 border-0 bg-transparent text-2xl"
        placeholder = 'Enter amount'
        value={props.value} 
        onChange={props.onChange}/>
        <span className="uppercase text-xl px-4 bg-gradient-to-tr from-lime-400 to-white bg-clip-text text-transparent">USD</span>
        </div>
    )
}