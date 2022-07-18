import { useContext } from "react";
import appActions from "../context/appActions";
import { appContext } from "../context/appContext";

export default function Page10() {
  const { dispatch } = useContext(appContext);

  const handleButtonClicked = () => {};

  return (
    <div className="container h-100">
      <div className="row justify-content-center align-items-center h-100">
        <div className="col">
          <div className="row align-items-center">
            <div className="col-6">
              <img src="main.png" className="img-fluid" />
            </div>
            <div className="col-6">
              <div className="row g-3">
                <div className="col-auto">
                  <h4 className="text-yellow-light">"</h4>
                </div>
                <div className="col">
                  <h3 className="text-yellow">Cảm ơn bạn đã bình chọn nhé !</h3>
                  <div className="row mt-5">
                    <div className="col-auto">
                      <button className="btn btn-lg btn-yellow" onClick={handleButtonClicked}>
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
