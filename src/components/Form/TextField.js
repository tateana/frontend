import React, {Component} from "react";
import { Text, Field, withField } from 'react-form';

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

    handleInputChange(event) {
        const value = event.target.value
        this.props.fieldApi.setValue(value)
        // this.setState({value: value});   
    }

    handleInputFocusIn(event) {
        this.setState({labelPosition: "out"});
    }

    handleInputFocusOut(event) {
        this.props.fieldApi.setTouched()
        if (!event.target.value) {
            this.setState({labelPosition: "in"});
        }
    }

    render () {
        let { fieldApi: { value, fieldName, error, touched, setTouched}, onChange, onBlur, label,  name, id, validate, ...other } = this.props
        if(!value && value !== 0) {
            value = ''
        }

        if(!id) {
            id = fieldName
        }

        if(!name) {
            name = fieldName
        }

        let stateStyle;
        if (touched && error) {
            stateStyle = styles.error
        } else if (touched) {
            stateStyle = styles.success
        }

        return (
            <div styleName="group" className={stateStyle}>
                {label && (
                    <label htmlFor={id} styleName={"label_" + this.state.labelPosition}>{label}</label>
                )}
                <input {...other} id={id} name={name} styleName={"input"} onChange = {this.handleInputChange} onBlur={this.handleInputFocusOut} onFocus={this.handleInputFocusIn} value={value} />
                <p styleName="helper">
                    {(error && touched)? error : ''}
                </p>
          </div>
        )
    }
}

export default withField(CssModules(TextField, styles));