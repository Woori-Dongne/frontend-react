import { useState } from 'react';
import Icon from '../../../../components/Icon';
import * as S from './Upload.style';

interface Props {
  setImage: any;
  inputRef: any;
  image: any;
}

const Upload = ({ setImage, inputRef }: Props) => {
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const chgPreview = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files != null) {
      const imageFile = e.target.files[0];
      console.log(imageFile);
      setImage(imageFile);
      if (imageFile != null) {
        const imageUrl = URL.createObjectURL(imageFile);
        setImgSrc(imageUrl);
      }
    }
  };

  return (
    <S.ImageUploadContainer>
      <S.ImageUpLoadName>이미지 업로드</S.ImageUpLoadName>
      <S.ImageUpLoadBox>
        {imgSrc === null ? (
          <Icon name="upload" width="24px" height="24px" />
        ) : (
          <S.ImageUpLoad src={imgSrc} />
        )}

        <input
          type="file"
          onChange={chgPreview}
          style={{ display: 'none' }}
          id="imgSrc"
          accept="image/*"
          ref={inputRef}
        />
      </S.ImageUpLoadBox>
    </S.ImageUploadContainer>
  );
};

export default Upload;
