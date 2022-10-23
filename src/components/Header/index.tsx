import Divider from '../Divider';
import Link from '../Link';
import styles from './styles.module.scss';

const Header = () => {
  return (
    <header className={styles.container}>
      <a href="https://elo7.gupy.io/" target="_blank">
        <div className={styles.wrapperImage}>
          <img
            className={styles.image}
            src="./src/assets/images/foto-header.png"
            alt="VENHA FAZER PARTE DESSE TIME #FORADESÉRIE!"
          />
          <h1 className={styles.title}>Trabalhe no Elo7</h1>
        </div>
      </a>
      <section>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In quos,
          dolore officiis consequatur recusandae temporibus, voluptatem beatae
          laboriosam ullam natus et suscipit dicta, illo aspernatur
          necessitatibus? Eum similique unde dicta.
        </p>
        <Divider />
        <Link href="https://elo7.gupy.io/">Vagas em aberto</Link>
      </section>
    </header>
  );
};

export default Header;
