# 우리동네

<div align="center">
    
![우리동네](https://github.com/Woori-Dongne/frontend-react/assets/78401083/1252ff99-839e-4a55-8b98-053a95a6a33a)

</div>

## 프로젝트 기간

> **2023.07.11 ~ 2023.08.18**

## 프론트엔드 소개

|                  최선영                  |                 조건호                  |                 김명성                 |
| :--------------------------------------: | :-------------------------------------: | :------------------------------------: |
| [@suny0ung](https://github.com/suny0ung) | [@Geonoooo](https://github.com/alchogh) | [@KIM_MS](https://github.com/sstaar91) |

## 프로젝트 소개

우리동네는 동네 주민간의 원활한 소통을 지향하는 SNS입니다. </br>해당 SNS를 통해 나와 가까운 주민과의 유대적 친밀감을 형성할 수 있고,
</br>나아가서는 선조들이 지켜오던 향약, 두레의 정신을 이어 서로를 돕는 사회를 형성합니다.

## 시작 가이드

### Installation

```bash
$ git clone https://github.com/Woori-Dongne/frontend-react
$ npm install
$ npm start
```

---

## Stacks 🐈

### Environment

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)

### Config

![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

### Development

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square)
![styled-components](https://img.shields.io/badge/styled%20components-DB7093?style=flat-square&logo=styled-components&logoColor=white)

### Communication

![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=Slack&logoColor=white)
![Notion](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white)

---

## 주요 기능 📦

### 🏘️ 소셜 로그인 (카카오톡)

![카카오톡 로그인](https://github.com/Woori-Dongne/frontend-react/assets/78401083/f7f281e8-9e54-4137-91bf-a07208895195)
- 소셜 로그인 (카카오톡)을 이용해 사용자의 접근성과 편리함을 높임
- 처음 가입하는 유저에게는 추가 정보 (닉네임, 상세 주소, 핸드폰 번호)를 입력하도록 설정
- 기존 유저에게는 추가 정보를 기입하는 프로세스를 제거

### 🏘️ 게시글 작성 기능

![글 작성 페이지](https://github.com/Woori-Dongne/frontend-react/assets/78401083/fc3e7d4a-aed4-4a1e-b46a-3236aec4120a)
- 타이틀, 카테고리, 지역, 인원, 날짜 데이터를 통한 게시글 작성 및 채팅방 개설
- S3를 통한 이미지 업로드 기능
- 게시글 수정시 게시글의 id만으로 해당 글에 대한 데이터가 보여질 수 있도록 구현

### 🏘️ 채팅 기능

![채팅방](https://github.com/Woori-Dongne/frontend-react/assets/78401083/a01af4ad-704c-409c-a5c2-219179543477)
- WebSocket 통신 방식을 이용한 유저간의 채팅 기능
- 나를 제외한 다른 유저를 친구로 등록하거나 신고하는 기능



### 디렉토리 구조
```bash
├── public
│   ├── index.html
├── src
│   ├── index.tsx
│   ├── Router.tsx
│   ├── assets : 프로젝트에 사용되는 이미지를 관리하는 폴더
│   ├── components : 공통 컴포넌트를 관리하는 폴더
│   ├── constants : 상수 데이터를 관리하는 폴더
│   ├── hooks : Custom hook을 관리하는 폴더
│   ├── lib : 라이브러리와 관련한 함수를 관리하는 폴더
│   ├── pages
│   ├── styles
│   ├── types
│   └── utils
├── tsconfig.json
├── .env
├── .eslintrc
├── .prettierrc
├── README.md
├── package-lock.json
└── package.json
```

