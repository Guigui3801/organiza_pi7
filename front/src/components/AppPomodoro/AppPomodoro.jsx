import React, { useState, useEffect } from "react";
import {
  FaPlay,
  FaPause,
  FaRedo,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import "./AppPomodoro.styles.scss";
import AppTaskFooter from "../AppTaskFooter/AppTaskFooter";

const Pomodoro = () => {
  const [cycles, setCycles] = useState(1);
  const [currentCycle, setCurrentCycle] = useState(1);
  const [currentPhase, setCurrentPhase] = useState("work");
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
            if (currentPhase === "work") {
              if (currentCycle === cycles) {
                // Último ciclo completo, iniciar descanso de 15 minutos
                if (currentCycle % 2 === 0) {
                  setMinutes(15);
                  setSeconds(0);
                  setCurrentCycle(1);
                  setCurrentPhase("longBreak");
                } else {
                  setMinutes(5);
                  setSeconds(0);
                  setCurrentCycle(currentCycle + 1);
                  setCurrentPhase("break");
                }
              } else {
                // Pausa de 5 minutos entre timers
                setMinutes(5);
                setSeconds(0);
                setCurrentPhase("break");
                setCurrentCycle(currentCycle + 1);
              }
            } else if (currentPhase === "break") {
              // Timer de 25 minutos entre timers
              setMinutes(25);
              setSeconds(0);
              setCurrentPhase("work");
            } else if (currentPhase === "longBreak") {
              // Timer de 25 minutos entre timers
              setMinutes(25);
              setSeconds(0);
              setCurrentPhase("work");
              setCurrentCycle(1);
            }
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, cycles, currentCycle, currentPhase, minutes, seconds]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setMinutes(25);
    setSeconds(0);
    setIsRunning(false);
    setCurrentCycle(1);
    setCurrentPhase("work");
  };

  const decrementCycles = () => {
    if (cycles > 1) {
      setCycles(cycles - 1);
    }
  };

  const incrementCycles = () => {
    setCycles(cycles + 1);
  };

  return (<div style={{display: "flex", flexDirection: "column"}}>

    <div className="pomodoro">
      <h1>Pomodoro</h1>
      {currentPhase === "break" && <p className="interview">Intervalo</p>}
      <div className="timer">
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </div>
      <div className="btn_pomodoro">
        <button onClick={startTimer}>
          <FaPlay />
        </button>
        <button onClick={stopTimer}>
          <FaPause />
        </button>
        <button onClick={resetTimer}>
          <FaRedo />
        </button>
      </div>
      <div>
        <div className="cycle">
          <p>Ciclos:</p>
          <button onClick={decrementCycles}>
            <FaChevronLeft />
          </button>
          <p>{cycles}</p>
          <button onClick={incrementCycles}>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
    <div style={{flexGrow:2, alignContent:"end", height: '20vh' }}>

    </div>
  <AppTaskFooter/>
    </div>
  );
};

export default Pomodoro;
