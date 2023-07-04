import React from 'react';
import Mole from '../../../Images/Mole.svg';
import './style.css';
import { useState } from 'react';


export function HitTheMoleGame() {
  const [moleArray, serMoleArray] = useState(
    Array(10).fill({ isVisible: false, isWacked: false })
  );

  const defaultGameTime = 2 * 60 * 1000;
  const [gameTime, setGameTime] = useState(defaultGameTime); // 2000 * 60
  const [moleCount, setMoleCount] = useState(1); // 1

  const gameTimeOption = [
    { label: '1 minuta', timeValue: 1 * 60 * 1000 },
    { label: '2 minuty', timeValue: 1 * 60 * 1000 },
    { label: '3 minuty', timeValue: 1 * 60 * 1000 },
  ];
  const moleCountOption = [
    { label: '1 kret' },
    { label: '2 kretY' },
    { label: '3 kretY' },
  ];

  function hitTheMole(index) {
    if (!moleArray[index].isVisible) return;
    moleArray[index].isWhacked = !moleArray[index].isWhacked;
    console.log(moleArray[index].isVisible);

    // return ()
  }
  return (
    <>
      <div>
        <p>Liczba kretów: {moleCount}</p>
        <p>
          {moleCountOption.map(({ label }) => (
            <button onClick={() => setMoleCount(Number(label[0]))}>{label}</button>
          ))}
        </p>
        <p>
          Czas gry: {gameTime / 60 / 1000} minut{' '}
          {gameTime > 1 * 60 * 1000 ? 'minuty' : 'minuta'}
        </p>
        {gameTimeOption.map(({ label, timeValue }) => (
          <button onClick={() => setGameTime(timeValue)}>
            {label}
            {label}
          </button>
        ))}
        )
        {moleArray.map((mole, index) => {
          <div>
            <span>
              {/* {mole.isVisible && (<img src={../../../Images/mole.png} onClick={() => hitTheMole(index)} />
            )} */}
              {mole.isVisible && (
                <img src={Mole} onClick={() => hitTheMole(index)} />
              )}
            </span>
          </div>;
        })}
      </div>
    </>
  );
}


export default HitTheMoleGame