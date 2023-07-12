const gameTimeOption = [
  { label: '1 minuta', timeValue: 1 * 60 * 1000 },
  { label: '2 minuty', timeValue: 2 * 60 * 1000 },
  { label: '3 minuty', timeValue: 3 * 60 * 1000 },
];
const moleCountOption = [
  { label: '1 kret' },
  { label: '2 krety' },
  { label: '3 krety' },
];

const MoleGamesSettings = ({
  gameTime,
  setGameTime,
  moleCount,
  setMoleCount,
  gameStarted,
  startStopGame,
}) => {
  return (
    <div className="moleGameOptions gameOptionsButton gameButtonsRows activeButton">
      <p>
        Gra polegająca na podążaniu za krecikiem i trafieniu w kwadrat w
        momencie, kiedy się pojawi nasz bohater
      </p>
      <h4>Czas gry:</h4>
      <div>
        {gameTimeOption.map(({ label, timeValue }) => (
          <button
            className={gameTime === timeValue ? 'activeButton' : ''}
            onClick={() => {
              setGameTime(timeValue);
            }}
            key={label}
          >
            {label}
          </button>
        ))}
      </div>
      {/* TODO: More moles! */}
      <h4>Ilość kretów (w budowie):</h4>
      <div>
        {moleCountOption.map(({ label }) => {
          return (
            <button
              className={label[0] === `${moleCount}` ? 'activeButton' : ''}
              onClick={() => setMoleCount(Number(label[0]))}
              key={label}
            >
              {label}
            </button>
          );
        })}
      </div>

      <br />
      <br />
      <div>
        <button onClick={startStopGame}>
          {!gameStarted ? 'Start' : 'Stop'}
        </button>
      </div>
    </div>
  );
};

export default MoleGamesSettings;
