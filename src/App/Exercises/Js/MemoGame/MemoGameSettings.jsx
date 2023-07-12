import React from 'react';
export const MemoGameSettings = ({
  boardSize,
  setBoardSize,
  startStopGame,
  gameStarted,
}) => {
  const gameBoardSizeOption = [
    { label: '8 elementów', value: 4, gameBoardSizeOption: 4 },
    { label: '16 elementów', value: 6, gameBoardSizeOption: 6 },
    { label: '20 elementów', value: 8, gameBoardSizeOption: 8 },
  ];
  return (
    <div className="memoGameOptions">
      <div className=" gameOptionsButtons">
        <div className="gameButtonsRows">
          <p>
            Gra polegająca na zapamiętywaniu odkrytych kafli i łączeniu ich w
            pary
          </p>
        </div>
      </div>

      <h4>LICZBA ELEMENTÓW {boardSize}</h4>
      {gameBoardSizeOption.map(({ label, boardSizeOption }) => (
        <button
          className={boardSizeOption === boardSize ? 'activeButton' : ''}
          onClick={() => {
            setBoardSize(boardSizeOption);
          }}
        >
          {label}
        </button>
      ))}

      <div>
        <h4>PRZYCISKI STERUJĄCE</h4>
        <button onClick={startStopGame}>
          {gameStarted ? 'STOP' : 'START'}
        </button>
      </div>
    </div>
  );
};

export default MemoGameSettings;
