import { MdOutlineLibraryMusic, MdInsertChartOutlined, MdOutlineRadio } from 'react-icons/md';
import { CgDisc } from 'react-icons/cg';
import { BiNews } from 'react-icons/bi';

import configs from '~/configs';

const sidebarItem = [
  { to: configs.routes.mymusic, icon: <MdOutlineLibraryMusic />, title: 'Cá nhân' },
  { to: configs.routes.home, icon: <CgDisc />, title: 'Khám phá' },
  { to: configs.routes.zingchart, icon: <MdInsertChartOutlined />, title: '#zingchart' },
  { to: configs.routes.radio, icon: <MdOutlineRadio />, title: 'Radio' },
  { to: '/following', icon: <BiNews />, title: 'Theo dõi' },
];

export { sidebarItem };
export { default } from './Sidebar';
