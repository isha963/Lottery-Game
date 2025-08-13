import "./App.css";
import Ticket from "./components/Ticket";
import Ticketnum from "./components/Ticketnum";
import Lottery from "./components/Lottery";

function App() {
  return (
    <>
      <Lottery n={3} winningsum={20} />
    </>
  );
}

export default App;
