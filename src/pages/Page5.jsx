import { useContext, useState } from "react";
import DropStars from "../components/DropStars";
import Logo from "../components/Logo";
import MultipleChoices from "../components/MultipleChoices";
import appActions from "../context/appActions";
import { appContext } from "../context/appContext";
import { theJokers } from "../services/posters";

export default function Page5() {
  const {
    value: { answer },
    dispatch,
  } = useContext(appContext);

  const choices = [
    {
      value: "Nguyễn Quang Trường Phước",
      theme: "red",
    },
    {
      value: "Huỳnh Kim Hoàng",
      theme: "blue",
    },
    {
      value: "Mai Thùy Chiêu",
      theme: "red",
    },
    {
      value: "Lê Cao Dương",
      theme: "blue",
    },
    {
      value: "Đào Duy Anh",
      theme: "yellow",
    },
  ];
  const [currentChoices, setCurrentChoices] = useState(answer.jokers || []);
  const handleChoiceChanged = (choices) => {
    setCurrentChoices(choices);
  };

  const handleButtonClicked = () => {
    dispatch({
      type: appActions.CHANGE_PAGE,
      payload: 5,
    });

    dispatch({
      type: appActions.CHANGE_ANSWER,
      payload: {
        jokers: currentChoices,
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
              <div className="col-lg-4 col-md-6 col-10">
                <div className="row flex-column h-100">
                  <div className="col-auto">
                    <div className="row">
                      <div className="col-auto">
                        <h4 className="text-yellow-light animate__animated animate__fadeInUp">3</h4>
                      </div>
                      <div className="col">
                        <div className="row">
                          <div className="col-auto">
                            <h4 className="text-yellow animate__animated animate__fadeInUp">Theo bạn, đâu là thành viên vui tính nhất Hugo?</h4>
                            <h5 className="text-yellow fst-italic text-opacity-50 animate__animated animate__fadeIn animate__slow">Chọn tối đa 2 trong 5 cái tên dưới đây</h5>
                          </div>
                        </div>

                        <MultipleChoices choices={choices} onChoicesChange={handleChoiceChanged} currentChoices={currentChoices} maxChoices={2} />

                        <div className="row mt-3">
                          <div className="col-auto">
                            <button
                              className="btn btn-lg btn-yellow animate__animated animate__fadeIn animate__delay-1s"
                              onClick={handleButtonClicked}
                              disabled={!currentChoices || currentChoices.length != 2}
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
                          JOKER
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-6 col-12">
                <div className="row h-100">
                  <div className="col">
                    <div className="row flex-column h-100">
                      <div className="col">
                        <DropStars style="h-100 animate__animated animate__fadeIn" theme={currentChoices[0]?.theme} direction="top">
                          <div className="row flex-column justify-content-end h-100">
                            <div className="col-auto">
                              {currentChoices[0] && (
                                <img
                                  src={theJokers[currentChoices[0].value]}
                                  className={`img-fluid border border-${currentChoices[0].theme} animate__animated animate__fadeInUp`}
                                />
                              )}
                            </div>
                          </div>
                        </DropStars>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="row flex-column h-100">
                      <div className="col">
                        <DropStars style="h-100 animate__animated animate__fadeIn" theme={currentChoices[1]?.theme} direction="bottom">
                          <div className="row flex-column justify-content-start h-100">
                            <div className="col-auto">
                              {currentChoices[1] && (
                                <img
                                  src={theJokers[currentChoices[1].value]}
                                  className={`img-fluid border border-${currentChoices[1].theme} animate__animated animate__fadeInDown`}
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
