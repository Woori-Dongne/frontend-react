declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_ACCESS_KEY: string;
    REACT_APP_SECRET_ACCESS_KEY: string;
    REACT_APP_REGION: string;
    REACT_APP_S3_BUCKET: string;
    REACT_APP_FOLDER_NAME: string;
  }
}
