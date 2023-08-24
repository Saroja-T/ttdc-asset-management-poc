// assets
import { LoginOutlined, ProfileOutlined,UserOutlined,BarcodeOutlined, AntDesignOutlined,
  SettingOutlined } from '@ant-design/icons';

// icons
const icons = {
  LoginOutlined,
  ProfileOutlined,
  UserOutlined,
  SnippetsOutlined,
  BarcodeOutlined,
  AntDesignOutlined,
  SettingOutlined
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
    },
    {
      id: 'tickets',
      title: 'Tickets',
      type: 'item',
      url: '/tickets',
      icon: icons.SnippetsOutlined,
      id: 'maintenance',
      title: 'Maintenance',
      type: 'item',
      url: '/maintenance',
      icon: icons.AntDesignOutlined,
      target: false
    },
    {
      id: 'reports',
      title: 'Reports',
      type: 'item',
      url: '/reports',
      icon: icons.BarcodeOutlined,
      target: false
    },
    {
      id: 'settings',
      title: 'Settings',
      type: 'item',
      url: '/settings',
      icon: icons.SettingOutlined,
      target: false
    }
   
  ]
};

export default pages;
