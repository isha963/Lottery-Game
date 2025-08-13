import { useState } from "react";





export default function Lottery() {
  let [ticket, setTicket] = useState(0);
  
  function generateTicket() {
    let rand = Math.floor(Math.random() * (999-100+1) ) +100 ;
    setTicket(ticket = rand);
    let sum = 0;
    while (rand != 0) {
      let rem = rand % 10;
      sum += rem;
      rand = Math.floor(rand / 10);
    }
    if (sum == 15) {
      document.getElementById("h3").innerText="Lottery Congrats, you won!"
    } 
  }

  return (
    <>
      <h2>Lottery Game</h2>
      <h5>Lottery Ticket = {ticket}</h5>
      <button onClick={() => generateTicket()}>Get a new ticket</button>
      <h3 id="h3"></h3>
    </>
  );
}