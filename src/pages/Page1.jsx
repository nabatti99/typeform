import { useContext } from "react";
import appActions from "../context/appActions";
import { appContext } from "../context/appContext";
import { signIn } from "../helper/gSpreadSheet";

export default function Page1() {
  const { dispatch } = useContext(appContext);

  const handleButtonClicked = () => {
    // signIn().then(console.log);
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
            <div className="col-auto animate__animated animate__fadeIn">
              <img src="main.png" className="img-fluid" />
            </div>
          </div>
          <div className="row justify-content-center mt-4">
            <div className="col-auto">
              <h3 className="text-uppercase text-yellow animate__animated animate__fadeInUp">HUGO AWARD 2022</h3>
            </div>
          </div>

          <div className="row g-1 justify-content-center align-items-center mt-1">
            <div className="col-auto">
              <h5 className="d-sm-block d-none">🔥</h5>
            </div>
            <div className="col-auto">
              <h5 className="text-uppercase text-center text-yellow text-opacity-50 animate__animated animate__fadeInUp animate__slow">HUGO ENGLISH CLUB - LIGHT UP YOUR FIRE</h5>
            </div>
            <div className="col-auto">
              <h5>🔥</h5>
            </div>
          </div>

          <div className="row justify-content-center mt-3">
            <div className="col-auto">
              <button className="btn btn-yellow btn-lg animate__animated animate__fadeIn animate__delay-1s" onClick={handleButtonClicked}>
                Start
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
