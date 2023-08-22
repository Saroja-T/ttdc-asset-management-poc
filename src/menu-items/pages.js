// assets
import { LoginOutlined, ProfileOutlined,UserOutlined } from '@ant-design/icons';

// icons
const icons = {
  LoginOutlined,
  ProfileOutlined,
  UserOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
  id: 'authentication',
  title: 'Asset Management',
  type: 'group',
  children: [
    {
      id: 'login1',
      title: 'Assets',
      type: 'item',
      url: '/assets',
      icon: icons.LoginOutlined,
      target: false
    },
    {
      id: 'vendors',
      title: 'Vendors',
      type: 'item',
      url: '/vendors',
      icon: icons.ProfileOutlined,
      target: false
    },
    {
      id: 'employee',
      title: 'Employees',
      type: 'item',
      url: '/employees',
      icon: icons.UserOutlined,
      target: false
    }
   
  ]
};

export default pages;
