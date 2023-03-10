import {Link} from 'react-router-dom';

import {HOME_ROUTE} from '../../../utils/consts';

import logo from '../../../assets/images/logo.png';

import styles from './Logo.module.scss';

const Logo = ({className, ...props}) => {
  return (
    <Link
      to={HOME_ROUTE}
      className={`${styles.root}${className ? ` ${className}` : ''}`}
      {...props}
    >
      <img className={styles.img} src={logo} alt="Логотип" />
    </Link>
  );
};

export default Logo;