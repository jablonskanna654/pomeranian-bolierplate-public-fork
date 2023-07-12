import React from 'react';
// import Mole from '../../../Images/Mole.svg';
import { MemoGame } from './MemoGame';

const MemoGameBoard = ({ memoArray, hitTheMole }) => {
  // console.log(props);
  return memoArray.map((memo, index) => {
    <div>
      <span>
        {memo.isVisible && <img src={''} onClick={() => MemoGame(index)} />}
      </span>
    </div>;
  });
};

export default MemoGameBoard;
