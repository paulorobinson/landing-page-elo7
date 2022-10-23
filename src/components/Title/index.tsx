import { HTMLProps } from 'react';
import styles from './styles.module.scss';

const Title = ({ children }: HTMLProps<HTMLHeadingElement>) => {
  return (
    <div className={styles.container}>
      <h1>{children}</h1>
    </div>
  );
};

export default Title;
