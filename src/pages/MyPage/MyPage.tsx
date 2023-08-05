import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BACKEND_API_URL } from '../../constants/api';
import { Feed } from '../../types/feedType';
import FeedDetail from '../../components/FeedDetail';
import Icon from '../../components/Icon';
import * as S from './MyPage.style';

const MyPage = () => {
  const [curCategory, setCurCategory] = useState('내가 쓴\n게시글');
  const [postList, setPostList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('/data/postData.json');
        const data = await response.json();
        setPostList(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    void getData();
  }, []);

  const getEditInfo = () => {
    const accessToken = localStorage.getItem('accessToken') as string;

    const getData = async () => {
      try {
        const response = await fetch(`${BACKEND_API_URL}/users`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const data = await response.json();
        navigate('/signup', { state: data });
      } catch (error) {
        console.error(error);
      }
    };
    void getData();
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
            getEditInfo();
          }}
        />
      </S.MenuBox>
      <S.UserInfoBox>
        <S.UserImg />
        <S.UserNickName>닉네임</S.UserNickName>
        <S.UserEmail>이메일</S.UserEmail>
      </S.UserInfoBox>
      <S.CategoryBox>
        {CATEGORY_TITLE.map(({ title, id }) => {
          return (
            <S.CategoryTitle
              key={id}
              type={curCategory === title}
              onClick={() => {
                setCurCategory(title);
              }}
            >
              {title}
            </S.CategoryTitle>
          );
        })}
      </S.CategoryBox>
      <S.ListBox>
        {postList.map((list: Feed) => {
          return (
            <S.ListCard key={list.id}>
              <FeedDetail {...list} />
            </S.ListCard>
          );
        })}
        <S.FollowCard>
          <S.UserImg />
          <S.NickName>마포꿀주먹</S.NickName>
        </S.FollowCard>
      </S.ListBox>
    </>
  );
};

export default MyPage;

const CATEGORY_TITLE = [
  { id: 1, title: '내가 쓴\n게시글' },
  { id: 2, title: '채팅방\n리스트' },
  { id: 3, title: '친구 목록' },
];
