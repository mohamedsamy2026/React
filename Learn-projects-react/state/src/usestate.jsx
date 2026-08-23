import { useState } from "react";

export default function Scoreboard() {
  const [player, setPlayer] = useState({
    firstName: "",
    lastName: "",
    score: 1,
  });

  function handlePlusClick() {
    setPlayer({ ...player, score: player.score + 1 });
  }

  function handleFirstNameChange(e) {
    setPlayer({
      ...player,
      firstName: e.target.value,
    });
  }

  function handleLastNameChange(e) {
    setPlayer({
      ...player,
      lastName: e.target.value,
    });
  }

  return (
    <>
      <div>
        <label>
          Score: <b>{player.score}</b>
          <button onClick={handlePlusClick}>+1</button>
        </label>
      </div>

      <div style={{margin:"10px 0"}}>
        <label>
          First name:
          <input value={player.firstName} onChange={handleFirstNameChange} />
        </label>
      </div>

      <div>
        <label>
          Last name:
          <input value={player.lastName} onChange={handleLastNameChange} />
        </label>
      </div>
    </>
  );
}
