import React, {Component} from "react";
import CssModules from 'react-css-modules';
import styles from './Card.scss'

class Header extends Component {
    render() {
        const {children, ...other} = this.props;
        return (
            <h3 styleName="header" {...other}>
                {children}
            </h3>
        )
   }
}

export default CssModules(Header, styles);