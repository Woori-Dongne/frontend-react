import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdditionalInformation from "./pages/AdditionalInformation";
import Chat from "./pages/Chat";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import Main from "./pages/Main";
import MyPage from "./pages/MyPage";
import Writing from "./pages/Writing";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/add" element={<AdditionalInformation />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/404" element={<ErrorPage />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
