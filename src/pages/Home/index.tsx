import Header from '../../components/Header';
import Team from '../../components/Team';
import Benefits from '../../components/Benefits';

import styles from './styles.module.scss';

const Home = () => {
  return (
    <main className={styles.container}>
      <Header />
      <Team />
      <Benefits />
    </main>
  );
};

export default Home;
