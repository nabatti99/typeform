import { useContext } from "react";
import appActions from "../context/appActions";
import { appContext } from "../context/appContext";
import { importHTMLText } from "../helper/text.helper";

export default function Page2() {
  const { dispatch } = useContext(appContext);

  const handleButtonClicked = () => {
    dispatch({
      type: appActions.CHANGE_PAGE,
      payload: 2,
    });
  };

  return (
    <div className="container h-100">
      <div className="row justify-content-center align-items-center h-100">
        <div className="col">
          <div className="row align-items-center">
            <div className="col-md-6 col-12 mb-5">
              <img src="main.png" className="img-fluid animate__animated animate__fadeIn" />
            </div>
            <div className="col-md-6 col-12">
              <div className="row g-3">
                <div className="col-auto">
                  <h4 className="text-yellow-light animate__animated animate__fadeIn">"</h4>
                </div>
                <div className="col">
                  <h5
                    className="text-yellow animate__animated animate__fadeInRight"
                    dangerouslySetInnerHTML={{
                      __html: importHTMLText(
                        "🏆Sự kiện Hugo Award 2022, nhằm vinh danh những cá nhân xuất sắc và có nhiều đóng góp trong năm qua, với 5 hạng mục chính bao gồm:\n\n🎗Best Member\n🎗The Joker\n🎗The Perfect Duo\n🎗The Rookie\n🎗The Inspirer\n-----------------------------------\n\n✅Sự kiện sẽ diễn ra từ ngày 18/7/2022 đến 31/7/2022, trong đó:\n\n👉Vòng 1 (18.7 đến 24.7)\nCác thành viên tham gia bình chọn 3 cá nhân/cặp đôi yêu thích của mình tại mỗi hạng mục.\n\n👉Vòng 2 (25.7 đến 28.7)\nỞ mỗi hạng mục, ban tổ chức sẽ chọn ra 5 cá nhân/cặp đôi có số bình chọn cao nhất ở vòng 1 và đáp ứng một số tiêu chí đề ra của BTC. Thành viên tham gia bình chọn mỗi hạng mục để tìm ra những cá nhân xứng đáng cuối cùng.\n\n👉Đêm trao giải Hugo Award sẽ diễn ra vào tối Chủ nhật, 31.7.2022, đi cùng với đó là Hugo Birthday, buổi tiệc sinh nhật của CLB Hugo.\n\n🕘Deadline vòng 1: 23:59 (24.7.2022)"
                      ),
                    }}
                  ></h5>
                  <div className="row mt-5">
                    <div className="col-auto">
                      <button className="btn btn-lg btn-yellow animate__animated animate__fadeIn animate__delay-1s" onClick={handleButtonClicked}>
                        Got it!
                      </button>
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
