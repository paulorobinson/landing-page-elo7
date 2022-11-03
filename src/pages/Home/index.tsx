import Header from '../../components/Header';
import Team from '../../components/Team';
import Benefits from '../../components/Benefits';

import styles from './styles.module.scss';
import JobsFooter from '../../components/JobsFooter';

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <Team />
        <Benefits />
        <JobsFooter />
      </main>
    </div>
  );
};

export default Home;
