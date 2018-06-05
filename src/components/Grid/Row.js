import React, {Component} from "react";
import CssModules from 'react-css-modules';
import styles from './Grid.scss'

class Row extends Component {
    render() {
        const {children, ...other} = this.props;
        return (
            <div styleName="row" {...other} >
                {children}
            </div>
        )
   }
}

export default CssModules(Row, styles);