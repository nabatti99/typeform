import { useContext, useState } from "react";
import appActions from "../context/appActions";
import { appContext } from "../context/appContext";

export default function Page6() {
  const { dispatch } = useContext(appContext);

  const [answer, setAnswer] = useState(null);
  const handleAnswerChanged = (newAnswer) => {
    setAnswer(newAnswer);
  };

  const handleButtonClicked = () => {
    dispatch({
      type: appActions.CHANGE_PAGE,
      payload: 6,
    });

    dispatch({
      type: appActions.CHANGE_ANSWER,
      payload: {
        q4: answer,
      },
    });
  };

  return (
    <div className="container h-100">
      <div className="row justify-content-center align-items-center h-100">
        <div className="col">
          <div className="row">
            <div className="col-auto">
              <h5 className="text-yellow-light">4</h5>
            </div>
            <div className="col">
              <div className="row">
                <div className="col-auto">
                  <h5 className="text-yellow">Trong Hugo thành viên nào là người năng nổ nhất? (Hãy nhập tên 3 người).</h5>
                </div>
              </div>
              <div className="row">
                <div className="col-auto">
                  <h5 className="text-yellow fst-italic text-opacity-25">
                    Điều kiện: Là giải thưởng dành cho thành viên năng nổ, đóng góp nhiều nhất trong câu lạc bộ (Có thể bạn đó tham gia hầu hết các hoạt động Hugo hay có đóng góp
                    nhiều cho team và câu lạc bộ).
                  </h5>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-top-0 border-start-0 border-end-0 px-0 fs-2"
                    value={answer}
                    placeholder="Trả lời vào đây nhé..."
                    onChange={(event) => handleAnswerChanged(event.target.value)}
                  />
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-auto">
                  <button className="btn btn-lg btn-yellow" onClick={handleButtonClicked} disabled={!answer}>
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
