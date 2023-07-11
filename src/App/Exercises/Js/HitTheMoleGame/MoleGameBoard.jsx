import React from 'react';
import Mole from '../../../Images/Mole.svg';

const MoleGameBoard = ({ moleArray, hitTheMole }) => {
  return (
    <div className="moleHoles">
      {moleArray.map((mole, index) => {
        return (
          <div className="moleHole">
            <span>
              {mole.isVisible && (
                <img
                  src={Mole}
                  onClick={() => hitTheMole(index)}
                  alt="mole upper part"
                />
              )}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default MoleGameBoard;
