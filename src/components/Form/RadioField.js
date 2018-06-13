import React, {Component} from "react";
import {Radio} from 'react-form';

import CssModules from 'react-css-modules';
import styles from './Form.scss'


class RadioField extends Component {

    render () {
        let {label, id, ...other } = this.props

        return (
            <div styleName="radio_group">
                <Radio {...other} id={id} styleName="radio_input"  />
                <label htmlFor={id} styleName="radio_label">
                <span styleName="radio_imitator"></span>
                    {label}
                </label>
            </div>
        )
    }
}

export default CssModules(RadioField, styles);