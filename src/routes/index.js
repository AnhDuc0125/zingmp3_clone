import Home from '~/pages/Home';
import MyMusic from '~/pages/MyMusic';
import ZingChart from '~/pages/ZingChart';
import configs from '~/configs';

const routes = [
  { path: configs.routes.home, page: Home },
  { path: configs.routes.mymusic, page: MyMusic },
  { path: configs.routes.zingchart, page: ZingChart },
];

export default routes;
