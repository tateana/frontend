import React, {Component} from "react";
import CssModules from 'react-css-modules';
import styles from './Card.scss'
import Icon from '../Icon'

class ExpandButton extends Component {

    render() {
        const {children, isOpen, handleClick, ...other} = this.props;
        const icon = isOpen? "arrows-down": "arrows-up";
        
        return (
            <div styleName="expand-btn-box" onClick={handleClick}>
                <Icon icon={icon} className={styles["expand-btn"]}  />
            </div>
        )
   }
}



export default CssModules(ExpandButton, styles);