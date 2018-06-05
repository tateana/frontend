import React, {Component} from "react";
import CssModules from 'react-css-modules';
import styles from './Card.scss'
import Content from './Content'

class Card extends Component {
    render() {
        const {children, variant, ...other} = this.props;
        return (
            <div styleName={variant} {...other}>
                {children} 
            </div>
        )
   }
}

Card.defaultProps = {
    variant: "default",
};

export default CssModules(Card, styles);