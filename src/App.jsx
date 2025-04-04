import { Route, Routes } from "react-router-dom";
import Nav from "./components/nav";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Detail from "./components/detail";
import Shop from "./components/shop";
import Cart from "./components/cart";
import Home from "./components/home";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <NavBar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/detail" element={<Detail />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
