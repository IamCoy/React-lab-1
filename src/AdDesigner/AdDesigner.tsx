import { useState } from 'react'

export function AdDesigner(){

    const [flavor, setFlavor] = useState("strawberry")

    const [counter, setCounter] = useState(0)

    function updateFlavor(e:any){
            setFlavor(e.target.value)
    }

    function addToCounter(){
      
          setCounter(counter + 1)
    }

    function subFromCounter(){
      
        setCounter(counter - 1)
  }

    return(
        <div className='adDesigner'>
        <h1>Ad Designer</h1>
        <div className="ad" >
            vote for 
            <h2>{flavor}</h2>
        </div>
        <h3>What to Support</h3>
        <button onClick={updateFlavor} className='button' value="Chocolate"> Chocolate </button>
        <button onClick={updateFlavor} className='button' value= "Vanilla"> Vanilla </button>
        <button onClick={updateFlavor} className='button' value="Strawberry"> Strawberry </button>
        <h3> Color Theme</h3>
        <button className='button'> Light </button>
        <button className='button'> Dark </button>
        <h3> Font Size </h3>
        <div className='buttonBoxAd'>
        <button className='button'onClick={subFromCounter}>Down</button>
        <h4>{counter}</h4> 
        <button className='button' onClick={addToCounter} >Up</button>
        </div>
        </div>
        
    )
}



