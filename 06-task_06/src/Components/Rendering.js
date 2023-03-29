import React from 'react'

function Rendering() {
    const numbers = [1, 2, 3, 4, 5];
    return (
      <div>
        {
      numbers.map(number => (number) * 2)
    }
      </div>
    )
  }

  export default Rendering