import './assets/css/bootstrap.min.css'
import './assets/css/tiny-slider.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from "./Components/Header";
import Home from './Pages/Home';
import Footer from './Components/Footer';
import Products from './Pages/Products';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import WishList from './Components/WishList'
import Login from './Pages/Login';
import Register from './Pages/Register'
import Admin from './Admin/Admin';
import HeaderAdmin from './Admin/HeaderAdmin';
import LoginAdmin from './Admin/LoginAdmin';
import Registeradmin from './Admin/Registeradmin';
import Checkout from './Pages/Checkout';
import ProductsSort from './Pages/ProductsSort';
import OrderList from './Admin/OrderList';
import OrderDetails from './Admin/OrderDetails';
import CustomerOrders from './Pages/customerOrders';
import ProductList from './Admin/ProductList';
import CreateProduct from './Admin/CreateProduct';
import CreateCategory from './Admin/CreateCategory'
import CustomerOrderDetails from './Pages/CustomerOrderDetails';
import CategoryList from './Admin/CategoryList'


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={
          <>
            <Header />
            <Login />
            <Footer />
          </>
        } />

        <Route path='/register' element={
          <>
            <Header />
            <Register />
            <Footer />
          </>
        } />

        <Route path='/' element={
          <>
            <Header />
            <Home />
            <Footer />
          </>
        }
        />

        <Route path='/products'
          element={
            <>
              <Header />
              <Products />
              <Footer />
            </>
          }
        />

        <Route path='/product/:id'
          element={
            <>
              <Header />
              <Product />
              <Footer />
            </>
          }
        />

        <Route path='/cart' element={
          <>
            <Header />
            <Cart />
            <Footer />
          </>
        } />

        <Route path='/wishlist' element={
          <>
            <Header />
            <WishList />
            <Footer />
          </>
        } />

        <Route path='/checkout' element={
          <>
            <Header />
            <Checkout />
            <Footer />
          </>
        } />

        <Route path='/products/:category' element={
          <>
            <Header />
            <ProductsSort />
            <Footer />
          </>
        } />

        <Route path='/orders' element={
          <>
            <Header />
            <CustomerOrders />
            <Footer />
          </>
        } />

        <Route path='/order/:id' element={
          <>
            <Header />
            <CustomerOrderDetails />
            <Footer />
          </>
        } />
        <Route path='/admin' element={
          <>
            <HeaderAdmin />
            <Admin />
          </>
        } />

        <Route path='/admin/login' element={
          <>
            <HeaderAdmin />
            <LoginAdmin />
          </>
        } />

        <Route path='/admin/register' element={
          <>
            <HeaderAdmin />
            <Registeradmin />
          </>
        } />

        <Route path='/admin/products' element={
          <>
            <HeaderAdmin />
            <ProductList />
          </>
        } />

        <Route path='/admin/createproduct' element={
          <>
            <HeaderAdmin />
            <CreateProduct />
          </>
        } />

        <Route path='/admin/categories'
          element={
            <>
              <HeaderAdmin />
              <CategoryList />
            </>
          }
        />

        <Route path='/admin/createcategories' element={
          <>
            <HeaderAdmin />
            <CreateCategory />
          </>
        } />

        <Route path='/admin/orders' element={
          <>
            <HeaderAdmin />
            <OrderList />
          </>
        } />

        <Route path='/admin/order/:/id' element={
          <>
            <HeaderAdmin />
            <OrderDetails />
          </>
        } />

      </Routes>
    </Router>
  );
}

export default App;
