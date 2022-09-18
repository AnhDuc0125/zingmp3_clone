import Home from '~/pages/Home';
import MyMusic from '~/pages/MyMusic';
import ZingChart from '~/pages/ZingChart';
import Radio from '~/pages/Radio';
import Following from '~/pages/Following';
import NewRelease from '~/pages/NewRelease';
import configs from '~/configs';

const routes = [
  { path: configs.routes.home, page: Home },
  { path: configs.routes.mymusic, page: MyMusic },
  { path: configs.routes.zingchart, page: ZingChart },
  { path: configs.routes.radio, page: Radio },
  { path: configs.routes.following, page: Following },
  { path: configs.routes.newRelease, page: NewRelease },
];

export default routes;
