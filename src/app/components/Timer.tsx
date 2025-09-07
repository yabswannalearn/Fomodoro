'use client'

import { useState, useEffect} from "react";

export default function Timer() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (!isRunning) return;

        const interval = setInterval(() => {
            setTime((t) => {
                if (t > 0) {
                    return t-1;
                } else {
                    clearInterval(interval);
                    setIsRunning(false);
                    return 0
                }
            })
        }, 1000)

        return () => clearInterval(interval)
    }, [isRunning]);

    const addTime = () => setTime( time + 1)
    const stop = () => setIsRunning(false);
    const start = () => setIsRunning(true);


    

    return (
    <div className="flex flex-col items-center gap-4 p-4">
    <p className="text-2xl font-bold">time: {time}</p>
    
    <div className="flex gap-2">
        <button 
        onClick={start} 
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
        Start
        </button>
        
        <button 
        onClick={stop} 
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
        Stop
        </button>
        
        <button 
        onClick={addTime} 
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
        Add
        </button>
    </div>
    </div>

    )

}