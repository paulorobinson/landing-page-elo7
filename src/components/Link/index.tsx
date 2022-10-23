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
        isCenter === undefined || isCenter === true
          ? styles.center
          : styles.notCenter
      }`}
    >
      <a
        className={`${styles.link} ${
          isCenter === undefined || isCenter === true
            ? styles.center
            : styles.notCenter
        }`}
        target="_blank"
        {...props}
      >
        {children}
        {(isCenter === undefined || isCenter === true) && <span>&#8811;</span>}
      </a>
    </div>
  );
};

export default Link;
