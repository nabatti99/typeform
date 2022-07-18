import { useContext } from "react";
import { appContext } from "./context/appContext";
import pageIndex from "./pages/pageIndex";

function App() {
  const {
    value: { currentPage },
  } = useContext(appContext);

  return (
    <div
      className="container-fluid vh-100"
      style={{
        backgroundImage: "url('bg.jpg')",
      }}
    >
      {pageIndex[currentPage]}
    </div>
  );
}

export default App;
