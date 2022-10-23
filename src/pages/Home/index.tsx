import Header from '../../components/Header';
import Team from '../../components/Team';
import Benefits from '../../components/Benefits';

import styles from './styles.module.scss';
import JobsFooter from '../../components/JobsFooter';

const Home = () => {
  return (
    <main className={styles.container}>
      <Header />
      <Team />
      <Benefits />
      <JobsFooter />
    </main>
  );
};

export default Home;
