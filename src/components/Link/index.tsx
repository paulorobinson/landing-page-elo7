import { HTMLProps } from 'react';
import styles from './styles.module.scss';

const Link = ({ children, ...props }: HTMLProps<HTMLAnchorElement>) => {
  return (
    <a className={styles.link} target="_blank" {...props}>
      {children} <span>&#8811;</span>
    </a>
  );
};

export default Link;
