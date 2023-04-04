import React,{useState,useEffect} from 'react'
function EffectHook(){
const [count, setCount] = useState(0);


useEffect(() => {
    let timer = setTimeout(() => {
    setCount((count) => count + 1);
  }, 1000);

  return () => clearTimeout(timer)
  }, []);

  return <h1>Practice of Math{count} Times Only</h1>;
}

export default EffectHook