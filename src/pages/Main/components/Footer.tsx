import location from '../../../assets/location.svg';
import people from '../../../assets/people.svg';
import clock from '../../../assets/clock.svg';
import * as S from '../Main.style';

interface feedDataProps {
  feedData?: {
    id?: number;
    title?: string;
    detail?: string;
    personnel?: number;
    time?: string;
    location?: string;
  };
}

const Footer = ({ feedData }: feedDataProps) => {
  return (
    <S.Footer>
      <S.DetailInformationContainer>
        <S.LimitInformation>
          <S.PeopleSvg src={people} />
          <S.PeopleCount>{feedData?.personnel} 명</S.PeopleCount>
          <S.ClockSvg src={clock} />
          <S.TimeLimitDetail>{feedData?.time}</S.TimeLimitDetail>
        </S.LimitInformation>
        <S.LocationBox>
          <S.LocationSvg src={location} />
          <S.LocationName>{feedData?.location}</S.LocationName>
        </S.LocationBox>
      </S.DetailInformationContainer>
      <S.Div>
        <S.EnterChatButton>채팅방 입장</S.EnterChatButton>
      </S.Div>
    </S.Footer>
  );
};

export default Footer;
