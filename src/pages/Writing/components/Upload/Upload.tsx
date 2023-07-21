import { useState } from 'react';
import Icon from '../../../../components/Icon';
import * as S from './Upload.style';

const Upload = () => {
  const [imgSrc, setImgSrc] = useState<string | null>(null);

  const chgPreview = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files != null) {
      const imageFile = e.target.files[0];
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
        />
      </S.ImageUpLoadBox>
    </S.ImageUploadContainer>
  );
};

export default Upload;
