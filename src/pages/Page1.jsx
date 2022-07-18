import { useContext } from "react";
import appActions from "../context/appActions";
import { appContext } from "../context/appContext";

export default function Page1() {
  const { dispatch } = useContext(appContext);

  const handleButtonClicked = () => {
    dispatch({
      type: appActions.CHANGE_PAGE,
      payload: 1,
    });
  };

  return (
    <div className="container h-100">
      <div className="row justify-content-center align-items-center h-100">
        <div className="col-auto">
          <div className="row">
            <div className="col-auto">
              <img src="main.png" className="img-fluid" />
            </div>
          </div>
          <div className="row justify-content-center mt-4">
            <div className="col-auto">
              <h3 className="text-uppercase text-yellow">HUGO AWARD 2022</h3>
            </div>
          </div>

          <div className="row justify-content-center mt-1">
            <div className="col-auto">
              <h5 className="text-uppercase text-yellow text-opacity-50">🔥HUGO ENGLISH CLUB - LIGHT UP YOUR FIRE🔥</h5>
            </div>
          </div>

          <div className="row justify-content-center mt-3">
            <div className="col-auto">
              <button className="btn btn-yellow btn-lg" onClick={handleButtonClicked}>
                Start
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
