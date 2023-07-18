import { styled } from 'styled-components';

export const Container = styled.div`
  max-width: 366px;
  flex-direction: column;
  margin: 32px;
`;

export const LogoBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 22px;
`;

export const LogoImg = styled.img`
  position: fixed;
  width: 83px;
  height: 33px;
  cursor: pointer;
`;

export const MyPageImg = styled.img`
  position: fixed;
  left: 341px;
  width: 83px;
  height: 33px;
  cursor: pointer;
`;

export const ProfileIconsBox = styled.div`
  display: relative;
  width: 33px;
  height: 33px;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 41px;
`;

export const ButtonBox = styled.div`
  display: flex;
`;

export const FilterButton = styled.button`
  border-radius: 8px;
  margin-right: 8px;
  width: 85px;
  height: 34px;
  border: none;
  font-family: 'Noto Sans KR', sans-serif;
  flex-shrink: 0;
  justify-content: center;
  font-weight: 700;
  background-color: #ffdc89;
  cursor: pointer;
`;

export const WritingButton = styled.button`
  border-radius: 8px;
  width: 105px;
  height: 34px;
  border: none;
  font-family: 'Noto Sans KR', sans-serif;
  flex-shrink: 0;
  justify-content: center;
  font-weight: 700;
  background-color: #008080;
  color: #fff;
  cursor: pointer;
`;

export const PostFeedContainer = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: 326px;
  height: 557px;
  padding: 20px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ProfileContainer = styled.div`
  display: flex;
  margin-right: 10px;

  align-items: center;
`;

export const ProfileImage = styled.div`
  width: 56px;
  height: 56px;
  background-color: orange;
  border-radius: 50%;
  cursor: pointer;
`;

export const ProfileNameBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 11px;
  flex-direction: column;
`;

export const ProfileNickName = styled.h3`
  display: flex;
  color: #292d32;
  font-size: 16px;
  height: 22px;
  font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-weight: 700;
  cursor: pointer;
`;

export const profileCategory = styled.p`
  color: #808080;
  font-size: 14px;
  font-weight: 500;
  margin-top: 3px;
  font-family: 'Noto Sans KR', sans-serif;
`;

export const MoreDetailBox = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;

export const MoreSvg = styled.img`
  width: 20px;
`;

export const FeedImage = styled.div`
  margin-top: 22px;
  background-color: blue;
  height: 340px;
  border-radius: 20px;
`;

export const FeedTitle = styled.h2`
  color: #292d32;
  margin-top: 22px;
  font-size: 16px;
  font-weight: 600;
  font-family: 'Noto Sans KR', sans-serif;
  line-height: normal;
`;

export const FeedDetail = styled.p`
  color: #292d32;
  margin-top: 6px;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Noto Sans KR', sans-serif;
  line-height: normal;
`;

export const Footer = styled.div`
  margin-top: 18px;
  display: flex;
  justify-content: space-between;
`;

export const DetailInformationContainer = styled.div``;

export const LimitInformation = styled.div`
  display: flex;
  align-items: center;
`;

export const PeopleSvg = styled.img`
  color: #808080;
  width: 22px;
`;

export const PeopleCount = styled.span`
  color: #808080;
  width: 36px;
  font-size: 14px;
  font-weight: 400;
  font-family: 'Noto Sans KR', sans-serif;
  line-height: normal;
  margin-left: 5px;
`;

export const ClockSvg = styled.img``;

export const TimeLimitDetail = styled.span`
  margin-left: 5px;
  color: #808080;
  font-size: 14px;
  font-family: 'Noto Sans KR', sans-serif;
  line-height: normal;
`;

export const LocationBox = styled.div`
  display: flex;
  margin-top: 10px;
  align-items: center;
`;

export const LocationSvg = styled.img``;

export const LocationName = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: #808080;
  margin-left: 5px;
  font-family: 'Noto Sans KR', sans-serif;
  line-height: normal;
`;

export const EnterChatButton = styled.button`
  border-radius: 8px;
  width: 95px;
  height: 37px;
  border: none;
  font-weight: 700;
  background-color: #ffdc89;
  color: #292d32;
  cursor: pointer;
  font-family: 'Noto Sans KR', sans-serif;
  line-height: normal;
`;

export const Div = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
`;
