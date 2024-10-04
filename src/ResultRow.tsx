type ResultRowProps = {
    loading?: boolean;
}


export default function ResultRow({loading}:ResultRowProps){
    return (
        // Container:
        <div className="relative border min-h-6 border-teal-400 
                        rounded-lg bg-gradient-to-l
                        from-purple-500/10 to-sky-400/30 
                        my-2">
            <div className="flex gap-4 ">
                <div className="flex px-2">Logo</div>
                <div className="grow">Provider</div>
                <div className="flex gap-2 px-2">
                    <span className="text-xl text-lime-400">0.00</span>
                    <span className="text-xl bg-gradient-to-tr 
                                from-amber-500 to-white/80 
                                bg-clip-text 
                                text-transparent">BTC</span>
                    </div>
            </div>
            {/* if loading ===true. Display div on top while loading*/}
            {loading && (
                <div className="inset-0 absolute 
                    rounded-md bg-gradient-to-r from-transparent
                    via-cyan-400/50 to-transparent
                    skeleton-animation"/>
            )}
            
        </div>
    )
}