import { useContext, useState } from "react";
import Logo from "../components/Logo";
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
        q4: {
          name: "Vậy người truyền cho bạn nhiều động lực nhất là ai? (Nhập tên 3 người)",
          answer,
        },
      },
    });
  };

  return (
    <div className="container h-100 position-relative">
      <Logo />
      <div className="row justify-content-center align-items-center h-100">
        <div className="col">
          <div className="row">
            <div className="col-auto">
              <h4 className="text-yellow-light animate__animated animate__fadeInUp">6</h4>
            </div>
            <div className="col">
              <div className="row">
                <div className="col-auto">
                  <h4 className="text-yellow animate__animated animate__fadeInUp">Vậy người truyền cho bạn nhiều động lực nhất là ai? (Nhập tên 3 người).</h4>
                </div>
              </div>
              <div className="row">
                <div className="col-auto">
                  <h5 className="text-yellow fst-italic text-opacity-25 animate__animated animate__fadeIn animate__slow">
                    Điều kiện: Người mà truyền cảm hứng cho bạn, có thể họ là lý do mà bạn tham gia Hugo, hoặc họ mang đến cho bạn và mọi người xung quanh một nguồn năng lượng tích
                    cực.
                  </h5>
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
