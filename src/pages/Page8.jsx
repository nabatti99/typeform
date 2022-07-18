import { useContext, useState } from "react";
import appActions from "../context/appActions";
import { appContext } from "../context/appContext";

export default function Page8() {
  const { dispatch } = useContext(appContext);

  const [answer, setAnswer] = useState(null);
  const handleAnswerChanged = (newAnswer) => {
    setAnswer(newAnswer);
  };

  const handleButtonClicked = () => {
    dispatch({
      type: appActions.CHANGE_PAGE,
      payload: 8,
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
              <h5 className="text-yellow-light">6</h5>
            </div>
            <div className="col">
              <div className="row">
                <div className="col-auto">
                  <h5 className="text-yellow">Vậy người truyền cho bạn nhiều động lực nhất là ai? (Nhập tên 3 người).</h5>
                </div>
              </div>
              <div className="row">
                <div className="col-auto">
                  <h5 className="text-yellow fst-italic text-opacity-25">
                    Điều kiện: Người mà truyền cảm hứng cho bạn, có thể họ là lý do mà bạn tham gia Hugo, hoặc họ mang đến cho bạn và mọi người xung quanh một nguồn năng lượng tích
                    cực.
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
