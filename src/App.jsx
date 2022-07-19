import { useContext, useEffect } from "react";
import appActions from "./context/appActions";
import { appContext } from "./context/appContext";
import pageIndex from "./pages/pageIndex";

function App() {
  const {
    value: { currentPage },
    dispatch,
  } = useContext(appContext);

  return (
    <div
      className="container-fluid vh-100 py-5 overflow-auto"
      style={{
        backgroundImage: "url('bg.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {pageIndex[currentPage]}
    </div>
  );
}

export default App;
