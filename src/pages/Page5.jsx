import { useContext, useState } from "react";
import appActions from "../context/appActions";
import { appContext } from "../context/appContext";

export default function Page5() {
  const { dispatch } = useContext(appContext);

  const [answer, setAnswer] = useState(null);
  const handleAnswerChanged = (newAnswer) => {
    setAnswer(newAnswer);
  };

  const handleButtonClicked = () => {
    dispatch({
      type: appActions.CHANGE_PAGE,
      payload: 5,
    });

    dispatch({
      type: appActions.CHANGE_ANSWER,
      payload: {
        q3: answer,
      },
    });
  };

  return (
    <div className="container h-100">
      <div className="row justify-content-center align-items-center h-100">
        <div className="col">
          <div className="row">
            <div className="col-auto">
              <h5 className="text-yellow-light">3</h5>
            </div>
            <div className="col">
              <div className="row">
                <div className="col-auto">
                  <h5 className="text-yellow">Theo bạn thành viên nào hài hước nhất Hugo? (Hãy nhập tên 3 người).</h5>
                </div>
              </div>
              <div className="row">
                <div className="col-auto">
                  <h5 className="text-yellow fst-italic text-opacity-25">
                    Điều kiện: Đó là người hay pha trò, làm cho không khí buổi sinh hoạt trở nên vui vẻ, thoải mái. Hoặc chỉ đơn giản cứ thấy người đó là bạn đã thấy buồn cười rồi.
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
                  <button className="btn btn-lg btn-yellow" onClick={handleButtonClicked}>
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
