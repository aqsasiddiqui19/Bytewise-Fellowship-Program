import React from 'react'

//------------Arrow Function-----------// 
//const FunctionClick = () => {
//  return (
//    <div>
//        <button onClick={() => alert("Hello!")}>Say Hello</button>
//    </div>
//  )
//}
//export default FunctionClick


//const handleClick =   function (handleClick) {
 // function handleClick () {
//    console.log('Clicked')
//  }
//return (
//  <div>
//    <button onClick={handleClick}>Click</button>
 // </div>
//)
//}
//export default handleClick;


//----------------- Function(HandleClick)------------//

function FunctionClick() {
function handleClick() {
   alert('Hello');
}
  return (
   <div>
      <button onClick={handleClick}>Say Hello</button>
    </div>
  )
}

export default FunctionClick

//----------------- Function(handleMouseEnter)------------//

//function FunctionClick() {
//function handleMouseEnter () {
//alert ('clicked');
//}
//  return (
//    <div>
//      <button onMouseEnter={handleMouseEnter}>Click</button>
//    </div>
//  )
//}

//export default FunctionClick

// function FunctionClick() {
//    const handleButtonClick = (event) => {
//      event.stopPropagation();
//      alert('The button was clicked');
//    };
  
//    return (
//          <div>
//              <button onClick={handleButtonClick}>Click</button>
//           </div>
//          )
//  }

//export default FunctionClick




