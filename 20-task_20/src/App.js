//import logo from './logo.svg';
import './App.css';
import { motion } from "framer-motion";
import star1 from "./Images/star-1.svg";
import star2 from "./Images/star-2.svg";
import star3 from "./Images/star-3.svg";
import star4 from "./Images/star-4.svg";
import planet1 from "./Images/planet-1.svg";
import planet2 from "./Images/planet-2.svg";
import sphereLeft from "./Images/sphere-1.svg";
import sphereRight from "./Images/sphere-2.svg";

function App() {
  const planetVariants = {
    visible: {
      opacity: 1,
      y: 10,
      transition: {
        opacity: {
          duration: 2,
          ease: "easeInOut",
          delay: 2,
        },
        y: {
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 4
        }
      }
    },
    hidden: { opacity: 0 }
  }
  return (
    <div className="App">
      <header className="App-header">
        <img 
          src={sphereLeft}
          className="sphere-left"
          alt="sphere left"
        />
        <img 
          src={sphereRight}
          className="sphere-right"
          alt="sphere right"
        />
        <div className='hero-container'>
          <motion.img 
            src={star1}
            animate={{ scale: 2 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
            className="star-1 star"
            alt="star 1"
          />
          <motion.img 
            src={star2}
            animate={{ scale: 2 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
            className="star-2 star"
            alt="star 2"
          />
          <motion.img 
            src={star3}
            animate={{ scale: 2 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
            className="star-3 star"
            alt="star 3"
          />
         <motion.img 
            src={star4}
            animate={{ scale: 2 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
            className="star-4 star"
            alt="star 4"
          />
        <motion.h1
          initial={{ opacity: 0}}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
       "The Universe is made of stories,
          <br></br>
        not of atoms."
          </motion.h1>
        </div>
        <motion.img
          variants={planetVariants}
          initial="hidden"
          animate="visible"
          src={planet1}
          className="planet-1"
          alt="planet left"
        />
        <motion.img
          variants={planetVariants}
          initial="hidden"
          animate="visible"
          src={planet2}
          className="planet-2"
          alt="planet right"
        />
      </header>
    </div>
  );
}

export default App;
