import navLogo from '../../assets/navLogo.svg';
import myPage from '../../assets/myPage.svg';
import master from '../../assets/master.svg';
import people from '../../assets/people.svg';
import time from '../../assets/time.svg';
import location from '../../assets/location.svg';
import back from '../../assets/back.svg';
import setting from '../../assets/setting.svg';
import notFound from '../../assets/notFound.svg';
import out from '../../assets/out.svg';
import more from '../../assets/more.svg';
import logos from '../../assets/logos.svg';

interface IconList {
  [key: string]: string;
  navLogo: string;
  myPage: string;
  master: string;
  people: string;
  time: string;
  location: string;
  back: string;
  setting: string;
  notFound: string;
  out: string;
  more: string;
  logos: string;
}

export const iconList: IconList = {
  navLogo,
  myPage,
  master,
  people,
  time,
  location,
  back,
  setting,
  notFound,
  out,
  more,
  logos,
};
