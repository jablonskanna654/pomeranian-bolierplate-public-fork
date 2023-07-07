
const MoleGamesSettings = ({ gameTime, moleCount, scoreCount, moleArray }) => {
 
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
  const CountdownTimer = [
    { label: '60 sekund' },
    { label: '120 sekund' },
    { label: '180 sekund' },
  ];
  return (
    <div className="moleGameOptions gameOptionsButton gameButtonsRows activeButton">
      <p>
        Gra polegająca na podążaniu za krecikiem i trafieniu w kwadrat w
        momencie, kiedy się pojawi nasz bohater
      </p>
      <ul>
        <h4>CZAS GRY:{gameTime}</h4>
        {''}
        {gameTimeOption.map(({ label, timeValue }) => (
          <button
            className={gameTime === timeValue ? 'activeButton' : ''}
            onClick={() => {
              setSeconds(timeValue / 1000); 
            setGameTime(timeValue)
          }}
          key={label}> 
          </button>
        ))}
        {''}
        <h4>LICZBA KRETÓW: {moleCount}</h4>
  
          {moleCountOption.map(({ label }) => (
            <button onClick={() => setMoleCount(Number(label[0]))}
              key={label}>
            </button>
          ))}
  
        {''}
        <h4>PRZYCISKI STERUJĄCE:</h4>
        

        <h4>CZAS DO KOŃCA</h4>
      </ul>
      <div>
        <p>Czas gry: {gameTime / 60 / 1000} sekund </p>
        {gameTimeOption.map(({ label, timeValue }) => (
          <button onClick={() => setGameTime(timeValue)}>{label}</button>
        ))}
      </div>
    </div>
  );

export default MoleGamesSettings;
