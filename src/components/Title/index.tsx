import { HTMLProps } from 'react';
import styles from './styles.module.scss';

interface TitleProps extends HTMLProps<HTMLHeadingElement> {
  children: string;
  isCenter?: boolean;
}

const Title = ({ children, isCenter }: TitleProps) => {
  return (
    <div
      className={`${styles.container} ${
        isCenter === undefined || isCenter === true ? styles.center : ''
      }`}
    >
      <h1>{children}</h1>
    </div>
  );
};

export default Title;
