import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import Cart from "./components/Cart";
import BooksAdmin from "./components/BookAdmin/BooksAdmin";
import UpdateBook from "./components/UpdateBook";
import Cancel from "./components/Cancel";
import Success from "./components/Success";
import Login from "./components/Login/Login";
import RegistrationPage from "./components/Register/Register";
import MyProfile from "./components/BookUser/MyProfile";
import PaymentPage from './components/PaymentPage';
import CheckoutForm  from "./components/CheckoutForm";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <React.Fragment >
      <header>
        <Header/>
      </header>
      
    <main>
      <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path="/add" element={<AddBook/>} exact />
        <Route path="/books" element={<BooksAdmin/>} exact />
        <Route path="/cart" element={<Cart/>} exact />
        <Route path="/books/:id" element={<UpdateBook/>} exact />
        <Route path="/cancel" element={<Cancel/>} exact />
        <Route path="/success" element={<Success/>} exact />
        <Route path="/login" element={<Login/>} exact />
        <Route path="/register" element={<RegistrationPage/>} exact />
        <Route path="/myprofile" element={<MyProfile/>} exact />
        <Route path="/PaymentPage"element={<PaymentPage/>}/>
        <Route path="/CheckoutForm" element={<CheckoutForm />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Footer" element={<Footer/>} />
      </Routes>
    </main>
    <br></br>
    <br></br>
    <Footer/>
    </React.Fragment>
  );
}

export default App;
