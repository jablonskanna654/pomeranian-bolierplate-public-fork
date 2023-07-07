import React from 'react';
import Mole from '../../../Images/Mole.svg';

const MoleGameBoard = ({ moleArray, hitTheMole }) => {
  // console.log(props);
  return moleArray.map((mole, index) => {
    <div>
      <span>
        {mole.isVisible && <img src={Mole} onClick={() => hitTheMole(index)} />}
      </span>
    </div>;
  });
};

export default MoleGameBoard;
