import React, {Component} from "react";
import CssModules from 'react-css-modules';
import styles from './Grid.scss'

class Column extends Component {

    constructor(props) {
        super(props);
    }
    

    render() {
        const {col, of, children, ...other} = this.props;
        const styleName = (col == of)? 'col': `col-${col}-of-${of}`;
        return (
            <div styleName={styleName} {...other}>{children}</div>
        )
   }
}

Column.defaultProps = {
    col: 1,
    of: 1
};

export default CssModules(Column, styles);