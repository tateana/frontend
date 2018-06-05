import React, {Component} from "react";
import { Text } from 'react-form';

import CssModules from 'react-css-modules';
import styles from './Form.scss'


class TextField extends Component {
    constructor(props) {
        super(props);

        this.state = {labelPosition: this.props.defaultValue? "out": "in"};     
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleInputFocusIn = this.handleInputFocusIn.bind(this);
        this.handleInputFocusOut = this.handleInputFocusOut.bind(this);
    }

    handleInputChange(value, event) {
        console.log(value);
        this.setState({value: value});   
    }

    handleInputFocusIn(event) {
        this.setState({labelPosition: "out"});
    }

    handleInputFocusOut(event) {
        if (!event.target.value) {
            this.setState({labelPosition: "in"});
        }
    }

    render() {
        let {children, label, name, id, ...other} = this.props;
        if (!id) {
            id = name;
        }

        const lableStyle = "form_label_" + this.state.labelPosition
        return (
            <div styleName="form_group">
                {label && (
                    <label htmlFor={id} styleName={lableStyle}>{label}</label>
                )}
                <Text {...other} field={id} id={id} styleName="form_input" onChange = {this.handleInputChange} onBlur={this.handleInputFocusOut} onFocus={this.handleInputFocusIn}   />
            </div>
        )
   }
}

export default CssModules(TextField, styles);