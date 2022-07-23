import { useContext, useState } from "react";
import Logo from "../components/Logo";
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
        q1: {
          name: "Theo bạn thành viên nào hài hước nhất Hugo? (Hãy nhập tên 3 người)",
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
                <h4 className="text-yellow-light animate__animated animate__fadeInUp">3</h4>
              </div>
              <div className="col">
                <div className="row">
                  <div className="col-auto">
                    <h4 className="text-yellow animate__animated animate__fadeInUp">Theo bạn thành viên nào hài hước nhất Hugo? (Hãy nhập tên 3 người).</h4>
                  </div>
                </div>
                <div className="row">
                  <div className="col-auto">
                    <h5 className="text-yellow fst-italic text-opacity-25 animate__animated animate__fadeIn animate__slow">
                      Điều kiện: Đó là người hay pha trò, làm cho không khí buổi sinh hoạt trở nên vui vẻ, thoải mái. Hoặc chỉ đơn giản cứ thấy người đó là bạn đã thấy buồn cười
                      rồi.
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
    </div>
  );
}
