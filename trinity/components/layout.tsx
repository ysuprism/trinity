import Header from './header';
import styles from './layout.module.css';
export default function Layout({ children }: any) {
  return (
    <div className={styles.bg}>
      <Header />
      {children}
    </div>
  );
}
