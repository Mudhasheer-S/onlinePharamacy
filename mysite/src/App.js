import { Route, Routes } from "react-router-dom";
import HomePage from "./componentsForProject/HomePage";
import LoginForm from "./componentsForProject/loginForm";
import SignUp from "./componentsForProject/Register";
import ProductDetail from "./componentsForProject/ProductDetail";
import ManageProfile from "./componentsForProject/ManageProfile";
import OrderPage from "./componentsForProject/OrderPage";
import MyCart from "./componentsForProject/MyCart";
import AboutUs from "./componentsForProject/AboutUs";
import ContactUs from "./componentsForProject/Contact";
import FAQ from "./componentsForProject/FAQ";
import Products from "./componentsForProject/Products";
import NeedHelp from "./componentsForProject/NeedHelp";

function App() {
  return (
    <div>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/Profile" element={<ManageProfile />} />
        <Route path="/Orders" element={<OrderPage />} />
        <Route path="/MyCart" element={<MyCart />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/NeedHelp" element={<NeedHelp />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/ProductDetail/:idValue" Component={ProductDetail} element={<ProductDetail />} />
    </Routes>
    </div> 
  );
}

export default App;
