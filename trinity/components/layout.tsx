import { NextPage } from 'next';
import Header from './header';
import styles from './layout.module.css';

const Layout: NextPage = ({ children }) => {
  return <Header>{children}</Header>;
};

export default Layout;
