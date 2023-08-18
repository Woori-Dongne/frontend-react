import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BACKEND_API_URL } from '../../constants/api';
import { UserInput } from '../Signup/signup.type';
import defaultProfile from '../../assets/profile.png';
import Icon from '../../components/Icon';
import ListBox from './components/ListBox';
import Button from '../../components/Button';
import * as S from './MyPage.style';

const MyPage = () => {
  const [curCategoryId, setCurCategoryId] = useState(0);
  const [curApi, setCurApi] = useState('/posts/user');
  const [isMenuView, setIsMenuView] = useState(false);
  const [userData, setUserData] = useState<UserInput>({
    userName: '',
    gender: '',
    region: '',
    phoneNumber: '',
    imageUrl: '',
  });

  const { userName, region, imageUrl } = userData;

  const navigate = useNavigate();
  const accessToken = localStorage.getItem('accessToken') as string;

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const response = await fetch(`${BACKEND_API_URL}/users`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error(error);
      }
    };

    void getUserInfo();
  }, []);

  const handleCategory = (id: number, url: string) => {
    setCurCategoryId(id);
    setCurApi(url);
  };

  const handleMenuBox = () => {
    setIsMenuView(!isMenuView);
  };

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    navigate('/');
  };

  return (
    <>
      <S.MenuBox>
        <Icon
          name="back"
          clickAction={() => {
            navigate(-1);
          }}
        />
        <S.MenuTitle>My Profile</S.MenuTitle>
        <Icon
          name="setting"
          clickAction={() => {
            handleMenuBox();
          }}
        />
      </S.MenuBox>
      {isMenuView && (
        <S.MenuBoxContainer>
          <S.ButtonContainer>
            <Button
              title="회원정보 수정"
              $border="none"
              $buttonsize="medium"
              $buttonbackground="mainYellow"
              $font="black"
              onClick={() => {
                navigate('/signup', { state: 'myPage' });
              }}
            />
            <Button
              title="로그아웃"
              $border="none"
              $buttonsize="medium"
              $buttonbackground="mainRed"
              $font="black"
              onClick={handleLogout}
            />
          </S.ButtonContainer>
        </S.MenuBoxContainer>
      )}
      <S.UserInfoBox>
        <S.UserImg
          src={imageUrl === null ? defaultProfile : imageUrl}
          alt="profile"
        />
        <S.UserNickName>{userName}</S.UserNickName>
        <S.UserEmail>{region}</S.UserEmail>
      </S.UserInfoBox>
      <S.CategoryBox>
        {CATEGORY_TITLE.map(({ title, id, url }) => {
          return (
            <S.CategoryTitle
              key={id}
              $cur={curCategoryId === id}
              onClick={() => {
                handleCategory(id, url);
              }}
            >
              {title}
            </S.CategoryTitle>
          );
        })}
      </S.CategoryBox>
      <ListBox
        api={curApi}
        id={curCategoryId}
        handleCategory={handleCategory}
      />
    </>
  );
};

export default MyPage;

const CATEGORY_TITLE = [
  { id: 0, title: '내가 쓴 게시글', url: '/posts/user' },
  { id: 1, title: '채팅방 리스트', url: '/posts/chattings' },
  { id: 2, title: '친구 목록', url: '/users/follow' },
];
