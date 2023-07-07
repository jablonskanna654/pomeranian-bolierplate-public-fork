import React, { useEffect, useState } from 'react';
// import Mole from '../../../Images/Mole.svg';
import './style.css';
import MoleGameBoard from './MoleGameBoard';
import MoleGamesSettings from './MoleGameSettings';
import CountdownTimer from './MoleTimer';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';

export const HitTheMoleGame = () => {
  const defaultGameTime = 2 * 60 * 1000;
  const [moleArray, setMoleArray] = useState(
    Array(10).fill({ isVisible: false, isWacked: false })
  );
  const [gameTime, setGameTime] = useState(defaultGameTime); // 2000 * 60
  const [moleCount, setMoleCount] = useState(1); // 1
  const [scoreCount, setScoreCount] = useState(0);
  const [countdown, setCountdown] = useState(gameTime / 1000);
  useEffect(() => {
    setCountdown(seconds);
    let interval;
    if (!interval) {
      interval = setInterval(() => {
        setCountdown((prevCountdown) => prevCoundown - 1);
      }, 1000);
    }
  }, [seconds]);

  useEffect(() => {
    let interval;
    if (!interval) {
      interval = setInterval(() => {
        showRandomMole();
      }, 1000);
    }
  }, []);

  function hitTheMole(index) {
    if (moleArray[index].isVisible) {
      setScore(score + 1);
      setMoleArray((prevVal) => {
        const newArray = [...prevVal];
        newArray[index].isVisible = false;
        return newArray;
      });
    }
  }
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  function showRandomMole() {
    const random = getRandomIntInclusive(0, moleArray.length - 1);
    setMoleArray((previousMoleArray) =>
      previousMoleArray.map((mole, index) => {
        const updatedMole = { ...mole };
        updatedMole.isVisible = index === random;
        return updatedMole;
      })
    );
  }

  return (
    <>
      <MoleGamesSettings
        gameTime={gameTime}
        moleCount={moleCount}
        setGameTime={setGameTime}
        setMoleCount={setMoleCount}
        startStopGame={() => setGameStarted((prev) => !prev)}
        gameStarted={gameStarted}
      />
      {gameTime !== seconds * 1000 && seconds !== 0 ? (
        <MoleGameBoard
          scoreCount={scoreCount}
          moleArray={moleArray}
          hitTheMole={hitTheMole}
        />
      ) : null}
      <CountdownTimer countdown={countdown} />
    </>
  );
};
