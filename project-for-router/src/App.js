import { Routes ,Route} from 'react-router-dom';
import './App.css';
import Home from "./pages/Home"
import ProductDetail from './pages/ProductDetail';
import Products from './pages/Products';
function App() {
  return (
    <Routes>
    <Route path={"/"} element={<Home/>}/>
    <Route path={"/products"}  element={<Products />}/>
    <Route path={"/products/:id"}  element={<ProductDetail/>}/>
 </Routes>
 
  );
}

export default App;
