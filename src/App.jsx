import useSwitch from "./useSwitch";
import useDate from "./useDate";
import useCustomPointer from "./useCustomPointer";
import useKeyPress from "./useKeyPress";

function App() {
  const [isOn, toggle] = useSwitch();
  const { date, time } = useDate();
  const customPointer = useCustomPointer("🔥");
  const isEnter = useKeyPress("Enter");
  const isEsc = useKeyPress("Escape");

  return (
    <>
      <div>
        <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
        <button onClick={toggle}>Cambia stato</button>
      </div>
      <div>
        <h1>Data e ora attuali:</h1>
        <p>
          {date} - {time}
        </p>
      </div>
      <div>
        <h1>Sposta il mouse per vedere il cursore personalizzato!</h1>
        {customPointer}
      </div>
      <div>
        <p>Enter: {isEnter ? "premuto" : "rilasciato"}</p>
        <p>Esc: {isEsc ? "premuto" : "rilasciato"}</p>
      </div>
    </>
  );
}

export default App;
