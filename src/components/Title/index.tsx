import { HTMLProps, ReactNode } from 'react';
import styles from './styles.module.scss';

interface TitleProps extends HTMLProps<HTMLHeadingElement> {
  children: ReactNode;
  isCenter?: boolean;
}

const Title = ({ children, isCenter }: TitleProps) => {
  return (
    <div
      className={`${styles.container} ${
        isCenter === undefined || isCenter === true ? styles.center : ''
      }`}
    >
      <h2>{children}</h2>
    </div>
  );
};

export default Title;
