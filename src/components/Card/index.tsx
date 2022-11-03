import styles from './styles.module.scss';

interface CardProps {
  image: string;
  title: string;
  description: string;
}

const Card = ({ image, title, description }: CardProps) => {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <img src={image} alt="" />
      </div>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.description}>
        <p>{description}</p>
      </div>
    </article>
  );
};

export default Card;
