import { useContext, useState } from "react";
import Logo from "../components/Logo";
import appActions from "../context/appActions";
import { appContext } from "../context/appContext";

export default function Page7() {
  const { dispatch } = useContext(appContext);

  const [answer, setAnswer] = useState(null);
  const handleAnswerChanged = (newAnswer) => {
    setAnswer(newAnswer);
  };

  const handleButtonClicked = () => {
    dispatch({
      type: appActions.CHANGE_PAGE,
      payload: 7,
    });

    dispatch({
      type: appActions.CHANGE_ANSWER,
      payload: {
        q3: {
          name: "Trong Hugo cặp đôi nào khiến bạn ấn tượng nhất? (Hãy nhập tên 3 cặp đôi)",
          answer,
        },
      },
    });
  };

  return (
    <div className="row flex-column h-100">
      <div className="col-auto">
        <Logo style="animate__animated animate__fadeIn" />
      </div>
      <div className="col">
        <div className="row flex-column justify-content-center h-100">
          <div className="col-auto">
            <div className="row">
              <div className="col-auto">
                <h4 className="text-yellow-light animate__animated animate__fadeInUp">5</h4>
              </div>
              <div className="col">
                <div className="row">
                  <div className="col-auto">
                    <h4 className="text-yellow animate__animated animate__fadeInUp">Trong Hugo cặp đôi nào khiến bạn ấn tượng nhất? (Hãy nhập tên 3 cặp đôi).</h4>
                  </div>
                </div>
                <div className="row">
                  <div className="col-auto">
                    <h5 className="text-yellow fst-italic text-opacity-25 animate__animated animate__fadeIn animate__slow">
                      Điều kiện: Cặp đôi hoàn hảo, không chỉ là người yêu mà cũng có thể là cặp đôi mà bạn thấy ăn ý với nhau ở trong câu lạc bộ, hay đơn giản cặp đó gây ấn tượng
                      mạnh với bạn nhất.
                    </h5>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <textarea
                      type="text"
                      className="form-control border-top-0 border-start-0 border-end-0 px-0 fs-2 animate__animated animate__fadeInUp"
                      value={answer}
                      rows={3}
                      placeholder=" Cặp đôi số 1...
                    Cặp đôi số 2...
                    Cặp đôi số 3..."
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
    </div>
  );
}
