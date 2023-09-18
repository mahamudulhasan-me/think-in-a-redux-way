import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  const [showHome, setShowHome] = useState(true);
  return (
    <div>
      {/* Navbar  */}
      <Navbar setShowHome={setShowHome} />
      {/* main/home  */}
      {showHome ? <Home /> : <Cart />}
    </div>
  );
};

export default App;
