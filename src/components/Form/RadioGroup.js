import React, {Component} from "react";
import {withField} from 'react-form';

import CssModules from 'react-css-modules';
import styles from './Form.scss'


class RadioGroup extends Component {
    constructor(props) {
        super(props);
        this.props.fieldApi.setValue(this.props.value)
    }

    render () {
        const {children, fieldApi, ...other} = this.props;
        const extendedChildren = React.Children.map(children, child =>
            React.cloneElement(child, { 
                radioGroup: {
                    ...fieldApi
                },
            })
        );

        return (
            <div styleName="group">
                {extendedChildren}
            </div>
        )
    }


    renderold () {
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
                {error && touched && (
                    <p styleName="helper">{error}</p>
                )}
          </div>
        )
    }
}

export default withField(CssModules(RadioGroup, styles));