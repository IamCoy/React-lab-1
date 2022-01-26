import { useState } from "react"

export function Vote(){
   
   const[percentage, setPercentage] = useState(0)
   const[chocVoteCount, setChocVoteCount] = useState(0)
   const[vanVoteCount, setVanVoteCount] = useState(0)
   const[strawvoteCount, setStrawVoteCount] = useState(0)


   function addChocolateVote(){
       setChocVoteCount(chocVoteCount +1)
   }

   function addVanillaVote(){
    setVanVoteCount(vanVoteCount +1)
}

function addStrawberryVote(){
    setStrawVoteCount(strawvoteCount +1)
}

   function UpdatePercentage(){
    //    flavorVote / totalVote* 100
   }
   
   
   return( <div>
       <h1> Vote Here</h1>
       <div className="voting">
       <button  className='button' onClick={addChocolateVote}> Chocolate </button>
        <button className='button' onClick={addVanillaVote}> Vanilla </button>
        <button className='button' onClick={addStrawberryVote}> Strawberry </button>
        </div>
        <div>
            <p>Chocolate: chocolateVoteCount (percent)</p>
            <div className = "chocolate-percent">BrownPercentBar</div>
            <p>Vanilla: vanillaVoteCount (percent)</p>
            <div className = "vanilla-percent">TanPercentBar</div>
            <p>Strawberry: strawberryVoteCount (percent)</p>
            <div className = "strawberry-percent">PinkPercentBar</div>
        </div>

        
    </div>
    )
}