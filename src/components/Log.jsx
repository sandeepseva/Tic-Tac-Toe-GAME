export default function Log({ turns = [] }) {
  return (
    <ol id="log">
      {turns.map((turn, index) => (
        <li key={`${turn.square.row}-${turn.square.col}-${index}`}>
          {turn.player} selected row {turn.square.row + 1}, column {turn.square.col + 1}
        </li>
      ))}
    </ol>
  );
}
