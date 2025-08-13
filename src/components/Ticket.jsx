import Ticketnum from "./Ticketnum";
import "./ticket.css";
export default function Ticket({ ticket }) {
  return (
    <div className="ticket">
      <p className="para">Ticket</p>
      {ticket.map((num, idx) => <Ticketnum key={idx} num={num}/>)}
    </div>
  );
}
