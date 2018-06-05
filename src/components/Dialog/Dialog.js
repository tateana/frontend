import React, {Component} from "react";
import CssModules from 'react-css-modules';
import styles from './Dialog.scss'


class Dialog extends Component {

    constructor(props) {
        super(props);

        this.handleDisabledAreaClick = this.handleDisabledAreaClick.bind(this);
    }
    
    componentDidMount() {
        this.orig = document.body.className;
        document.body.className = this.orig + (this.orig ? ' ' : '') + styles['disabled-body'];
    }

    componentWillUnmount() {
        document.body.className = this.orig;
    }

    handleDisabledAreaClick(event) {
        console.log(event.target.className);
        if (event.target.className == styles.simple) {
            event.stopPropagation();
            return;
        }

        this.props.onClose();
    }

    render() {
      const {children, onClose, ...other} = this.props;
      return (
        <div styleName="diasabled-area" onClick={this.handleDisabledAreaClick}>
            <div styleName="internal-area">
                <div styleName="simple" {...other} >
                {children}
                </div>
            </div>
        </div>
      )
   }
}

Dialog.defaultProps = {
  onClose: null
};

export default CssModules(Dialog, styles);