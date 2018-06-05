import React, {Component} from "react";
import CssModules from 'react-css-modules';
import styles from './Composition.scss'

class Composition extends Component {
    render() {
        return (
        <div styleName="composition">
            {this.props.images.map((image, index) => <img {...image} key={index} styleName={"photo"+index} />)}
        </div>
        )
   }
}

Composition.defaultProps = {
    images: [],
};

export default CssModules(Composition, styles);