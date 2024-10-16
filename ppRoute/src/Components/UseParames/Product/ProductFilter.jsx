import { useNavigate } from "react-router"
const FilterProduct=({handleChange})=>{
    return(
        <select name="" onChange={handleChange}  id="">
            <option>Price</option>
            <option value="low to high">low to high</option>
            <option value="Hign to low">High to low</option>
        </select>
    )
}
export default FilterProduct