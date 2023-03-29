import React, {useState}from 'react'

const UseState = () => {
        const [color, setColor] = useState("red");
      
        return (
          <>
            <h1>My favorite color is {color}!</h1>
            <button className='Button'
              onClick={() => setColor("blue")}
            >Click</button>
          </>
        )
      }
      
     export default UseState








