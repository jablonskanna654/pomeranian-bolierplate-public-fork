
import './style.css';
import React, {useState, useEffect } from 'react';
import CountdownTimer from './MemoTimer';
import MemoGameBoard from './MemoGameBoard';
import MemoGameSettings from './MemoGameSettings';

export const MemoGame = () => {
  const DEFAULT_GAME_TIME = 2 * 60 * 1000;
  const DEFAULT_MEMO_SPEED = 1 * 1000;
  const DEFAULT_GAME_BOARD = (Array(10).fill('A'));

  const [memoArray, setMoleArray] = useState(Array(16));
  const [clicks, setClicks] = useState(DEFAULT_GAME_BOARD);
  const [gameTime, setGameTime] = useState(DEFAULT_GAME_TIME);
  const [memoCount, setMemoCount] = useState(1);
  const [scoreCount, setScoreCount] = useState(0);
  const [countdown, setCountdown] = useState(gameTime / 1000);
  const [gameStarted, setGameStarted] = useState(false);


  useEffect(() => {
    let timerInterval;

    if (!timerInterval && gameStarted) {
      timerInterval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    }

    if (countdown === 0) clearInterval(timerInterval);
    return () => clearInterval(timerInterval);
  }, [countdown, gameStarted]);


  function handleCellClick () {
setClicks((prevValue) => prevValue +1)
  }

function startStopGame () {
  setGameStarted((prevValue) => !prevValue)
}
//   return
//    (
//     <>
//     <MemoGameSettings />
//     <Timer
//     time={timer} 
//     memoCount={memoCount}
//     setmemoCount={setMemoCount}
//     startStopGame={startStopGame}
// />
//     {/* <MemoGameBoard 
//     handleCellClick={handleCellClick}/>
//   const gameTime = ({gameTime}) => {''} */}



  return (
    <>
      {!gameStarted && (
        <MemoGameSettings
          gameTime={gameTime}
          setGameTime={setGameTime}
          moleCount={memoCount}
          setMemoCount={setMemoCount}
          startStopGame={() => {
            setGameStarted((prev) => !prev);
            setScoreCount(0);
          }}
          gameStarted={gameStarted}
        />
      )}
      {/* {typeof scoreCount === 'number' && <ScoreBoard scoreCount={scoreCount} />}
      {gameStarted && <CountdownTimer countdown={countdown} />} */}



        <MemoGameBoard
          scoreCount={scoreCount}
          memoArray={memoArray}
          // memoGame={memoGame}
        />
    </>
  );
};

// const MoleGameBoard = ({ moleArray, hitTheMole }) => {
//   useEffect(() => {
//     setGameStarted(false);
//     setCountdown(gameTime / 1000);
//   }, [gameTime]);

//   useEffect(() => {
//     if (scoreCount === 20) setGameStarted(false);
//   }, [scoreCount]);

//   useEffect(() => {
//     let timerInterval;

//     if (!timerInterval && gameStarted) {
//       timerInterval = setInterval(() => {
//         setCountdown((prevCountdown) => prevCountdown - 1);
//       }, 1000);
//     }

//     if (countdown === 0) clearInterval(timerInterval);
//     return () => clearInterval(timerInterval);
//   }, [countdown, gameStarted]);

//   useEffect(() => {
//     let moleInterval;
//     if (!moleInterval && gameStarted) {
//       moleInterval = setInterval(() => {
//         showRandomMole();
//       }, DEFAULT_MOLE_SPEED);
//     }
//   }, [gameStarted]);

//   function hitTheMole(index) {
//     if (moleArray[index].isVisible) {
//       setScoreCount((prevScore) => prevScore + 1);
//       setMoleArray((prevVal) => {
//         const newArray = [...prevVal];
//         newArray[index].isVisible = false;
//         return newArray;
//       });
//     }
//   }

//   function getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   }

//   function showRandomMole() {
//     const random = getRandomIntInclusive(0, moleArray.length - 1);
//     setMoleArray((previousMoleArray) =>
//       previousMoleArray.map((mole, index) => {
//         const updatedMole = { ...mole };
//         updatedMole.isVisible = index === random;
//         return updatedMole;
//       })
//     );
//   }

//   return (
//     <>
//       {!gameStarted && (
//         <MoleGamesSettings
//           gameTime={gameTime}
//           setGameTime={setGameTime}
//           moleCount={moleCount}
//           setMoleCount={setMoleCount}
//           startStopGame={() => {
//             setGameStarted((prev) => !prev);
//             setScoreCount(0);
//           }}
//           gameStarted={gameStarted}
//         />
//       )}
//       {typeof scoreCount === 'number' && <ScoreBoard scoreCount={scoreCount} />}
//       {gameStarted && <CountdownTimer countdown={countdown} />}

//       {gameStarted && (
//         <MoleGameBoard
//           scoreCount={scoreCount}
//           moleArray={moleArray}
//           hitTheMole={hitTheMole}
//         />
//       )}
//     </>
//   );
// };
