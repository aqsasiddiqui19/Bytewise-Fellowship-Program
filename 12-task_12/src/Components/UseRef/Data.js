import { useRef } from 'react';

const Data = () => {
      const ref = useRef();
    const handleClick = () => {
        ref.current.style.backgroundColor = 'darkgreen';
        ref.current.style.padding = '5px';
        ref.current.style.color = 'white';
        ref.current.style.width = '100px';
        ref.current.style.height = '100px';
        ref.current.style.margin = '5px';
        ref.current.style.borderRadius = '10px';};
  
    return (
        <div style={{textAlign:"center"}}>
            <h2>Welcome To Page </h2>
            <button onClick={handleClick}>
                Enable dark mode
            </button>
            <div ref={ref}>Styling </div>
        </div>
    );
};
  
export default Data;