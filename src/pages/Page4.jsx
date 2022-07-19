import { useContext, useState } from "react";
import appActions from "../context/appActions";
import { appContext } from "../context/appContext";

export default function Page4() {
  const { dispatch } = useContext(appContext);

  const [currentChoice, setCurrentChoice] = useState(null);
  const handleChoiceChanged = (newLabel) => {
    setCurrentChoice(newLabel);
  };

  const handleButtonClicked = () => {
    dispatch({
      type: appActions.CHANGE_PAGE,
      payload: 4,
    });

    dispatch({
      type: appActions.CHANGE_ANSWER,
      payload: {
        team: choices.find((choice) => choice.label === currentChoice).value,
      },
    });
  };

  const choices = [
    {
      label: "A",
      value: "Banana",
    },
    {
      label: "B",
      value: "Heroes Company",
    },
    {
      label: "C",
      value: "Power Rangers",
    },
    {
      label: "D",
      value: "Niffler",
    },
  ];

  return (
    <div className="container h-100">
      <div className="row justify-content-center align-items-center h-100">
        <div className="col">
          <div className="row">
            <div className="col-auto">
              <h4 className="text-yellow-light animate__animated animate__fadeInUp">2</h4>
            </div>
            <div className="col">
              <div className="row">
                <div className="col-auto">
                  <h4 className="text-yellow animate__animated animate__fadeInUp">Bạn đến từ?</h4>
                </div>
              </div>
              <div className="row text-yellow-light animate__animated animate__fadeIn animate__slow">
                <div className="col">
                  {choices.map((choice) => (
                    <div className="row my-2" key={choice.label}>
                      <div className="col-lg-4 col-md-6 col-10">
                        <div
                          className={`p-2 bg-yellow bg-opacity-10 border border-yellow-light _choice ${currentChoice === choice.label && "active"}`}
                          onClick={() => handleChoiceChanged(choice.label)}
                        >
                          <div className="row align-items-center g-3">
                            <div className="col-auto">
                              <h5 className="px-2 py-1 bg-yellow bg-opacity-10 mb-0 border border-yellow-light">{choice.label}</h5>
                            </div>
                            <div className="col">
                              <h5 className="mb-0">{choice.value}</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-auto">
                  <button className="btn btn-lg btn-yellow animate__animated animate__fadeIn animate__delay-1s" onClick={handleButtonClicked} disabled={!currentChoice}>
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
