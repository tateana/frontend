import React, {Component} from "react";
import styles from './Button.scss'


import CssModules from 'react-css-modules';

class Button extends Component {

    render() {
      const {children, variant, ...other} = this.props;
      return (
        <button styleName={variant} {...other}>{children}</button>
      )
   }
}

Button.defaultProps = {
  type: 'button',
  variant: "default",
};

export default CssModules(Button, styles);