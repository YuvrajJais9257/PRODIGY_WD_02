import React, { useState, useEffect } from "react";


function Stopwatch(){
    const [time, setTime]=useState(0);
    const [isRunning, setIsRunning]=useState(false);
    useEffect(()=>{
        let interval;
        if(isRunning){
            interval=setInterval(()=>{
                setTime((prevTime)=>prevTime+1);
            }, 1000);
        }
        else{
            clearInterval(interval);
        }
        return ()=> clearInterval(interval);
    }, [isRunning]);
    
    function startStop(){
        setIsRunning(!isRunning);
    }
    function reset(){
        setTime(0);
        setIsRunning(false);
    }
    return (
        <div className="stopwatch">
            <h1>{formatTime(time)}</h1>
            <button onClick={startStop}>{isRunning?'Stop':'Start'}</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

export default Stopwatch;
