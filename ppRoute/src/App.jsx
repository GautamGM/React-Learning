import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayOut from "./Components/UseParames/LayOut/layout";
import ProductPage from "./Components/UseParames/Product/Product";
import HomePage from "./Components/HomePage/homePage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route path="/"  element={<HomePage />}/>
          <Route path="/product/:category?/:id?" element={<ProductPage/>}/>
        </Route>
          <Route path="*" element="4040"/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
