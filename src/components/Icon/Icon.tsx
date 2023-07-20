import { iconList } from './iconList';
import * as S from './Icon.style';

interface Props {
  name: string;
  clickAction?: () => void;
  width?: string;
  height?: string;
}

const Icon = ({
  name,
  clickAction,
  width = 'inherit',
  height = 'inherit',
}: Props) => {
  return (
    <S.IconContainer
      src={iconList[name]}
      alt={name}
      onClick={clickAction}
      width={width}
      height={height}
    />
  );
};

export default Icon;
