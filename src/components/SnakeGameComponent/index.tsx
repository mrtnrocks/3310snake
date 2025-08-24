import React, {useEffect, useRef, useState} from "react";
import {SnakeGame} from "../../game/SnakeGame";

export const preventControlButtons = (e: KeyboardEvent) => {
  if (
    ["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(
      e.code,
    ) > -1
  ) {
    e.preventDefault();
  }
};

const SnakeGameComponent: React.FC = () => {
  const gameCanvasRef = useRef<HTMLCanvasElement>(null);
  const foodCanvasRef = useRef<HTMLCanvasElement>(null);
  const gameInstanceRef = useRef<SnakeGame | null>(null);

  const [score, setScore] = useState(0);
  const [superFood, setSuperFood] = useState({ count: 0, visible: false });
  const [isGameOver, setGameOver] = useState(true);
  const [difficulty, setDifficulty] = useState<'Easy' | 'Normal' | 'Hard'>('Hard');

  useEffect(() => {
    if (gameCanvasRef.current && foodCanvasRef.current) {
      const game = new SnakeGame({
        gameCanvas: gameCanvasRef.current,
        foodCanvas: foodCanvasRef.current,
        setScore,
        setSuperFood,
        setGameOver,
      });
      gameInstanceRef.current = game;

      // Set initial difficulty from the game instance
      const initialDifficulty = gameInstanceRef.current.difficulty;
      if (initialDifficulty === 1) setDifficulty('Easy');
      if (initialDifficulty === 2) setDifficulty('Normal');
      if (initialDifficulty === 3) setDifficulty('Hard');

      return () => {
        game.destroy();
      };
    }
  }, []);

  const changeDifficultyHandler = () => {
    if (!gameInstanceRef.current) return;

    let nextDifficulty: 'Easy' | 'Normal' | 'Hard' = 'Easy';
    let gameDifficultyValue: 1 | 2 | 3 = 1;

    switch (difficulty) {
      case 'Easy':
        nextDifficulty = 'Normal';
        gameDifficultyValue = 2;
        break;
      case 'Normal':
        nextDifficulty = 'Hard';
        gameDifficultyValue = 3;
        break;
      case 'Hard':
        nextDifficulty = 'Easy';
        gameDifficultyValue = 1;
        break;
    }
    setDifficulty(nextDifficulty);
    gameInstanceRef.current.difficulty = gameDifficultyValue;
  };

  const startGameHandler = () => {
    if (!gameInstanceRef.current) return;
    window.addEventListener("keydown", preventControlButtons, false);
    gameInstanceRef.current.startGame();
  };

  const stopGameHandler = () => {
    if (!gameInstanceRef.current) return;
    gameInstanceRef.current.gameOver = true;
    gameInstanceRef.current.resetGame();
    window.removeEventListener("keydown", preventControlButtons, false);
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.code === "Escape") {
          e.preventDefault();
          stopGameHandler();
        }
    }
    window.addEventListener("keydown", handleKeyDown, false);
    return () => {
        window.removeEventListener("keydown", handleKeyDown, false);
    }
  },[])


  return (
    <div className="container">
        <div className="screen">
            <div className="info-line">
                <div>
                    {score.toString().padStart(4, "0")}
                </div>
                <div className={`countdown ${!superFood.visible ? 'hidden' : ''}`}>
                    <span>{superFood.count}</span>
                    <div id="superfood-area">
                        <canvas ref={foodCanvasRef} />
                    </div>
                </div>
            </div>
            <div style={{border: '4px solid #000;'}}>
                <div id="game-area">
                    <canvas ref={gameCanvasRef}></canvas>
                    {isGameOver && (
                        <div className="game-start-screen">
                            <div onClick={changeDifficultyHandler}><span>{difficulty}</span></div>
                            <div onClick={startGameHandler}>Play</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
        <style>
          {`
            .container {
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .screen {
                position: relative;
                z-index: 1;
                width: 345px;
                height: 247px;
                background: #73a582;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
            .info-line {
                display: flex;
                justify-content: space-between;
                border-bottom: 4px solid #000;
                width: 312px;
                margin-bottom: 6px;
                font-size: 20px;
            }
            #game-area {
                position: relative;
                width: 304px;
                height: 160px;
            }
            #superfood-area {
                width: 32px;
                height: 16px;
            }
            .game-start-screen {
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                align-items: center;
                justify-content: center;
                display: flex;
                flex-direction: column;
                gap: 12px;
                font-size: 24px;
                background: #73a582;
            }
            .hidden {
                opacity: 0;
                pointer-events: none;
                cursor: default;
            }
            .game-start-screen div {
                cursor: pointer;
            }
            .countdown {
                display: flex;
                gap: 8px;
            }
          `}
        </style>
    </div>
  )
}
export default SnakeGameComponent;
