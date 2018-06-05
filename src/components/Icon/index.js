import React, {Component} from "react";
import styles from './Icon.scss'
import base from '../../components/share/icon-basic.css';
import arrows from '../../components/share/icon-arrows.css';
import CssModules from 'react-css-modules';


class Icon extends Component {

    render() {
      const icons = Object.assign({}, base, arrows)
      const {icon, variant, size, className, ...other} = this.props;
      return (
        <i className={[className, styles[size], styles[variant], icons["icon-" + icon]].join(' ')}  {...other} />
      )
   }
}

Icon.defaultProps = {
  icon: 'basic-world',
  variant: "default",
  size: "small"
};

export default CssModules(Icon, styles);