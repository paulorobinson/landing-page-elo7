import { HTMLProps } from 'react';
import styles from './styles.module.scss';

interface LinkProps extends HTMLProps<HTMLAnchorElement> {
  href: string;
  children: string;
  isCenter?: boolean;
}

const Link = ({ children, isCenter, ...props }: LinkProps) => {
  return (
    <div
      className={`${styles.wrapperLink} ${
        isCenter === undefined || isCenter === true ? styles.center : ''
      }`}
    >
      <a className={styles.link} target="_blank" {...props}>
        {children} <span>&#8811;</span>
      </a>
    </div>
  );
};

export default Link;
