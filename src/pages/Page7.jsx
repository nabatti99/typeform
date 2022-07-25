import { useContext, useState } from "react";
import DropStars from "../components/DropStars";
import Logo from "../components/Logo";
import MultipleChoices from "../components/MultipleChoices";
import appActions from "../context/appActions";
import { appContext } from "../context/appContext";
import { thePerfectDuos } from "../services/posters";

export default function Page7() {
  const {
    value: { answer },
    dispatch,
  } = useContext(appContext);

  const choices = [
    {
      value: "Huỳnh Kim Hoàng - Nguyễn Huỳnh Gia Bảo",
      theme: "red",
    },
    {
      value: "Nguyễn Đức Quang - Lê Cao Dương",
      theme: "blue",
    },
    {
      value: "Trần Quốc Tuấn - Nguyễn Văn Hiếu",
      theme: "purple",
    },
  ];
  const [currentChoices, setCurrentChoices] = useState(answer.perfectDuos || []);
  const handleChoiceChanged = (choices) => {
    setCurrentChoices(choices);
  };

  const handleButtonClicked = () => {
    dispatch({
      type: appActions.CHANGE_PAGE,
      payload: 7,
    });

    dispatch({
      type: appActions.CHANGE_ANSWER,
      payload: {
        perfectDuos: currentChoices,
      },
    });
  };

  return (
    <div className="row flex-column justify-content-center align-items-center h-100">
      <div className="col-auto">
        <Logo style="animate__animated animate__fadeIn" />
      </div>
      <div className="col">
        <div className="row flex-column justify-content-center h-100">
          <div className="col">
            <div className="row h-100">
              <div className="col-md-6 col-10">
                <div className="row flex-column h-100">
                  <div className="col-auto">
                    <div className="row">
                      <div className="col-auto">
                        <h4 className="text-yellow-light animate__animated animate__fadeInUp">5</h4>
                      </div>
                      <div className="col">
                        <div className="row">
                          <div className="col-auto">
                            <h4 className="text-yellow animate__animated animate__fadeInUp">Trong Hugo cặp đôi nào khiến bạn ấn tượng nhất?</h4>
                            <h5 className="text-yellow fst-italic text-opacity-50 animate__animated animate__fadeIn animate__slow">Chọn tối đa 1 trong 3 cặp đôi dưới đây</h5>
                          </div>
                        </div>

                        <MultipleChoices choices={choices} onChoicesChange={handleChoiceChanged} currentChoices={currentChoices} maxChoices={1} />

                        <div className="row mt-3">
                          <div className="col-auto">
                            <button
                              className="btn btn-lg btn-yellow animate__animated animate__fadeIn animate__delay-1s"
                              onClick={handleButtonClicked}
                              disabled={!currentChoices || currentChoices.length != 1}
                            >
                              OK
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="row flex-column justify-content-end h-100">
                      <div className="col-auto">
                        <h1 className="text-yellow fw-bold mb-0" style={{ fontSize: "4.5rem" }}>
                          THE
                        </h1>
                      </div>
                      <div className="col-auto">
                        <h1 className="text-yellow fw-bold" style={{ fontSize: "4.5rem" }}>
                          PERFECT DUO
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="row h-100">
                  <div className="col">
                    <div className="row flex-column h-100">
                      <div className="col">
                        <DropStars style="h-100 animate__animated animate__fadeIn" theme={currentChoices[0]?.theme} direction="top">
                          <div className="row flex-column justify-content-end h-100">
                            <div className="col-auto">
                              {currentChoices[0] && (
                                <img
                                  src={thePerfectDuos[currentChoices[0].value]}
                                  className={`img-fluid border border-${currentChoices[0].theme} animate__animated animate__fadeInUp`}
                                />
                              )}
                            </div>
                          </div>
                        </DropStars>
                      </div>
                    </div>
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
