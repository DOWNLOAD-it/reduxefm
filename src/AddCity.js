import { useState } from "react";
import { useDispatch } from "react-redux";
import addCity from "./redux/actions/addCityAction";
import { useNavigate } from "react-router";

const AddCity = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [code, setCode] = useState(0);
  const [name, setName] = useState("");
  const [isCapital, setIsCapital] = useState(false);

  const handleCodeChange = (e) => {
    e.target.value !== "" ? setCode(parseInt(e.target.value)) : setCode(0);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleIsCapitalChange = (e) => {
    setIsCapital(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let city = {
      name: name,
      capitale: isCapital,
    };
    dispatch(addCity(code, city));
    navigate("/");
  };

  return (
    <div className="add-city">
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>country code</td>
              <td>
                <input type="number" value={code} onChange={handleCodeChange} />
              </td>
            </tr>
            <tr>
              <td>city name</td>
              <td>
                <input type="text" value={name} onChange={handleNameChange} />
              </td>
            </tr>
            <tr>
              <td>is capital</td>
              <td>
                <input
                  type="checkbox"
                  checked={isCapital}
                  onChange={handleIsCapitalChange}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <button type="submit">Add City</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default AddCity;
