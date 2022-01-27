import { useState } from 'react'
import './AdDesigner.css'

export function AdDesigner(){

    const [flavor, setFlavor] = useState("strawberry")

    const [size, setSize] = useState(30)

    const[theme, setTheme] = useState(false)
    // const[isLight, setIsLight] = useState

    //FUNCTION setFlavor(flavor:string){setFlavor(flavor)}  then pass an arrow function onclick={()=> setFlavor('choclate')}
    function updateFlavor(e:any){
            setFlavor(e.target.value)
    }

    function increaseSize(){
      
          setSize(size + 1)
    }

    function decreaseSize(){
      
        setSize(size - 1)
  }

  //function setTheme(isLightTheme:boolean){setIsLightTheme()}


  function updateSize(){
      setSize(size)
  }

  const style = {fontSize: size + "px"}

  

    return(
            <div className='adDesigner'>
                        <h1>Ad Designer</h1>
                        <div className= {theme ? "dark" : "light"}>
                                Vote For 
                                <h2 style={style}> {flavor} </h2>
                        </div>

                        <h3>What to Support</h3>

                        <button onClick={updateFlavor} className='button' value="Chocolate"> Chocolate </button>
                        <button onClick={updateFlavor} className='button' value= "Vanilla"> Vanilla </button>
                        <button onClick={updateFlavor} className='button' value="Strawberry"> Strawberry </button>

                        <h3> Color Theme</h3>

                        <button onClick={() => setTheme(false)} className='button'> Light </button>
                        <button onClick={() => setTheme(true)} className='button'> Dark </button>

                        <h3> Font Size </h3>

                        <div className='buttonBoxAd'>
                        <button className='button' onClick={decreaseSize}>Down</button>
                        <h4 onChange={updateSize}>{size}</h4> 
                        <button className='button' onClick={increaseSize} >Up</button>

                        </div>
            </div>
            
    )
}



