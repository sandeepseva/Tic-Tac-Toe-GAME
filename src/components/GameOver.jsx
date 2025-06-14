export default function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h2>{winner ? `${winner} won!` : "It's a draw!"}</h2>
      <button onClick={onRestart}>Rematch</button>
    </div>
  );
}
