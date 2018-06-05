import React, {Component} from "react";
import CssModules from 'react-css-modules';
import styles from './Card.scss'

class Content extends Component {

    constructor(props) {
        super(props);

        this.state = {isExpanded: this.props.isExpanded};     
        this.handleExpandClick = this.handleExpandClick.bind(this);
    }

    handleExpandClick(event) {
        event.preventDefault();
        this.setState({isExpanded: !this.state.isExpanded});
    }

    isInstanceOf(element, type) {
        return element.type && (element.type.displayName == type || element.type.name == type);
    }

    render() {
        const {children, isExpanded, ...other} = this.props;
        const extendedChildren = React.Children.map(children, child => {
            if (this.isInstanceOf(child, "ExpandButton")) {
                return React.cloneElement(child, {handleClick: this.handleExpandClick, isOpen: this.state.isExpanded })
            }

            if (this.isInstanceOf(child, "ExpandContent")) {
                return React.cloneElement(child, {isOpen: this.state.isExpanded })
            }
            
            return child;
        });
        return (
            <div styleName="content" {...other}>
                {extendedChildren}
            </div>
        )
   }
}

Content.defaultProps = {
    isExpanded: false,
};

export default CssModules(Content, styles);