import { NavLink, useLocation, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import FilterProduct from "./ProductFilter";
const ProductPage = () => {
    const location=useLocation()
  const navigate = useNavigate();
  const prams = useParams();
  const handleChange = (e) => {
    const filter = e.target.value;
    navigate(`/product/${prams.category}/${filter}`);
  };
  const handleClick = (e) => {
    navigate(`/product/${e}`);
  };
  return (
    <div>
      <nav>
        <div>
          <button onClick={() => handleClick("computer")}>Computer</button>
        </div>
        <div>
          <button onClick={() => handleClick("desk")}>Desk</button>
        </div>
        <div>
          <button onClick={() => handleClick("hardware")}>Hardware</button>
        </div>
        <div>
          {" "}
          <button onClick={() => handleClick("electronic")}>
            electroniscs
          </button>
        </div>
      </nav>
      <FilterProduct handleChange={handleChange} />
      <div>here you prame:{prams.category}</div>
      <div>Ypur location is {location.pathname}</div>
    </div>
  );
};
export default ProductPage;
