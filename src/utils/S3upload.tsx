import AWS from 'aws-sdk';
import { FeedInfo } from '../types/feedType';

const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY;
const SECRET_ACCESS_KEY = process.env.REACT_APP_SECRET_ACCESS_KEY;
const REGION = process.env.REACT_APP_REGION;
const S3_BUCKET = process.env.REACT_APP_S3_BUCKET;

AWS.config.update({
  accessKeyId: ACCESS_KEY,
  secretAccessKey: SECRET_ACCESS_KEY,
});

const myBucket = new AWS.S3({
  params: { Bucket: S3_BUCKET },
  region: REGION,
});

interface props {
  ACL: string;
  Body: string | File;
  Bucket: string;
  Key: string;
}

export const uploadImageFile = (
  image: any,
  setImage: React.Dispatch<React.SetStateAction<string | File | null>>,
  setFeedInfo: React.Dispatch<React.SetStateAction<FeedInfo>>,
) => {
  const params: props = {
    ACL: 'public-read',
    Body: image,
    Bucket: S3_BUCKET,
    Key: S3_BUCKET + '/' + image.name,
  };

  myBucket
    .putObject(params)
    .on('httpUploadProgress', () => {
      setTimeout(() => {
        setImage(null);
      }, 3000);
    })
    .send((err) => {
      if (err) console.error('image upload error', err);
      else {
        const imageUrl = `https://s3.${REGION}.amazonaws.com/${S3_BUCKET}/${params.Key}`;
        setFeedInfo((prev) => ({ ...prev, imageUrl }));
      }
    });
};
