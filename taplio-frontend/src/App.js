import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Pages/Home";
import LinkedIn from "./Pages/LinkedIn";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Subscription from "./Pages/Subscription";
import QueueComp from "./Components/Queue/QueueComp";
import ViralComp from "./Components/Viral/ViralComp";
import SearchModeComp from "./Components/SearchMode/SearchModeComp";
import Header from "./Components/Header/Header";

const App = () => {
  return (
    <div className="App w-full h-screen">
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/newBoard" element={<Subscription />} />
        <Route path="/cntlinkdin" element={<LinkedIn />} />
        <Route path="/home" element={<Home />}>
          <Route path="queue" element={<QueueComp />} />
          <Route path="viral" element={<ViralComp />} />
          <Route path="searchmode" element={<SearchModeComp />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
