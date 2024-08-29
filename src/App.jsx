
import { Routes,Route} from 'react-router-dom';
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Contact from "../src/pages/Contact";
import Login from "../src/pages/Login";
import Orders from "../src/pages/Orders";
import Cart from "../src/pages/Cart";
import Product from "../src/pages/Product";
import Collection from "../src/pages/Collection";
import PlaceOrders from "../src/pages/PlaceOrders";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
     
<Navbar/>
<ToastContainer/>
<SearchBar/>
<Routes>
  <Route path='/' element={<Home />}/>
  <Route path='/about' element={<About />}/>
  <Route path='/contact' element={<Contact />}/>
  <Route path='/login' element={<Login />}/>
  <Route path='/orders' element={<Orders />}/>
  <Route path='/cart' element={<Cart />}/>
  <Route path='/product/:productId' element={<Product/>}/>
  <Route path='/collection' element={<Collection />}/>
  <Route path='/place-order' element={<PlaceOrders />}/>

</Routes>
<Footer/>
    </div>
  )
}

export default App