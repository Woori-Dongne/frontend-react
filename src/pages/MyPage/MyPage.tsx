import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BACKEND_API_URL } from '../../constants/api';
import { UserInput } from '../Signup/signup.type';
import Icon from '../../components/Icon';
import ListBox from './components/ListBox';
import * as S from './MyPage.style';

const MyPage = () => {
  const [curCategoryId, setCurCategoryId] = useState(0);
  const [curApi, setCurApi] = useState('/posts/user?offset=0');
  const [userData, setUserData] = useState<UserInput>({});
  const { userName, region } = userData;

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

  return (
    <>
      <S.MenuBox>
        <Icon
          name="back"
          clickAction={() => {
            navigate('/main');
          }}
        />
        <S.MenuTitle>My Profile</S.MenuTitle>
        <Icon
          name="setting"
          clickAction={() => {
            navigate('/signup', { state: 'myPage' });
          }}
        />
      </S.MenuBox>
      <S.UserInfoBox>
        <S.UserImg />
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
      <ListBox id={curCategoryId} api={curApi} />
    </>
  );
};

export default MyPage;

const CATEGORY_TITLE = [
  { id: 0, title: '내가 쓴 게시글', url: '/posts/user?offset=0' },
  { id: 1, title: '채팅방 리스트', url: '/users/posts' },
  { id: 2, title: '친구 목록', url: '/users/follow' },
];
