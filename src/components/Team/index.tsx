import Title from '../Title';
import styles from './styles.module.scss';

const Team = () => {
  return (
    <section className={styles.container}>
      <div className={styles.about}>
        <a
          href="https://www.youtube.com/watch?v=d0LaoRbuJSw&ab_channel=CortesdoDigitalizePodcast"
          target="_blank"
        >
          <img src="./src/assets/images/placeholder-video.png" alt="" />
        </a>

        <div className={styles.aboutDescription}>
          <header>
            <h2>Palavra do CEO</h2>
            <p>Carlos Curioni</p>
          </header>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum autem
            temporibus quasi molestiae delectus optio rerum nihil amet. Sunt
            impedit non cupiditate quos, deserunt nobis deleniti ducimus
            possimus animi reiciendis!
          </p>
        </div>
      </div>
      <Title>
        Conheça nosso time <br /> fora de série
      </Title>
      <div className={styles.teamImages}>
        <img src="./src/assets/images/camila.png" alt="" />
        <img src="./src/assets/images/guto.png" alt="" />
        <img src="./src/assets/images/david.png" alt="" />
        <img src="./src/assets/images/beatriz.png" alt="" />
      </div>
    </section>
  );
};

export default Team;
