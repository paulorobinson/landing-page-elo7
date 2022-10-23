import Card from '../Card';
import styles from './styles.module.scss';

const Benefits = () => {
  return (
    <section className={styles.container}>
      <Card
        image="./src/assets/images/qualidade.png"
        title="Qualidade de vida"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
        officiis ipsa corrupti necessitatibus similique soluta adipisci
        doloremque ipsam perspiciatis, facilis voluptas quae? Ipsam soluta
        magnam necessitatibus assumenda cum cumque est."
      />
      <Card
        image="./src/assets/images/descontracao.png"
        title="Ambiente Descontraído"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
        officiis ipsa corrupti necessitatibus similique soluta adipisci
        doloremque ipsam perspiciatis, facilis voluptas quae? Ipsam soluta
        magnam necessitatibus assumenda cum cumque est.Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
        officiis ipsa corrupti necessitatibus similique."
      />
      <Card
        image="./src/assets/images/atividades.png"
        title="Atividades extras"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
        officiis ipsa corrupti necessitatibus similique soluta adipisci
        doloremque ipsam perspiciatis, facilis voluptas quae? Ipsam soluta
        magnam necessitatibus assumenda cum cumque est."
      />
    </section>
  );
};

export default Benefits;
