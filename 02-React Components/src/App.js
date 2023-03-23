import './App.css';
import Image from './Image/Healthy_Food.jpg';

function App()
{
   return(
      <div className="App">
        <h1>Healthy Diet</h1>
<img src={Image} className="Image" alt="" />
<figure className="Caption">"Good Food Good Mood"</figure>
        </div>
 )  
}
export default App;
