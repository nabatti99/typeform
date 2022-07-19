import { useContext, useState } from "react";
import appActions from "../context/appActions";
import { appContext } from "../context/appContext";
import { isNotNull } from "../helper/validation";

export default function Page3() {
  const { dispatch } = useContext(appContext);

  const [answer, setAnswer] = useState(null);
  const handleAnswerChanged = (newAnswer) => {
    setAnswer(newAnswer);
  };

  const handleButtonClicked = () => {
    dispatch({
      type: appActions.CHANGE_PAGE,
      payload: 3,
    });
    dispatch({
      type: appActions.CHANGE_ANSWER,
      payload: {
        name: answer,
      },
    });
  };

  return (
    <div className="container h-100">
      <div className="row justify-content-center align-items-center h-100">
        <div className="col">
          <div className="row justify-content-end">
            <div className="col-auto">
              <img src="main.png" className="img-fluild animate__animated animate__fadeIn" width="100px" />
            </div>
          </div>
          <div className="row">
            <div className="col-auto">
              <h4 className="text-yellow-light animate__animated animate__fadeInUp">1</h4>
            </div>
            <div className="col">
              <div className="row">
                <div className="col-auto">
                  <h4 className="text-yellow animate__animated animate__fadeInUp">Tên của bạn là gì?</h4>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-top-0 border-start-0 border-end-0 px-0 fs-2 animate__animated animate__fadeInUp"
                    value={answer}
                    placeholder="Trả lời vào đây nhé..."
                    onChange={(event) => handleAnswerChanged(event.target.value)}
                  />
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-auto">
                  <button className="btn btn-lg btn-yellow animate__animated animate__fadeIn animate__delay-1s" onClick={handleButtonClicked} disabled={!answer}>
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
