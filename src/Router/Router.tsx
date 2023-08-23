import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from '../components/Nav';
import Login from '../pages/Login/';
import Signup from '../pages/Signup';
import Main from '../pages/Main/Main';
import Writing from '../pages/Writing';
import Chat from '../pages/Chat';
import MyPage from '../pages/MyPage';
import NotFound from '../pages/NotFound';
import KakaoRedirect from '../pages/Login/KakaoLogin/KakaoRedirect';
import PrivateRoute from './PrivateRouter';
import { ChatProvider } from '../components/ChatProvider/ChatProvider';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <ChatProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/kakaologin" element={<KakaoRedirect />} />
          <Route
            path="/signup"
            element={
              <PrivateRoute>
                <Signup />
              </PrivateRoute>
            }
          />
          <Route
            path="/main"
            element={
              <PrivateRoute>
                <Main />
              </PrivateRoute>
            }
          />
          <Route
            path="/writing"
            element={
              <PrivateRoute>
                <Writing />
              </PrivateRoute>
            }
          />
          <Route
            path="/chat"
            element={
              <PrivateRoute>
                <Chat />
              </PrivateRoute>
            }
          />
          <Route
            path="/mypage"
            element={
              <PrivateRoute>
                <MyPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ChatProvider>
    </BrowserRouter>
  );
};

export default Router;
