import { useContext, useState } from "react";
import { appContext } from "../context/appContext";
import request from "../helper/request";

export default function Page10() {
  const {
    value: { answer },
  } = useContext(appContext);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasError, setHasError] = useState(null);

  const handleButtonClicked = () => {
    const answerKeys = Object.keys(answer);

    if (answerKeys.length === 0) {
      setHasError("Ohh. Bạn chưa trả lời câu hỏi nào luôn 🥺. Huhu 😭😭");
      return;
    }

    const isKeysValid = ["name", "q1", "q2", "q3", "q4", "q5", "team"].reduce((result, validKey) => result && answerKeys.includes(validKey), true);
    if (!isKeysValid) {
      setHasError("Bạn chưa trả lời hết các câu hỏi. Hãy quay lại đây khi bạn đã hoàn thành nhé 😊");
      return;
    }

    setHasError(null);

    request
      .post("answers.json", answer)
      .then(() => setIsSubmitted(true))
      .catch((reason) => alert(`Lỗi, hãy thử lại`));
    // alert(JSON.stringify(answer));
    // setIsSubmitted(true);
  };

  return (
    <div className="row justify-content-center align-items-center h-100">
      <div className="col">
        <div className="row align-items-center">
          <div className="col-md-6 col-12 mb-5">
            <img src="main.png" className="img-fluid animate__animated animate__fadeIn" />
          </div>
          <div className="col-md-6 col-12">
            <div className="row g-3 justify-content-md-start justify-content-center">
              <div className="col-auto">
                <h4 className="text-yellow-light animate__animated animate__fadeIn">"</h4>
              </div>
              <div className="col-md col-auto">
                <h3 className="text-yellow animate__animated animate__fadeIn animate__slow">Cảm ơn bạn đã bình chọn nhé!</h3>
                <div className="row justify-content-md-start justify-content-center mt-5">
                  <div className="col-auto">
                    <button className="btn btn-lg btn-yellow animate__animated animate__fadeInUp" onClick={handleButtonClicked} disabled={isSubmitted}>
                      Submit
                    </button>
                  </div>
                </div>

                {hasError && (
                  <div className="row justify-content-md-start justify-content-center mt-3 animate__animated animate__fadeIn">
                    <div className="col-auto">
                      <h5 className="text-yellow text-opacity-50">{hasError}</h5>
                    </div>
                  </div>
                )}
                {isSubmitted && (
                  <div className="row justify-content-md-start justify-content-center mt-3 animate__animated animate__fadeIn">
                    <div className="col-auto">
                      <h5 className="text-yellow text-opacity-50">Đã gửi câu trả lời</h5>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
