import React, {Component} from "react";

class ExpandContent extends Component {
    render() {
        const {children, isOpen, ...other} = this.props;
        if (!isOpen) {
            return null;
        }
        
        return (
            <div {...other}>
                {children}
            </div>
        )
   }
}

export default ExpandContent;