import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import modifyPopulation from "./redux/actions/modifyPopulationAction";

const ModifyPopulation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [code, setCode] = useState(0);
  const [population, setPopulation] = useState(0);

  const handleCodeChange = (e) => {
    e.target.value !== "" ? setCode(parseInt(e.target.value)) : setCode(0);
  };

  const handlePopulationChange = (e) => {
    e.target.value !== ""
      ? setPopulation(parseInt(e.target.value))
      : setPopulation(0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(modifyPopulation(code, population));
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
                <input
                  type="number"
                  value={code}
                  onChange={handleCodeChange}
                  className="input-field"
                />
              </td>
            </tr>
            <tr>
              <td>population</td>
              <td>
                <input
                  type="number"
                  value={population}
                  onChange={handlePopulationChange}
                  className="input-field"
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <button type="submit" className="submit-button">
                  Modify population
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default ModifyPopulation;
