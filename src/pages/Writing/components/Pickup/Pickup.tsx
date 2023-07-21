import Input from '../../../../components/Input/Input';
import * as S from './Pickup.style';

interface PickupProps {
  pickupPlaceText: string;
  handleChangePickupPlace: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Pickup = ({ pickupPlaceText, handleChangePickupPlace }: PickupProps) => {
  return (
    <S.PickUpPlaceBox>
      <Input
        title="예상 픽업 장소"
        required={true}
        type=""
        placeholder="동 주소와 상세 주소를 작성해주세요"
        value={pickupPlaceText}
        onChange={handleChangePickupPlace}
        name="pickupPlaceText"
      />
    </S.PickUpPlaceBox>
  );
};

export default Pickup;
