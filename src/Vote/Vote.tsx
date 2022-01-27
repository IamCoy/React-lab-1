import { useState } from "react"
import './Vote.css'

export function Vote(){
   
//    const[percentage, setPercentage] = useState(0)
   const[chocVoteCount, setChocVoteCount] = useState(0)
   const[vanVoteCount, setVanVoteCount] = useState(0)
   const[strawVoteCount, setStrawVoteCount] = useState(0)


   function addChocolateVote(){
       setChocVoteCount(chocVoteCount +1)
   }

   function addVanillaVote(){
    setVanVoteCount(vanVoteCount +1)
}

function addStrawberryVote(){
    setStrawVoteCount(strawVoteCount +1)
}

const allVotes = strawVoteCount + chocVoteCount + vanVoteCount

   function updatePercentage(flavorCount:number){
       if (flavorCount > 0){
      return  flavorCount / allVotes * 100
       }else{return 0}
   }


const styleChoc = {width: updatePercentage(chocVoteCount) + "%"} 
const styleVan = {width: updatePercentage(vanVoteCount) + "%"} 
const styleStraw = {width: updatePercentage(strawVoteCount) + "%"} 
   
   
   return( <div>
       <h1> Vote Here</h1>
       <div className="voting">
       <button  className='button' onClick={addChocolateVote}> Chocolate </button>
        <button className='button' onClick={addVanillaVote}> Vanilla </button>
        <button className='button' onClick={addStrawberryVote}> Strawberry </button>
        </div>
        <div>
            <h2>Chocolate: {chocVoteCount} {updatePercentage(chocVoteCount).toFixed(1)}%</h2>
            <div className = "chocolate-percent" style={styleChoc}>BrownPercentBar</div>
            <h2>Vanilla: {vanVoteCount} {updatePercentage(vanVoteCount).toFixed(1)}%</h2>
            <div className = "vanilla-percent" style={styleVan}>TanPercentBar</div>
            <h2>Strawberry:{strawVoteCount} {updatePercentage(strawVoteCount).toFixed(1)}%</h2>
            <div className = "strawberry-percent" style={styleStraw}>PinkPercentBar</div>
        </div>

        
    </div>
    )
}