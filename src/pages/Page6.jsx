import { useContext, useState } from "react";
import Logo from "../components/Logo";
import appActions from "../context/appActions";
import { appContext } from "../context/appContext";

export default function Page6() {
  const {
    value: { answer },
    dispatch,
  } = useContext(appContext);

  const [tempAnswer, setTempAnswer] = useState(answer.q2?.answer);
  const handleAnswerChanged = (newAnswer) => {
    setTempAnswer(newAnswer);
  };

  const handleButtonClicked = () => {
    dispatch({
      type: appActions.CHANGE_PAGE,
      payload: 6,
    });

    dispatch({
      type: appActions.CHANGE_ANSWER,
      payload: {
        q2: {
          name: "Trong Hugo thành viên nào là người năng nổ nhất? (Hãy nhập tên 3 người)",
          answer: tempAnswer,
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
                <h4 className="text-yellow-light animate__animated animate__fadeInUp">4</h4>
              </div>
              <div className="col">
                <div className="row">
                  <div className="col-auto">
                    <h4 className="text-yellow animate__animated animate__fadeInUp">Trong Hugo thành viên nào là người năng nổ nhất? (Hãy nhập tên 3 người).</h4>
                  </div>
                </div>
                <div className="row">
                  <div className="col-auto">
                    <h5 className="text-yellow fst-italic text-opacity-25 animate__animated animate__fadeIn animate__slow">
                      Điều kiện: Là giải thưởng dành cho thành viên năng nổ, đóng góp nhiều nhất trong câu lạc bộ (Có thể bạn đó tham gia hầu hết các hoạt động Hugo hay có đóng góp
                      nhiều cho team và câu lạc bộ).
                    </h5>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control border-top-0 border-start-0 border-end-0 px-0 fs-2 animate__animated animate__fadeInUp"
                      value={tempAnswer}
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
    </div>
  );
}
