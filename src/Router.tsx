import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Main from './pages/Main/Main';
import Writing from './pages/Writing';
import Chat from './pages/Chat';
import MyPage from './pages/MyPage';
import NotFound from './pages/NotFound';
import KakaoRedirect from './pages/Login/KakaoLogin/KakaoRedirect';
import { ChatProvider } from './components/ChatProvider/ChatProvider';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <ChatProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/kakaologin" element={<KakaoRedirect />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/main" element={<Main />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ChatProvider>
    </BrowserRouter>
  );
};

export default Router;
