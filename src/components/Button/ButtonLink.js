import React, {Component} from "react";
import styles from './Button.scss'


import CssModules from 'react-css-modules';

class ButtonLink extends Component {

    render() {
      const {href, children, variant, ...other} = this.props;
      return (
        <a href={href} styleName={variant} {...other}>{children}</a>
      )
   }
}

ButtonLink.defaultProps = {
  href: '#',
  variant: "default",
};

export default CssModules(ButtonLink, styles);