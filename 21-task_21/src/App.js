import "./App.css";
import ProductListing from "./Redux/component/ProductListing";
import Header from "./Redux/component/Header";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import ProductDetails from "./Redux/component/ProductDetails";
function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/"  element={<ProductListing/>}/>
          <Route path="/product/:productId" element={<ProductDetails/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
