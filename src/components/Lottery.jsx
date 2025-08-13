import { useState } from "react"
import Ticket from "./Ticket"
import { genticket, sum } from "./helper";

export default function Lottery({ n=3, winningsum=15 }) {
  let [ticket, setticket] = useState(genticket(n));
  let isWinning = sum( ticket )=== winningsum;
  function handleclick() {
    setticket(genticket(n));
    
    
  }


  return <>
    <h1>Lottery Game!</h1>


    <Ticket ticket={ticket} />
    <br /><br />
    <button onClick={handleclick}>Buy ticket</button>
    <h3>{isWinning && "Congrats, you won!"}</h3>
  </>
}